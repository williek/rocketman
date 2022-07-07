import '../index.css'
import './index.css'
import React from 'react'

export default ({ row, clear }) => {
  let diff = row.date_unix - Math.floor(new Date().getTime() / 1000)
  const calc = value => {
    let v = diff % value
    diff -= v
    diff /= value
    return v
  }
  let seconds = calc(60)
  let minutes = calc(60)
  let hours = calc(24)
  let days = diff
  let date = { days, hours, minutes, seconds }


  return <>
    <h1>Upcoming: {row.name}</h1>
    <div className='content'>
      <div className='bg'></div>
      <div className='time'>
        {Object.entries(date).map((v, i) => <React.Fragment key={i}>
          <span className='value'>{v[1]}</span>
          <span className='label'>{v[0]}</span>
        </React.Fragment>)}
      </div>
      <div className='date'>
        {/* <span> */}
      </div>
    </div>
    <div className='back' onClick={clear}>⌄</div>
  </>
}