import React, { useState } from 'react';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux'
import { questionClicked } from '../features/questions/questionsSlice';


import * as actions from '../actions';


function QuestionOptions (props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedOption: {}
  //   };
  // }

  // console.log('\n props received in question options: ', props)


    return (
      <div className="row">
        {renderOptions(props)}
      </div>
    );
  
}

function handleSelect(questionId, optionId, setSelectedOption) {
  setSelectedOption({questionId: questionId, optionId: optionId})
  useDispatch(questionClicked({questionId: questionId, optionId: optionId}))
  // this.props.addOption(questionId);
}

// const useTestClick = () => {
//   const dispatch = useDispatch();
//   let num = Math.random() * 10;
//   return () => dispatch(increment(num));
// };

// function App() {
//   const testClick = useTestClick()

//   /* ... */

//   <button onClick={testClick}>+Random</button>

function renderOptions(props) {
  const root = './assets/images/';
  let { options, questionId } = props;

  const prevSelectedOption = useSelector((state) => state.questionsSlice.selectedOptions)[questionId-1]

  const dispatch = useDispatch()

  // console.log('state in questions_options: ', useSelector((state) => state.questionsSlice))

  // useDispatch(questionClicked(selectedOption))

  // console.log('options: ', options, ' questionId: ', questionId)

  return options.map(({ id: optionId, img, points }) => {
    // console.log('optionId: ', optionId, ' img: ', img, ' points: ', points)

    return (
      <div key={img} className="col-md-5">
        <div onClick={() => {
            dispatch(questionClicked({questionId: questionId, optionId: optionId}))
        } } className={(prevSelectedOption == optionId) ? 'thumbnail chosen' : 'thumbnail'}>
          <img id="option-img" src={`${root}${img}`} />
          <div>Option id: {optionId}, Points value: {points}</div>
          <i className={ prevSelectedOption == optionId ? 'fa fa-check-square-o fa-lg iconbox' : 'fa fa-square-o fa-lg iconbox'}></i>
        </div>
      </div>
    );
  });
}

{/* <div onClick={() => dispatch(questionClicked({questionId: questionId, optionId: optionId}))} className={(selectedOption.questionId == questionId && selectedOption.optionId == optionId) ? 'thumbnail chosen' : 'thumbnail'}> */}

{/* <div onClick={() => handleSelect(questionId, optionId, setSelectedOption)} className={selectedOption === {questionId:questionId, optionId:optionId} ? 'thumbnail chosen' : 'thumbnail'}> */}


// export default connect(null, actions)(QuestionOptions);

export default QuestionOptions
