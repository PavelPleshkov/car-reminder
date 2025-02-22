// import logo from './logo.svg';
import './App.scss';
import Header from './Components/pageComponents/Header';
import Info from './Components/pages/Info';
import StartPage from './Components/pages/StartPage';
import WorkPage from './Components/pages/WorkPage';

import {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

let odometerHistory = [];

function App() {

  // const [page, setPage] = useState('startPage')

  // function startBtnHandleClick() {
  //   // setPage('workPage')
  //   document.location.pathname = '/work';
  // }

  // function backBtnHandleClick() {
  //   // setPage('startPage')
  //   document.location.pathname = '/home';
  // }

  const [odometer, setOdometer] = useState(0);
  
  function saveOdometer(event) {
    // event.preventDefault();
    // odometerHistory.push();
    odometerHistory.push(event.target.value);
    // setOdometer(event.target.value);
    setOdometer(odometerHistory[odometerHistory.length - 1])
    console.log(odometerHistory)
    getNowDate()
  }

  const [date, setDate] = useState(new Date().toLocaleDateString());

  function getNowDate() {
    setDate(new Date().toLocaleDateString())
  }

  return (
    <BrowserRouter >
      <div className='App'>
        <Header />
        <main className='main'>
          <Routes>
            <Route path='' element={<StartPage odometer={odometer} date={date} />} />
            <Route path='/work' element={<WorkPage odometer={odometer} onChange={saveOdometer}/>} />
            <Route path='/info' element={<Info />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
  
  // if (page === 'startPage') {
  //   return (
  //     <div className='App'>
  //       <Header />
  //       <main className='main'>
  //         <StartPage odometer={odometer} date={date} onClick={startBtnHandleClick}></StartPage>
  //       </main>
  //     </div>
  //   )
  // } 
  // if (page === 'workPage') {
  //   return (
  //     <div className='App'> 
  //       <Header />
  //       <main className='main'>
  //         <WorkPage odometer={odometer} onClick={backBtnHandleClick} onChange={saveOdometer}></WorkPage>
  //       </main>
  //     </div>
  //   )
  // }
}


export default App;