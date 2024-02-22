import React from 'react'

const Leaderboard = () => {
  return (
    <div className='center-container'>
        <h1 style={{textAlign:'center',marginTop:'50px'}}>Leaderboard</h1>
      <p style={{textAlign:'center'}}>Discover achievements and rivals on our vibrant leaderboard - your hub for tracking scores and embracing friendly competition!</p>
      <table className="styled-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Department</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nj</td>
            <td>CSE</td>
            <td>93</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Navin</td>
            <td>CSE</td>
            <td>88</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Bob</td>
            <td>IT</td>
            <td>87</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Leaderboard