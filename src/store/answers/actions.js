import {
  ANSWERS_LOADING,
  ANSWERS_LOAD,
  ANSWERS_ERROR_DB,
  ANSWERS_UPDATE,
  ANSWERS_PERSIST,
} from './constants'

import { getAnswers } from './reducer'

const URL = process.env.REACT_APP_DB_URL

/* *****************************************************
   updateAnswersAC()

   Update answers for a question in state.
   Will replace any other answers for the question.
   Call persistQuestionAC() if you want to persist to database.

   quesion_code - integer
   answers - array of answer strings
******************************************************** */
export const updateAnswersAC = ( question_code, answers ) => {
  return {
    type: ANSWERS_UPDATE,
    payload: { question_code, answers }
  }
}

/* *****************************************************
   loadAllAnswersAC()

   Load user's persisted answers for all questions
   Called by NavBar::onComponentDidMount()

   userId
******************************************************** */
export const loadAllAnswersAC = ( userId ) => {
  // console.log( "loadAllAnswersAC()" )

  return async dispatch => {
    dispatch( { type: ANSWERS_LOADING } )
    const jwt = JSON.parse( localStorage.getItem( 'jwt' ) )
    return fetch( `${URL}/answers/${userId}`, {
      headers: {Authorization: `Token: ${jwt}`}
    } )
      .then( response => response.json() )
      .then( ( answers ) => {
        // console.log("answers", answers)
        dispatch( { type: ANSWERS_LOAD, payload: answers } )
        return //
      } )
      .catch( ( error ) => {
        console.log( "FETCH ERROR", error )
        dispatch( { type: ANSWERS_ERROR_DB, payload: error } )
        return //
      } )
  }
}

/* *****************************************************
   persistAnswersAC()

   Persists answers for a question.

   Warning: The following example fails b/c store isn't updated before getAnswers() is
            called. You need to pass "answers" directly to persistQuestionAC().

     this.props.dispatch(updateAnswersAC(question_code, answers))
     // BROKEN: this.props.dispatch(persistAnswersAC(question_code, getAnswers(this.props.answersRD, question_code)))

   userId
   quesion_code - integer
   question_type -- integer from ./contants.js
   answers - 2D array of up to four strings each
                [ [ "ans1", "ans2", "ans3, "ans4", "ans5", "ams6"], [...] ]
             Note:  only need to supply as many strings as are used, ex:
                [ [ "narrative" ] ]
******************************************************** */
export const persistAnswersAC = ( userId, question_code, question_type, answers ) => {
  console.log( `persistAnswersAC(${question_code})` )
  console.log( "persisting: ", answers )

  return async dispatch => {
    const jwt = JSON.parse( localStorage.getItem( 'jwt' ) )
    return fetch( `${URL}/answers/${userId}/${question_code}/${question_type}`, {
        method: 'POST',
        body: JSON.stringify( { answers } ),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Token: ${jwt}`
        },
      } )
      .then( response => response.json() )
      .then( ( message ) => {
        console.log( "post response message", message )
        dispatch( { type: ANSWERS_PERSIST } )
        return
      } )
      .catch( ( error ) => {
        console.log( "POST ERROR", error )
        dispatch( { type: ANSWERS_ERROR_DB, payload: error } )
        return
      } )
  }
}
