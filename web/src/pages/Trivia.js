import {useSelector} from 'react-redux'

import Settings from '../containers/quiz/Settings'
import Question from '../containers/quiz/Question'

const Trivia = () => {

  const questions = useSelector(state => state.questions)
  const questionIndex = useSelector(state => state.index)

  let component

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question/>
  } else if (!questions.length) {
    component = <Settings/>
  }

  return (
    <div className = 'quiz'>
      <h1>Quiz</h1>
      <div className='quiz-container'>{component}</div>
    </div>
  )
}

export default Trivia
