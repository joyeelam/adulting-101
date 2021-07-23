import {useSelector, useDispatch} from 'react-redux'
import {Player} from '@lottiefiles/react-lottie-player'

const FinalScreen = () => {

  const score = useSelector(state => state.score)
  const dispatch = useDispatch()

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

  let animation

  if (score === 5) {
    animation =
    <Player autoplay loop src='https://assets1.lottiefiles.com/packages/lf20_6LimOm.json' style ={{height:'200px'}}></Player>
  } else {
    animation = <Player autoplay loop src='https://assets5.lottiefiles.com/packages/lf20_Zz37yH.json' style ={{height:'200px'}}></Player>
  }

  return (
    <div className='quiz-final'>
      <div>
        {animation}
      </div>
      <br/>
      <h3>Final Score: {score}</h3>
      <button onClick={replay}>Try again</button>
      <button onClick={settings}>Back to settings</button>
    </div>
  )
}

export default FinalScreen
