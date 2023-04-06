import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
      result: {}
  }
  
  const resultsSlice = createSlice({
    name: 'resultsSlice',
    initialState,
    reducers: {
        getResult: (state, action) => {
        const total = action.payload

        state.result = state.results.find(result => result.lowerRange <= total && result.upperRange >= total)
      }
    }
  })
  
  export const { getResult } = resultsSlice.actions
  
  export default resultsSlice.reducer