import React,{useState} from "react"
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import Users from "./components/Users";







const App = () => {

  const [toggler, settoggler] = useState(true);
  const [users, setusers] = useState([]);
  
  


  return(
    <div className="w-screen h-screen overflow-y-auto bg-gray-800 text-white p-10 flex  flex-row">
      <div className="w-[65%] pt-20">
        {toggler ? ( <Signin toggler = {toggler} settoggler = {settoggler} users = {users} setusers = {setusers} />
        ): ( <Signup toggler = {toggler} settoggler = {settoggler} users ={users} setusers ={setusers} />
        )}
      </div>

      <div className="w-[35%] flex flex-col gap1 p-10">
        <Users users ={users} setusers = {setusers} />
      </div>


        
        
    </div>

    
  )
}

export default App