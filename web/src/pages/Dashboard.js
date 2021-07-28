import './static/Profile.css'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import BadgeContainer from '../containers/BadgeContainer'

const Dashboard = () => {

  const [user, setUser] = useState({})
  const user_id = localStorage.getItem('id')
  const history = useHistory()

  useEffect(()=>{
    axios.get(`http://localhost:5000/users/get_user/${user_id}`).then(resp => {
      // console.log(resp.data)
      setUser(resp.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [user_id])

  const handleEdit = (e) => {
    history.push('/edit')
  }

  return (
    <div className='dashboard-container'>
      <img className='dashboard-profile' src={user.profile_image} alt='profile'/>
      <br/>
      <h3 className='profile-title'>{user.username}</h3>
      <br/>
      <button className='profile-button' onClick={handleEdit}>Edit Profile</button>
      <hr/>
      <div className='badges-container'>
        <BadgeContainer/>
      </div>
    </div>
  )
}

export default Dashboard
