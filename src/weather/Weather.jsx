import styled from "./Weather.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Weather(props) {
  // const url ='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}';

  // const url = "https://randomuser.me/api";
 
  // const [location, setLocation] = useState("");
  // const searchLocation=(event)=>{
  //     if(event.key==="Enter" ){
  //         axios.get(url).then(result=>{
  //           setData(result.data);

  //         })
  //         setLocation("")
  //     }
  // }







  // const [data, setData] = useState("");
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data)
  //     })
     
  // }, []);



  // return (
  //   <div className={styled.Weather}>
  //      <ul>
  //       {
  //         data.map(person =>
  //             <li key={person.id}>{person.name}</li>
  //           )
  //       }
  //     </ul>




  
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setData(res.data)
      })
     
  }, []);

  return (
    <div>
      {
          data.map((person ,index)=>
             <div className={styled.box} key={index}>
               <p>{person.name} =</p>
               <p >{person.email}</p>
             </div>
            )
        }
     










      {/* <input type="text"
                autoComplete="off"
                placeholder="search for city ..."
                 value={location}
                 onChange={(event)=> setLocation(event.target.value)}
                 onKeyUp={searchLocation}
                
                />
                <p>{data.first}</p> */}

      {/* {data.main ? <h3>{data.main.temp.toFixed()-273}</h3> :null} */}

      {/* {Math.floor(data.main?.temp- 273.15)} */}
    </div>
  );
}
export default Weather;
