import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

import _ from 'lodash';


import QuestionOptions from './question_options';

function renderQuestions() {

  const questions = useSelector((state) => state.questionsSlice.questions)

  // const questions = useSelector(getQuestions).payload.questionsSlice.questions

  // console.log("var: ",asd)

  // console.log("questions: ",questions)

  return questions.map((question) => {
    // console.log('here is the question: \n question id: ', question.id, ' question: ', question.question, ' options: ', question.options)
    return (
      <div key={question.id} className="question-card">
        <h3 className="question-title">{question.question} Question id: {question.id}</h3>
        <QuestionOptions options={question.options} questionId={question.id} />
      </div>
    );
  });

  // return this.state.questions.map(({ id, question, options }) => {
  //   return (
  //     <div key={id} className="question-card">
  //       <h3 className="question-title">{question}</h3>
  //       <QuestionOptions options={options} id={id} />
  //     </div>
  //   );
  // });
}

function renderOptions() {
  
}

function Questions (props) {


  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   questions: []
  //   // };
  // }

  // componentWillMount() {
  //   const questions = _.map(useSelector(this.selectQuestions), (question) => {
  //     question.options = _.shuffle(question.options);
  //     return question;
  //   });
  //   // this.setState({ questions });
  // }
  
    return (
      <div className="question-container">
        {renderQuestions()}
      </div>
    );
  
}

// function mapStateToProps(state) {
//   return { questions: state.questions };
// }

// export default connect(mapStateToProps)(Questions);

export default Questions