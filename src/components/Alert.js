import { Alert, Collapse } from '@mui/material';


const AlertCustom = props => {


    return(
        <div>
            <Collapse in={props.open} sx={{
                width: 200,
                position: "absolute",
                left: "80%",
                top: "20%",
                zIndex: "1",
            }}>
                <Alert severity={props.severity}>{props.text}</Alert>
            </Collapse>
        </div>
    );
};


export default AlertCustom