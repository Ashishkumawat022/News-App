import React,{useState} from 'react';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

// import './App .css';
// import PropTypes from 'prop-types'


const App=(props)=>{
  // apiKey= process.env.REACT_APP_NEWS_API

  const pageSize=15;
  const [progress, setProgress] = useState(0)

  
     
    return (
      <div>
         <BrowserRouter>
         <LoadingBar
         height={3}
         color='blue'
         progress={progress} 
      />
         <Navbar/>
        
      
         <Routes>
          <Route exact path="/" element={ <News setProgress={setProgress}  key='general' pageSize={pageSize} country="in" category='general'/>}/>
          <Route exact path="/general" element={ <News setProgress={setProgress}  key='general' pageSize={pageSize} country="in" category='general'/>}/>
          <Route exact path="/business" element={ <News setProgress={setProgress}  key='business' pageSize={pageSize} country="in" category='business'/>}/>
          <Route exact path="/sports" element={ <News setProgress={setProgress}  key='sports' pageSize={pageSize} country="in" category='sports'/>}/>
          <Route exact path="/science" element={ <News setProgress={setProgress}  key='science'  pageSize={pageSize} country="in" category='science'/>}/>
          <Route exact path="/health" element={ <News setProgress={setProgress}  key='health' pageSize={pageSize} country="in" category='health'/>}/>
          <Route exact path="/technology" element={ <News setProgress={setProgress}  key='technology'  pageSize={pageSize} country="in" category='technology'/>}/>
          <Route exact path='entertainment' element={<News setProgress={setProgress}  key='entertainment' pageSize={pageSize} country="in" category='entertainment'/>}/>
        </Routes>
        </BrowserRouter>
       </div>
    )
  }
export default App;
