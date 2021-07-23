import {useSelector, useDispatch} from 'react-redux'

const FetchButton = (props) => {
  const questionCategory = useSelector(state => state.options.question_category)
  const questionDifficulty = useSelector(state => state.options.question_difficulty)

  const dispatch = useDispatch()

  const setLoading = value => {
    dispatch({
      type: 'CHANGE_LOADING',
      loading: value
    })
  }

  const setQuestions = value => {
    dispatch({
      type: 'SET_QUESTIONS',
      questions: value
    })
  }

  const handleQuery = async () => {
    let apiURL = 'https://opentdb.com/api.php?amount=5'
    if (questionCategory.length) {
      apiURL = apiURL.concat(`&category=${questionCategory}`)
    }
    if (questionDifficulty.length) {
      apiURL = apiURL.concat(`&difficulty=${questionDifficulty}`)
    }
    setLoading(true)
    await fetch(apiURL).then(resp => resp.json()).then(data => {
      setQuestions(data.results)
      setLoading(false)
    })
  }

  return <button onClick={handleQuery}>{props.text}</button>

}

export default FetchButton
