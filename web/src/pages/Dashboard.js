import './static/Dashboard.css'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

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

  const [score, setScore] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:5000/trivias/${user_id}`).then(resp => {
      // console.log(resp)
      setScore(resp.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  const handleEdit = (e) => {
    history.push('/edit')
  }

  return (
    <div className='dashboard-container'>
      <h1 className='title'>Dashboard</h1>
      <img className='dashboard-profile' src={user.profile_image} alt='profile'/>
      <h3>{user.username}</h3>
      <button onClick={handleEdit}>Edit Profile</button>
      <hr/>
      <div className='badges-container'>
        Badges will go here (WIP)
      </div>
    </div>
  )
}

export default Dashboard
