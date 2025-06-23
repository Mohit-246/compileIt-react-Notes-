import './App.css'
import FifthComponent from './FifthComponent'
import FirstComponent from './FirstComponent'
import FourthComponent from './FourthComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'

import Auth from './Auth'
import ProfilePage from './ProfilePage'
import { BrowserRouter, Route, Routes } from 'react-router'

const AuthProfilePage = Auth(ProfilePage)

// Wrapping ProfilePage with HOC

function App() {
 
   
const vegetables = ["Cabbage", "Tomato", "Cauliflower", "Potato"]
  return (
  <>


  <BrowserRouter>

     
    <Routes>
        <Route path='/' element={<AuthProfilePage isLoggedIn={true} username="Sasi"/>} />
        <Route path='/home' element={<FirstComponent />} />
        <Route path='/home/veggies' element={<SecondComponent vegetables={vegetables}/>} />
       <Route path='/counter' element={<FourthComponent />} />
       <Route path='/home/products' element={<FifthComponent />} />
    </Routes>
  </BrowserRouter>




  
  {/* <div style={{textAlign: 'center'}}>
      <FourthComponent />
  </div> */}

          {/* <ThirdComponent /> */}


              {/* <div style={{textAlign: 'center', color: 'firebrick', margin: '3%'}}>
                  Hi hello, Welcome to my profile!!
              </div> */}

            
            
      {/* <FirstComponent /> */}

      {/* <FirstComponent />

      <FirstComponent /> */}

      

      {/* <hr></hr> */}

      {/* <FifthComponent /> */}



  </>
   
  )
}

export default App
