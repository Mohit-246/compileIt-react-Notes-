import './App.css'
import FifthComponent from './FifthComponent'
import FirstComponent from './FirstComponent'
import FourthComponent from './FourthComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'

function App() {
 
const vegetables = ["Cabbage", "Tomato", "Cauliflower", "Potato"]
  return (
  <>
  
  <div style={{textAlign: 'center'}}>
      <FourthComponent />
  </div>

          <ThirdComponent />


              <div style={{textAlign: 'center', color: 'firebrick', margin: '3%'}}>
                  Hi hello, Welcome to my profile!!
              </div>

            
            
      <FirstComponent />

      {/* <FirstComponent />

      <FirstComponent /> */}

      <SecondComponent vegetables={vegetables}/>

      <hr></hr>

      <FifthComponent />
  </>
   
  )
}

export default App
