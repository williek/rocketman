import './index.css'
import REST from 'axios'
import { useEffect, useReducer } from 'react'

let rows = [{ mission: 1 }, { mission: 1 }, { mission: 1 }]
export default () => {
  let refresh = useReducer(bool => !bool)[1];

  useEffect(() => {
    REST.get("https://api.spacexdata.com/v4/launches/upcoming")
      .then(v => rows = v.data)
      .then(refresh)
    // Promise.all([
    //   REST.GET(URLs.cars, PageObject.listAll).then(list => (PageObject.listAll = list)),
    //   REST.GET(URLs.carBrands, PageObject.listBrands).then(list => (PageObject.listBrands = list)),
    //   REST.GET(URLs.carCategory, PageObject.listCategories).then(list => (PageObject.listCategories = list))
    // ])
    //   .then(refresh)
    //   .finally(() => {
    //     InsertPermissionsRules(user, 16)
    //       .then(fields => (PageObject.permissions = { ...fields }))
    //       .finally(refresh);
    //     setLoaded(true);
    //   });
  }, []);
  console.log(rows.length, rows[0]);
  return <>
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
            {rows.map((row, i) => <tr key={i}>
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