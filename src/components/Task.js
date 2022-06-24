
import {List, ListItem, ListItemText, IconButton  } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check'



const Task = props => {

    const colorStandart = "#178bfa"
    const colorHover = "#F4AAB9"

    return( 
            <ListItem 
            sx ={{
                marginTop: 1,
                borderRadius: 10,
                border: "0.5px solid #178bfa",
                color: colorStandart,
                textDecoration: props.status ? "line-through" : "none" ,
                '&:hover':{
                    //boxShadow: `4px 6px 5px 5px ${colorHover}`,
                    border: `0.5px solid ${colorHover}`,
                    color: colorHover,
                    
                }}}
            secondaryAction={
                <List>
                    <IconButton onClick={props.updateStatus} edge="" aria-label="check">
                        <CheckIcon sx ={{ color: colorStandart, '&:hover': { color: colorHover } }} />
                    </IconButton>
                    <IconButton  onClick={props.deleteTask} edge="end" aria-label="delete">
                        <DeleteIcon  sx ={{ color: colorStandart, '&:hover': { color: colorHover } }} />
                    </IconButton>
                </List>}>
                <ListItemText primary={props.task}/>
            </ListItem>
    )
}


export default Task




 