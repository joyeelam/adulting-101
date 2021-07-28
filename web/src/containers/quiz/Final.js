import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Player } from '@lottiefiles/react-lottie-player'

const FinalScreen = ({ category }) => {

  const score = useSelector(state => state.score)
  const dispatch = useDispatch()
  const history = useHistory()

  const replay = () => {
    dispatch({
      type: 'SET_INDEX',
      index: 0
    })
    dispatch({
      type: 'SET_SCORE',
      score: 0
    })
  }

  const settings = () => {
    dispatch({
      type: 'SET_QUESTIONS',
      questions: []
    })
    dispatch({
      type: 'SET_SCORE',
      score: 0
    })
    dispatch({
      type: 'SET_INDEX',
      index: 0
    })
  }

  const handleSave = () => {

    const user_id = localStorage.getItem('id')

    axios({
      method: 'POST',
      url: 'https://adulthood-101.herokuapp.com/trivias/',
      data: {
        category: category,
        score: score,
        user_id: user_id
      }
    })
      .then(resp => {
        console.log(resp)
        window.location.reload()
        history.push('/trivia')
      })
      .catch(error => {
        console.log(error)
      })
  }

  let animation

  if (score === 5) {
    animation =
      <Player autoplay loop src='https://assets3.lottiefiles.com/packages/lf20_udvbqjg3.json' style={{ height: '150px' }}></Player>
  } else {
    animation = <Player autoplay loop src='https://assets3.lottiefiles.com/packages/lf20_sgzw5ogf.json' style={{ height: '150px' }}></Player>
  }

  return (
    <div className='quiz-final'>
      <div>
        {animation}
      </div>
      <br />
      <h4 className='final-title'>Final Score: {score} out of 5</h4>
      <button onClick={replay}>Try again</button>
      <button onClick={handleSave}>Save score</button>
      <button onClick={settings}>Back to settings</button>
    </div>
  )
}

export default FinalScreen
