import React, {useEffect, useState} from "react";
import axios from "axios"
import '../App.css'

 const Global = () => {
     const [confirmed, setConfirmed] = useState([]);
     const [deaths, setDeaths] = useState([]);
     const [recovered, setRecovered] = useState([]);
     useEffect(() => {
         axios 
         .get("https://covid19.mathdro.id/api")
         .then((response) =>

         {
             setConfirmed(response.data.confirmed.value);
             setDeaths(response.data.deaths.value);
             setRecovered(response.data.recovered.value);
         })
     }, []);

    
     return( 

        
         <div>
             
             <font color="grey"><b>Jumlah kasus seluruh dunia</b></font>
             <br></br>
             <h1 className ="boxPerawatan">Positif {confirmed}</h1>
             <h1 className ="boxSembuh">Sembuh {recovered}</h1>
             <h1 className ="boxMeninggal">Meninggal {deaths}</h1>
            </div>
     
         
     )
 }
 export default Global
