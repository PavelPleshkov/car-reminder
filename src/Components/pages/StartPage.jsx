// import startButtonIcon from '../../images/wheel-icon3.png';
import s from './StartPage.module.scss'

import NavButton from '../pageComponents/NavButton';

// import { NavLink } from 'react-router-dom';


function StartPage({odometer, lastDate}) {

  return (
    <div className={s.startPage}>
      {/* <div>
        Start Page
      </div> */}
      {/* <StartButton onClick={onClick}></StartButton> */}
      {/* <NavLink to='/work' className={({isActive})=> isActive ? s.active : undefined}>Work</NavLink> */}
      <NavButton className='startBtn' path='/car-reminder/work' text='Add new record' />
      <p className={s.lastOdometer}>Last record: {odometer} km   {lastDate}</p>
    </div>
  )
}

// function StartButton({onClick}) {

//   return (
//     // <div>
//       <button className='startBtn' onClick={onClick}>
//         {/* <img className='startBtnImg' src={startButtonIcon} alt='wheel'></img> */}
//         Add new record
//       </button>
//     // </div>
//   )
// }

export default StartPage;