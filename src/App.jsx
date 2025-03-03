// import logo from './logo.svg';
import './App.scss';
import Header from './Components/pageComponents/Header';
import Info from './Components/pages/Info';
import HomePage from './Components/pages/HomePage';
import WorkPage from './Components/pages/WorkPage';

import {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

let odometerHistory = [];
let key = 0


function App() {
  class Record {
    constructor(value, date, work, key) {
      this.value = value;
      this.date = date;
      this.work = work;
      this.key = key
    }
  }

  const [odometer, setOdometer] = useState(0);
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [work, setWork] = useState('none')

  function getNowDate() {
    setDate(new Date().toLocaleDateString())

    return date;
  }

  function handleOdometerSubmit(event) {
    event.preventDefault();
    console.log('submitting');
    let input = Array.from(event.target.elements)[0];
    let textarea = Array.from(event.target.elements)[1];
    key++;
    // console.log(input.value)
    // setOdometer(input.value);
    // setWork(textarea.value);
    // odometerHistory.push(new Record(odometer, getNowDate(), work));
    odometerHistory.push(new Record(input.value, getNowDate(), textarea.value, key));
    // odometerHistory.push({value: input.value, date: getNowDate()})
    // setOdometer(odometerHistory[odometerHistory.length - 1].value)
    setOdometer(input.value);
    setWork(textarea.value);
    console.log(odometerHistory);
  }

  return (
    <BrowserRouter >
      <div className='App'>
        <Header />
        <main className='main'>
          <Routes>
            <Route path='/car-reminder' element={<div>Welcome to the Car Reminder App<p>Use tabs above to get experience</p></div>} />
            <Route path='/car-reminder/home' element={<HomePage odometer={odometer} lastDate={odometer ? odometerHistory[odometerHistory.length - 1].date : ''} />} />
            <Route path='/car-reminder/work' element={<WorkPage odometer={odometer} odometerHistory={odometerHistory} onSubmit={handleOdometerSubmit}/>} />
            <Route path='/car-reminder/info' element={<Info odometer={odometer} lastWork={work}/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}


export default App;