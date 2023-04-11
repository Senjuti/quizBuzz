import { createSlice, current } from '@reduxjs/toolkit'

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
  results: [
    {
      id: 1,
      rapper: 'The Notorious B.I.G.',
      image: 'rapper1.png',
      description: 'You are a force to be reckoned with, but there is a quiet intellectual buried deep inside. Even though you are on the heavy side, people love you!',
      lowerRange: 0,
      upperRange: 1
    },
    {
      id: 2,
      rapper: '2Pac',
      image: 'rapper2.png',
      description: 'You love to party, and your smile lights up the room. You must be a regular at the gym because your ab muscles are on point!',
      lowerRange: 10,
      upperRange: 20,
    },
    {
      id: 3,
      rapper: 'Jay-Z',
      image: 'rapper3.png',
      description: 'You pull yourself up by the bootstraps and are able to create something big out of nothing. Your everyday hussle is going to pay off soon!',
      lowerRange: 30,
      upperRange: 80,
    },
    {
      id: 4,
      rapper: 'Andre 3000',
      image: 'rapper4.png',
      description: 'You are a weirdo, but totally in a good way! While everyone else is caught up in the rat race of life, you walk to the beat of your own drum.',
      lowerRange: 80,
      upperRange: 100,
    },
    {
      id: 5,
      rapper: 'Snoop Dogg',
      image: 'rapper5.png',
      description: 'You get high on life, amongst other things! Nothing can bring you down because you are the chillest person in the world.',
      lowerRange: 101,
      upperRange: 150
    },
    {
      id: 6,
      rapper: 'Lauryn Hill',
      image: 'rapper6.png',
      description: 'You are a jack of all trades, and a master of all of them! You are a beautiful person both inside and out.',
      lowerRange: 151,
      upperRange: 170
    }
  ].sort((a,b) => a.id - b.id),
  result: {},
  selectedOptions: new Array(15).fill(-1),
  nbrQuestionsAnswered: 0,
  pointsTotal: 0,
  isQuizFinished: false
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
        const questionId = action.payload.questionId
        const optionId = action.payload.optionId
        const question = state.questions[questionId-1]
        const option = question.options[optionId-1]

        // console.log('Current state: ', current(state))

        // console.log('\nquestion received in slice:\n', 'questionId: ', questionId, '\n optionId: ', optionId, '\n question: ', current(question), '\n option: ', current(option))
        
        if (state.selectedOptions[questionId-1] == -1) { // No option selected for this question so use the given option
            state.selectedOptions[questionId-1] = option.id
            state.pointsTotal += option.points
            state.nbrQuestionsAnswered++
        }
        else if (state.selectedOptions[questionId-1] == option.id) { // The given option was already selected and we want to deselect it
            state.selectedOptions[questionId-1] = -1
            state.pointsTotal -= option.points
            state.nbrQuestionsAnswered--
        }
        else { // We want to select a different option for the question we already answered
            const previousOption = state.selectedOptions[questionId-1]
            state.pointsTotal -= question.options[previousOption-1].points
            state.selectedOptions[questionId-1] = option.id
            state.pointsTotal += option.points
        }

        // console.log('questions length: ', state.questions.length, '\n nbrQuestionsAnswered', state.nbrQuestionsAnswered, '\nfinished state.questions.length === state.nbrQuestionsAnswered ? ', state.questions.length === state.nbrQuestionsAnswered)
        if (state.questions.length === state.nbrQuestionsAnswered) {
            state.isQuizFinished = true;
            state.result = state.results.find(res => res.lowerRange <= state.pointsTotal && res.upperRange >= state.pointsTotal)
        }

        // console.log('End of questions slice. Here is the info\n', 'pointsTotal: ', state.pointsTotal, '\n nbrQuestionsAnswered:', state.nbrQuestionsAnswered)
    },
    resetQuiz: (state, action) => {
        state.selectedOptions = new Array(state.questions.length).fill(-1)
        state.nbrQuestionsAnswered = 0
        state.pointsTotal = 0
        state.isQuizFinished = false
    }
  }
})

export const { questionClicked, resetQuiz } = questionsSlice.actions

export default questionsSlice.reducer