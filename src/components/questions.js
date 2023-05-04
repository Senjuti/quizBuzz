import React from 'react';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import _ from 'lodash';


import QuestionOptions from './question_options';

function renderQuestions() {

  const questions = useSelector((state) => state.questionsSlice.questions)
  const { t, i18n } = useTranslation();

  // const questions = useSelector(getQuestions).payload.questionsSlice.questions

  // console.log("var: ",asd)

  // console.log("questions: ",questions)

  return questions.map((question) => {

    // Removing this if condition causes i18next to crash the website (DO NOT REMOVE)
    if (typeof Node === 'function' && Node.prototype) {
      const originalRemoveChild = Node.prototype.removeChild;
      Node.prototype.removeChild = function (child) {
        if (child.parentNode !== this) {
          if (console) {
            console.warn('Cannot remove a child from a different parent', child, this);
          }
          return child;
        }
        return originalRemoveChild.apply(this, arguments);
      };
    
      const originalInsertBefore = Node.prototype.insertBefore;
      Node.prototype.insertBefore = function (newNode, referenceNode) {
        if (referenceNode && referenceNode.parentNode !== this) {
          if (console) {
            console.warn(
              'Cannot insert before a reference node from a different parent',
              referenceNode,
              this
            );
          }
          return newNode;
        }
        return originalInsertBefore.apply(this, arguments);
      };
    }

    // console.log('here is the question: \n question id: ', question.id, ' question: ', question.question, ' options: ', question.options)
    return (
      <div key={question.id} className="question-card">
        {/* <h3 className="question-title">{question.question} Question id: {question.id}</h3> */}
        <h3 className="question-title">{t('questions.' + question.id)} Question id: {question.id}</h3>
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