// import { useState } from "react";

import { useState } from "react";

function FirstComponent() {
 const [view, setView] = useState(false);




 let isLoggedIn = false;
    return (
    <>
      
      {view && <div className="profileCard">
          <img src="https://imgcdn.stablediffusionweb.com/2024/4/7/76683d35-d0e9-4bf4-a630-99a6cc7da8c2.jpg" alt="" width={200} className="profileImg"/>
        <div>
          <h4>Sai</h4>
          <p>Education: B.Tech</p>
          <p>Mobile No: +91 989765432</p>
          <p>Job: Software Engineer</p>
        </div>
      </div>}

      <button onClick={() => setView((prev) => prev === true ? false : true)}>Show Profile</button>


    {isLoggedIn && 
    
      <div style={{textAlign: 'center'}}>
          Hi, Welcome to compileIT
       </div>

       
       }


      {/* {isLoggedIn && 
    
      <div style={{textAlign: 'center'}}>
          Hi, Welcome to compileIT
       </div>

       <div>
         What are your plans ?  -> This is wrong
       </div>
       
       } */}


        {/* {isLoggedIn && 

    <>
    
      <div style={{textAlign: 'center'}}>
          Hi, Welcome to compileIT
       </div>
                    
       <div>                         
         What are your plans ?
       </div>
    </>   
       } */}

{/* The above one is right we must enclose it in a single tag. */}


  
      {isLoggedIn ? 
      
       (<div style={{textAlign: 'center'}}>
          Hi, Welcome to compileIT
       </div>) :

       (
        <div>
           Hey, you're not loggendin!!
        </div>
       )
      
      } 
    
      {/* // Three steps 
      // 1. Replace && with ?
      // 2. Wrap the tags with parenthesis.
      // 3. use : and write another content and wrap it up in (). */}

    </>
    )
}

export default FirstComponent;