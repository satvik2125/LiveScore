
import { Card,CardContent,Typography,Button,CardActions, Grid, Dialog ,DialogTitle,DialogContent,DialogContentText,DialogActions} from "@material-ui/core";
import { Details, ViewStream } from "@material-ui/icons";
import React, { Fragment, useState } from "react";
import { getMatchDetails } from "../api/Api";


const Mycard = ({match}) =>{

    const [detail,setDetail]=useState({});
    const [open,setOpen]=useState(false);

    const handleClick=(id)=>{
        getMatchDetails(id)
        .then((data)=>{
            setDetail(data);
            handleOpen();
        })
        .catch((error)=> console.log(error));

    };

    const getMatchCard = () =>{
        return (
            <Card style={{marginTop:20}}>
                <CardContent>
                    <Grid container justify="center" alignItems="center" spacing={4}>
                        <Grid item>
                            <Typography variant="h5">
                            {match["team-1"]}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4" >V/S</Typography>
                      
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">
                                {match["team-2"]}
                            </Typography>
                        </Grid>

                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center" >
                    <Button onClick={()=>{
                        handleClick(match.unique_id);
                    }} variant="outlined" color="primary">
                        Show Details
                    </Button>
                    <Button style={{marginLeft:5}} variant="outlined" color="primary">
                        Start Time {new Date(match.dateTimeGMT).toLocaleString()}
                    </Button>
                    </Grid>
                </CardActions>
            </Card>
        )
    };
   

    const handleClose=()=>{
            setOpen(false);
    };

    const handleOpen=()=>{
            setOpen(true);
    };

    const getDialog=()=>(
        <Dialog open={open} onClick={handleClose}>
            <DialogTitle id="alert-dialog-title">
                {"Match Detail"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography>
                        {detail.stat}
                    </Typography>
                    <Typography>
                        Match <span style={{fontStyle:"italic",fontWeight:"bold"}}>{detail.matchStarted?"Started":"Still not Started"}</span>
                    </Typography>
                    <Typography>
                        Score <span style={{fontStyle:"italic",fontWeight:"bold"}}>{detail.score}</span>
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>

            </DialogActions>
        </Dialog>
    );
   
   
    return (
        <Fragment>
       { getMatchCard()}
      {  getDialog()}
    </Fragment>
    );
};

export default Mycard;