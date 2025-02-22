import s from './WorkPage.module.scss';

import NavButton from '../pageComponents/Button';

// import { NavLink } from 'react-router-dom';


function WorkPage({odometer, onChange, onSubmit}) {

  return (
    <div className={s.workPage}>
      {/* <div>
        Work Page
      </div> */}
      {/* <BackButton onClick={onClick}></BackButton> */}
      {/* <NavLink to='/' className={({isActive})=> isActive ? s.active : undefined}>Home</NavLink> */}
      <NavButton className='backBtn' path='/' text='Back to Start' />
      <div className="workPlace">
        Enter new odometer value:
        {/* <Odometer onChange={saveOdometer}></Odometer> */}
        <Odometer odometer={odometer} onChange={onChange} onSubmit={onSubmit}></Odometer>
        {/* <Odometer onChange={saveOdometer} value={odometer}></Odometer> */}
        <p>last odometer value: {odometer}</p>
      </div>
    </div>
  )
}

function Odometer({odometer, onChange, onSubmit}) {

  return (
    <div>
      {/* <form onSubmit={onChange}> */}
      <form>
        <label>
          <input type='number' placeholder='new value' onChange={onChange}autoFocus></input>
        </label>
        <input type="submit" value="Save" onSubmit={onSubmit}></input>
      </form>
      <p>odometer {odometer}</p>
    </div>
  )
}


export default WorkPage;