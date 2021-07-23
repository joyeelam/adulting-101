import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Player} from '@lottiefiles/react-lottie-player'

import FetchButton from './FetchButton'

const Settings = () => {

  const [options, setOptions] = useState(null)

  const loading = useSelector(state => state.options.loading)
  const questionCategory = useSelector(state => state.options.question_category)
  const questionDifficulty = useSelector(state => state.options.question_difficulty)

  const dispatch = useDispatch()

  useEffect(()=>{

    const handleLoadingChange = value => {
      dispatch({
        type: 'CHANGE_LOADING',
        loading: value
      })
    }

    handleLoadingChange(true)
    fetch('https://opentdb.com/api_category.php')
    .then((resp) => resp.json())
    .then((data) => {
      // console.log(data.trivia_categories)
      handleLoadingChange(false)
      setOptions(data.trivia_categories)
    })
  }, [setOptions, dispatch])

  const handleCategoryChange = event => {
    dispatch({
      type: 'CHANGE_CATEGORY',
      value: event.target.value
    })
  }

  const handleDifficultyChange = event => {
    dispatch({
      type: 'CHANGE_DIFFICULTY',
      value: event.target.value
    })
  }

  if (!loading) {
    return (
      <div className='quiz'>
        <div className='quiz-setting'>
          <h6>Select Category:</h6>
          <select value={questionCategory} onChange={handleCategoryChange}>
            <option>All</option>
            {options &&
              options.map((option) => (
                <option value={option.id} key={option.id}>
                  {option.name}
                </option>
              ))}
          </select>
        </div>
        <div className='quiz-setting'>
          <h6>Select Difficulty:</h6>
          <select value={questionDifficulty} onChange={handleDifficultyChange}>
            <option value="" key="difficulty-0">All</option>
            <option value="easy" key="difficulty-1">Easy</option>
            <option value="medium" key="difficulty-2">Medium</option>
            <option value="hard" key="difficulty-3">Hard</option>
          </select>
        </div>
        <div className='quiz-setting'>
          <FetchButton text='Get Started!'/>
        </div>
      </div>
    )
  } else {
    return (
      <Player autoplay loop src = 'https://assets1.lottiefiles.com/packages/lf20_vgiig7fv.json' style = {{ height: '300px', width: '300px' }}></Player>
    )
  }
}

export default Settings
