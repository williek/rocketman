import '../index.css'
import REST from 'axios'
import { useEffect, useReducer } from 'react'
import Upcoming from '../Upcoming'

let rows = [{ mission: 1 }, { mission: 1 }, { mission: 1 }]
let selected;
export default () => {
  let refresh = useReducer(bool => !bool)[1];

  useEffect(() => {
    REST.get("https://api.spacexdata.com/v4/launches/upcoming")
      .then(v => rows = v.data)
      .then(refresh)
  }, []);
  return selected ? <Upcoming row={selected} clear={() => refresh(selected = undefined)} ></Upcoming> : <>
    <h1>Upcoming - Next Launches</h1>

    <div className='content'>
      <div className='bg'></div>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Date (UCT)</th>
              <th>Launchpad</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => <tr onClick={() => refresh(selected = row)} key={i}>
              <td>{row.name}</td>
              <td>{row.date_utc}</td>
              <td>{row.launchpad}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  </>
}