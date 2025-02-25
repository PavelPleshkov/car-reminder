import s from './Info.module.scss';

function Info({odometer, lastWork}) {
  return (
    <div className={s.info}>
      Last work at {odometer} km: 
      <p>
        {lastWork}
      </p>
    </div>
  )
}

export default Info;