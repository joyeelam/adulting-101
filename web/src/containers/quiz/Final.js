import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {Player} from '@lottiefiles/react-lottie-player'

const FinalScreen = ({category}) => {

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
      url: 'http://localhost:5000/trivias/',
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
    <Player autoplay loop src='https://assets1.lottiefiles.com/packages/lf20_6LimOm.json' style ={{height:'150px'}}></Player>
  } else {
    animation = <Player autoplay loop src='https://assets5.lottiefiles.com/packages/lf20_Zz37yH.json' style ={{height:'150px'}}></Player>
  }

  return (
    <div className='quiz-final'>
      <div>
        {animation}
      </div>
      <br/>
      <h4 className='final-title'>Final Score: {score}</h4>
      <button onClick={replay}>Try again</button>
      <button onClick={handleSave}>Save score</button>
      <button onClick={settings}>Back to settings</button>
    </div>
  )
}

export default FinalScreen
