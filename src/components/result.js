import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { getResult } from '../features/results/resultsSlice';
import { resetQuiz } from '../features/questions/questionsSlice';


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

  

  const { isQuizFinished, pointsTotal } = useSelector(getResult).payload
    
  // if (isQuizFinished && this.props.displayModal) {

  console.log('Is the quiz finished? ', isQuizFinished, 'pointsTotal: ', pointsTotal)

  if (isQuizFinished) {
    const result = useSelector(getResult(pointsTotal)).payload

      return (
        <div className="result-container" ref="results">
          <div className="result-container-item">
            <button
              onClick={useDispatch(resetQuiz)}
              type="button"
              className="close"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="selected-rapper">
              <h1>{`You are ${result.rapper}! Id: ${result.id}`}</h1>
              <p>{result.description}</p>
              <img className="img-rounded" src={`/assets/images/${result.image}`}/>
            </div>
          </div>
        </div>
      );
  }
}

// function mapStateToProps(state) {
//   return {
//     chosenOptions: state.chosenOptions,
//     rappers: state.rappers,
//     displayModal: state.displayModal
//    }
// }

// export default connect(mapStateToProps, actions)(Result);

export default Result