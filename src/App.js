/*import ClassComponent from './ClassComponent'
import PropsExample from './PropsExample'
import Demo from './Demo'
import StateExample from './StateExample'
import FuncProps from './FuncProps'
import Events from './Events'
import JSX from'./JSX'*/
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import NotFound from './Components/NotFound'

 function App(){
  return(
     <div>
          <BrowserRouter>
              <Navbar/>
              <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                     <Route path="/contact" element={<Contact/>}/>
                     <Route path="*" element={<NotFound/>}/>
             </Routes>        
            </BrowserRouter>         

      {/*<StateExample/>
   <JSX/>
    <Events/>
     <Demo price="1st price"/>
    <StateExample/>
    <section>
          <PropsExample name="Renu" age="20"/>
          <PropsExample name="manasa" age="20"/>
          { /*<h1>feelings</h1>
          <p>some days are bad</p>
          <img src="https://wallpaperaccess.com/full/507560.jpg" width="25%" alt="first"/>
          <ClassComponent/>
     </section>
        <FuncProps carname="audio" year="1985"/>
        <h1>good afternoon</h1>
     </div>*/}
     </div>


    )
}

export default App