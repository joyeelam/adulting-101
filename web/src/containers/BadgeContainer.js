import axios from 'axios'
import {useState, useEffect} from 'react'
import 'simplegoals/dist/simplegoals.min.css'
import SimpleGoals from 'simplegoals'

const BadgeContainer = () => {

  const goals = {
    rookie: {
      name: 'Quiz Rookie',
      description: 'Completed first trivia'
    },
    ninja: {
      name: 'Quiz Ninja',
      description: 'Completed 10 trivias'
    },
    master: {
      name: 'Quiz Master',
      description: 'Completed 50 trivias'
    }
  }

  const handleClick = (e) => {
    SimpleGoals.showOverview()
    SimpleGoals.init({
      goals:goals
    })
  }

  const user_id = localStorage.getItem('id')
  const [score, setScore] = useState([])

  useEffect(()=>{
    axios.get(`https://adulthood-101.herokuapp.com/trivias/${user_id}`)
    .then(resp => {
      // console.log(resp)
      setScore(resp.data.score)
    })
    .catch(error => {
      console.log(error)
    })
  }, [user_id])

  if (score.length === 1) {
    SimpleGoals.unlock('rookie')
  }
  if (score.length >= 10) {
    SimpleGoals.unlock('ninja')
  }
  if (score.length >= 50) {
    SimpleGoals.unlock('master')
  }

  return (
    <button className='profile-button' onClick={handleClick}>View Achievements</button>
  )
}

export default BadgeContainer
