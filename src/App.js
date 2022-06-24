import React from 'react'
import { Grid, Box, List } from '@mui/material';


import Task from './components/Task'
import Alert from './components/Alert'
import Header from './components/Header'
import InputTask from './components/inputTask'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      addTaskOpen: false,
      searchText: "",
      severity: "success",
      textAlert: "Задача обновлена",
      alertOpen: false,
      tasks: [
        {id: 0, task: "Do it 1", status: false},
        {id: 1, task: "Do it 2", status: true},
        {id: 2, task: "Do it 3", status: false},
      ]
    }
  }

  addtask = task => {
    let { tasks } = this.state
    tasks.push({
      id: tasks.length !== 0 ? task.length : 0,
      task: task,
      status: false
    })
    this.getAlert("success", "Task has been created")
    return tasks
  }

  updateStatus = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id)
    this.setState(state => {
      let { tasks } = state
      if (tasks[index].status === false){
        this.getAlert("success", "Task has been update")
      }
      tasks[index].status = true;
      return tasks
    })
  }

  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id)
    this.setState(state => {
      let { tasks } = state
      delete tasks[index]
      this.getAlert("warning", "Task has been delete")
      return tasks
    })
  } 


  getAlert = (severity, textAlert) => {
    this.setState({
      severity: severity,
      textAlert: textAlert,
      alertOpen: true
    })
    setTimeout(() => this.setState({alertOpen: false}), 3000)
  }

  searchTask = e => {
    this.setState({
      searchText: e.target.value
    })
    
  }

  openAddTask = () => {
    this.state.addTaskOpen ? this.setState({ addTaskOpen: false}) : this.setState({ addTaskOpen: true})
  }

  render(){

    const activeTask = this.state.tasks.filter(task => !task.status)
    const completeTask = this.state.tasks.filter(task => task.status)
    const search = [...activeTask, ...completeTask].filter(task => task.task.includes(this.state.searchText))

    return(
      <div className="app">
        <Header openAddTask={this.openAddTask.bind(this)}  searchTask={this.searchTask.bind(this)} searchText={this.state.searchText} />
        <Box sx={{
            marginLeft: "30%",
            width: "60%",
            height: "auto",
            overflow: "auto",}}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <List>
                { this.state.searchText ? 
                  search.map(task => (
                    <Task updateStatus={() => this.updateStatus(task.id)} deleteTask={() => this.deleteTask(task.id)} key={task.id} task={task.task} status={task.status}></Task>
                  ))
                : 
                  [...activeTask, ...completeTask].map(task => (
                    <Task updateStatus={() => this.updateStatus(task.id)} deleteTask={() => this.deleteTask(task.id)} key={task.id} task={task.task} status={task.status}></Task>
                  )) }
              </List>
            </Grid>
          </Grid>
          { this.state.alertOpen ? <Alert getAlert={() => this.getAlert()} open={this.state.alertOpen} severity={this.state.severity} text={this.state.textAlert} /> : null}
          { this.state.addTaskOpen ? <InputTask addTask={this.addtask.bind(this)} /> : null }
        </Box>
      </div>
    )
  }

}

export default App;
