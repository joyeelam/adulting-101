import './static/Profile.css'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {Button} from 'reactstrap'

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
  }, [user_id])

  const handleEdit = (e) => {
    history.push('/edit')
  }

  return (
    <div className='dashboard-container'>
      <img className='dashboard-profile' src={user.profile_image} alt='profile'/>
      <br/>
      <h3 className='title'>{user.username}</h3>
      <br/>
      <Button onClick={handleEdit}>Edit Profile</Button>
      <hr/>
      <div className='badges-container'></div>
    </div>
  )
}

export default Dashboard
