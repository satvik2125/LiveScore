import React , {Fragment, useEffect ,useState} from "react";
import './App.css';
import Navbar from './components/Navbar';
import Mycard from './components/Mycard';
import {getMatches} from './api/Api';
import { Grid } from "@material-ui/core";
import {Typography} from "@material-ui/core";

function App() {

  const[matches,SetMatches]= useState([]);

  useEffect(() => {
    getMatches()
     .then((data) => SetMatches(data.matches))
     .catch(error=>alert("Error "));
  
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <Typography variant="h3">Welcome to live score app</Typography>
     <Grid container>
       <Grid sm="2"></Grid>
       <Grid sm="8">
       {
      matches.map((match)=>(
        <Fragment>
          {match.type== "Twenty20" ? (
            <Mycard key={match.unique_id} match={match}/>
            ) :(
              ""
            )
            }
        </Fragment>
        
      ))}

       </Grid>
     </Grid>
   
    </div>
  );
}

export default App;
