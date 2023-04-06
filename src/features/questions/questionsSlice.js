import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questions: [{
    id: 1,
    question: 'Une de tes activités préférées est',
    options: [
      { id: 1, img: '1.1.png', points: 1 },
      { id: 2, img: '1.2.png', points: 2 },
      { id: 3, img: '1.3.png', points: 4 },
      { id: 4, img: '1.4.png', points: 3 }
    ]
  },
  {
    id: 4,
    question: 'Tu as l’énergie d’un?',
    options: [
      { id: 1, img: '2.1.png', points: 2 },
      { id: 2, img: '2.2.png', points: 1 },
      { id: 3, img: '2.3.png', points: 4 },
      { id: 4, img: '2.4.png', points: 3 }
    ]
  },
  {
    id: 7,
    question: 'On te voit souvent en train de',
    options: [
      { id: 1, img: '3.1.gif', points: 4 },
      { id: 2, img: '3.2.gif', points: 2 },
      { id: 3, img: '3.3.gif', points: 1 },
      { id: 4, img: '3.4.gif', points: 3 }
    ]
  },
  {
    id: 10,
    question: 'Ton amie et toi, vous partez à vélo…',
    options: [
      { id: 1, img: '4.1.png', points: 3 },
      { id: 2, img: '4.2.png', points: 4 },
      { id: 3, img: '4.3.png', points: 2 },
      { id: 4, img: '4.4.png', points: 1 },
    ]
  },
  {
    id: 13,
    question: 'C’est quoi ta réaction quand tu gagnes une game?',
    options: [
      { id: 1, img: '15.1.gif', points: 4 },
      { id: 2, img: '15.2.gif', points: 3 },
      { id: 3, img: '15.3.gif', points: 1 },
      { id: 4, img: '15.4.gif', points: 2 }
    ]
  },
  {
    id: 2,
    question: 'Quel mot tes amies utiliseraient-elles pour te décrire',
    options: [
      { id: 1, img: '5.1.png', points: 5 },
      { id: 2, img: '5.2.png', points: 6 },
      { id: 3, img: '5.3.png', points: 7 },
      { id: 4, img: '5.4.png', points: 8 }
    ]
  },
  {
    id: 5,
    question: 'Quel émoji utilises-tu le plus souvent',
    options: [
      { id: 1, img: '6.1.png', points: 8 },
      { id: 2, img: '6.2.png', points: 7 },
      { id: 3, img: '6.3.png', points: 5 },
      { id: 4, img: '6.4.png', points: 6 }
    ]
  },
  {
    id: 8,
    question: 'Dans une équipe sportive…',
    options: [
      { id: 1, img: '7.1.png', points: 5 },
      { id: 2, img: '7.2.png', points: 8 },
      { id: 3, img: '7.3.png', points: 6 },
      { id: 4, img: '7.4.png', points: 7 }
    ]
  },
  {
    id: 11,
    question: 'Dans ton téléphone, on retrouve surtout des photos',
    options: [
      { id: 1, img: '8.1.png', points: 5 },
      { id: 2, img: '8.2.png', points: 8 },
      { id: 3, img: '8.3.png', points: 6 },
      { id: 4, img: '8.4.png', points: 7 }
    ]
  },
  {
    id: 14,
    question: 'Qu’est-ce que ça te prend pour avoir le goût de t’activer',
    options: [
      { id: 1, img: '9.1.png', points: 6 },
      { id: 2, img: '9.2.png', points: 5 },
      { id: 3, img: '9.3.png', points: 8 },
      { id: 4, img: '9.4.png', points: 7 }
    ]
  },
  {
    id: 3,
    question: 'Comment préfères-tu t’habiller pour être active?',
    options: [
      { id: 1, img: '10.1.png', points: 9 },
      { id: 2, img: '10.2.gif', points: 10 },
      { id: 3, img: '10.3.png', points: 11 },
      { id: 4, img: '10.4.png', points: 12 }
    ]
  },
  {
    id: 6,
    question: 'Quand tu fais du sport, tu préfères',
    options: [
      { id: 1, img: '11.1.png', points: 9 },
      { id: 2, img: '11.2.png', points: 12 },
      { id: 3, img: '11.3.png', points: 10 },
      { id: 4, img: '11.4.png', points: 11 }
    ]
  },
  {
    id: 9,
    question: 'Choisis l’image qui te donne le plus envie d’être active aujourd’hui',
    options: [
      { id: 1, img: '12.1.gif', points: 11 },
      { id: 2, img: '12.2.gif', points: 12 },
      { id: 3, img: '12.3.gif', points: 10 },
      { id: 4, img: '12.4.gif', points: 9 }
    ]
  },
  {
    id: 12,
    question: 'Ta soirée d’été idéale c’est',
    options: [
      { id: 1, img: '13.1.gif', points: 12 },
      { id: 2, img: '13.2.png', points: 9 },
      { id: 3, img: '13.3.png', points: 11 },
      { id: 4, img: '13.4.png', points: 10 }
    ]
  },
  {
    id: 15,
    question: 'Si tu pouvais partir en vacances avec tes amies',
    options: [
      { id: 1, img: '14.1.png', points: 12 },
      { id: 2, img: '14.2.png', points: 11 },
      { id: 3, img: '14.3.png', points: 10 },
      { id: 4, img: '14.4.png', points: 9 }
    ]
  }].sort((a,b) => a.id - b.id),
  selectedOptions: new Array(15).fill(-1),
  pointsTotal: 0,
  nbrQuestionsAnswered: 0
}

/*
Give an id to the inner options as well (1, 2, etc)
then in the points array, the index at the array
is the question id-1. Then inside each spot of the
array, the option id field (which
represents the id of the currently selected option, default
is -1). Then when changed, update the total (based on the points
of the selected option) and then change the questions answered
var.

*/

export const questionsSlice = createSlice({
  name: 'questionsSlice',
  initialState,
  reducers: {
    questionClicked: (state, action) => {
        // const questionId = action.payload.questionId
        // const optionId = action.payload.optionId

        const questionId = 1
        const optionId = 1
        const question = state.questions[questionId]
        const option = question.options[optionId]

        console.log('Current state: ', state)

        console.log('\nquestion received in slice:\n', 'questionId: ', questionId, '\n optionId: ', optionId, '\n question: ', question, '\n option: ', option)

        if (questionId == -1 || optionId == -1) {
            console.log('initial call to select, ignoring...')
            return;
        }
        
        if (state.selectedOptions[questionId] == -1) { // No option selected for this question so use the given option
            state.selectedOptions[questionId] = option.id
            state.pointsTotal += option.points
            state.questionsAnswered++
        }
        else if (state.selectedOptions[questionId] == option.id) { // The given option was already selected and we want to deselect it
            state.selectedOptions[questionId] = -1
            state.pointsTotal -= option.points
            state.questionsAnswered--
        }
        else { // We want to select a different option for the question we already answered
            const previousOption = state.selectedOptions[questionId]
            state.pointsTotal -= question.options[previousOption].points
            state.selectedOptions[questionId] = option.id
        }

        console.log('End of questions slice. Here is the info\n', 'pointsTotal: ', state.pointsTotal, '\n nbrQuestionsAnswered:', state.nbrQuestionsAnswered)
    },
    isQuizFinished: (state, action) => {
        if (state.questions.length === state.nbrQuestionsAnswered) {
            return {isQuizFinished: true, pointsTotal: state.pointsTotal}
        }
        else {
            return {isQuizFinished: false, pointsTotal: state.pointsTotal}
        }
    },
    resetQuiz: (state, action) => {
        state.selectedOptions = new Array(questions.length).fill(-1)
        state.pointsTotal = 0
        state.nbrQuestionsAnswered = 0
    }
  }
})

export const { questionClicked, isQuizFinished, resetQuiz } = questionsSlice.actions

export default questionsSlice.reducer