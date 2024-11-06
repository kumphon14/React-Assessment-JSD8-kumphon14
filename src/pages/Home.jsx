import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className='textTitle'> 
            <h1>Generation Thailand</h1>
            <h1>Reac-Assessment</h1>
        </div>

        <div className='button-container'>
                <button onClick={() => navigate('UserTable')}>User Home Sector</button>
                <button onClick={() => navigate('adminHome')}>Admin Home Sector</button>
        </div>
    </div>
  )
}

export default Home;