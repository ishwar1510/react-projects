import React from 'react'
import Axios from "axios"


class Http extends React.Component{
   componentDidMount(){
      Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((Response)=>{
         console.log(Response.data);
      })
      .catch((err)=>{
         console.log(err);
      })
   }
   render(){
      return(
         <div>
            <h1><button onClick={this.getData}> Get Data </button></h1>
         </div>
      )
   }
}
export default Http