import s from './WorkPage.module.scss';

import NavButton from '../pageComponents/Button';

// import { NavLink } from 'react-router-dom';


function WorkPage({odometer, odometerHistory, onSubmit}) {

  return (
    <div className={s.workPage}>
      {/* <div>
        Work Page
      </div> */}
      {/* <BackButton onClick={onClick}></BackButton> */}
      {/* <NavLink to='/' className={({isActive})=> isActive ? s.active : undefined}>Home</NavLink> */}
      <NavButton className='backBtn' path='/' text='Back to Start' />
      <div className="workPlace">
        {/* <Odometer onChange={saveOdometer}></Odometer> */}
        <Odometer className={s.odometer} odometer={odometer} onSubmit={onSubmit}></Odometer>
        {/* <Odometer onChange={saveOdometer} value={odometer}></Odometer> */}
        <p>last odometer value: {odometer}</p>
        <div>{odometerHistory.at(-1).work}</div>
      </div>
    </div>
  )
}

function Odometer({className, odometer, onChange, onSubmit}) {

  return (
    // <div>
      <form id='odometerForm' className={className} onSubmit={onSubmit}>
        <label htmlFor='odometerInput'>Enter new odometer value:</label>
        <input type='number' id='odometerInput' name='odometerInput' placeholder='New value' onChange={onChange} required autoFocus></input>
        <label htmlFor='odometerText'>Enter description:</label>
        <textarea id='odometerText' name='odometerText' placeholder='New description' required></textarea>
        <input type='submit' id='odometerSubmit' value="Save"></input>
      </form>
    // {/* </div> */}
  )
}


export default WorkPage;