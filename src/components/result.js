import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { getResult } from '../features/results/resultsSlice';
import { resetQuiz, isQuizFinished } from '../features/questions/questionsSlice';


import * as actions from '../actions';


function Result (props) {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   email: '',
  //   //   rapper: '',
  //   //   image: '',
  //   //   description: ''
  //   // };
  // }

  // componentWillMount() {
  //   const { rapper, image, description } = _.sample(this.props.rappers);
  //   this.setState({ rapper, image, description });
  // }

  // hideModal() {
  //   this.props.hideModal();
  // }

  // handleInputChange(event) {
  //   this.setState({ email: event.target.value });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const { email, rapper, description } = this.state;
  //   this.props.sendEmail(email, rapper, description);
  // }

  const dispatch = useDispatch()
  // dispatch(questionClicked({questionId: questionId, optionId: optionId}))

  const isQuizFinished = useSelector((state) => state.questionsSlice.isQuizFinished)

  const pointsTotal = useSelector((state) => state.questionsSlice.pointsTotal)

  const result = useSelector((state) => state.questionsSlice.result)

  // const { isQuizFinished, pointsTotal } = dispatch(isQuizFinished)

  // dispatch(isQuizFinished)
    
  // if (isQuizFinished && this.props.displayModal) {

  // console.log('Is the quiz finished? ', isQuizFinished, 'pointsTotal: ', pointsTotal, '\n result: ', result)

  const root = './assets/images/';

  if (isQuizFinished) {
      return (
        <div className="result-container">
          <div className="result-container-item">
            <button
              // onClick={useDispatch(resetQuiz)}
              onClick={() => dispatch(resetQuiz())}
              type="button"
              className="close"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="selected-rapper">
              <h1>{`You are ${result.rapper}! Id: ${result.id}`}</h1>
              <p>{result.description}</p>
              <img className="img-rounded" src={`${root}${result.image}`}/>
            </div>
          </div>
        </div>
      );
  }
}

export default Result