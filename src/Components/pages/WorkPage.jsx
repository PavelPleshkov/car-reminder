import s from './WorkPage.module.scss';
import sBtnSave from './../pageComponents/NavButton.module.scss'

import NavButton from '../pageComponents/NavButton';

// import { NavLink } from 'react-router-dom';


function WorkPage({odometer, odometerHistory, onSubmit}) {

  return (
    <div className={s.workPage}>
      {/* <div>
        Work Page
      </div> */}
      {/* <BackButton onClick={onClick}></BackButton> */}
      {/* <NavLink to='/' className={({isActive})=> isActive ? s.active : undefined}>Home</NavLink> */}
      <NavButton className='backBtn' path='/car-reminder/' text='Back to Start' />
      <div className="workPlace">
        {/* <Odometer onChange={saveOdometer}></Odometer> */}
        <Odometer className={s.odometer} odometer={odometer} onSubmit={onSubmit} />
        {/* <Odometer onChange={saveOdometer} value={odometer}></Odometer> */}
        <p>
          Last odometer value: {odometer}
        </p>
        {/* <p className={s.lastRecord}>
          Last work: {odometerHistory.at(-1) ? odometerHistory.at(-1).work : 'none'}
        </p> */}
        <div className={s.records}>
          {odometerHistory.map(record => <div key={record.key} className={s.record}><p>{record.value}</p><p>{record.date}</p><p>{record.work}</p></div>).reverse()}
        </div>
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
        <input type='submit' className={sBtnSave.button} id='odometerSubmit' value="Save"></input>
      </form>
    // {/* </div> */}
  )
}


export default WorkPage;