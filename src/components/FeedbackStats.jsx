import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)

  // calculate rating average
  let avarage =
    feedback.reduce((prev, curr) => {
      return prev + curr.rating
    }, 0) / feedback.length

  avarage = avarage.toFixed(1).replace(/[.,]0$/, '') // regular expression to replace 0 with none

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(avarage) ? 0 : avarage}</h4>
    </div>
  )
}

export default FeedbackStats
