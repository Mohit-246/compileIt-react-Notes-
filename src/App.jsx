import './App.css'
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'

function App() {
 
const vegetables = ["Cabbage", "Tomato", "Cauliflower", "Potato"]
  return (
  <>

          <ThirdComponent />


              <div style={{textAlign: 'center', color: 'firebrick', margin: '3%'}}>
                  Hi hello, Welcome to my profile!!
              </div>

            
            
      <FirstComponent />

      {/* <FirstComponent />

      <FirstComponent /> */}

      <SecondComponent vegetables={vegetables}/>
  </>
   
  )
}

export default App
