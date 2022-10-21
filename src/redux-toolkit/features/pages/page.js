import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pageNumber: 1,
    type: [     
      {name: 'TV', id: "tv"},
      {name: 'Movie', id: "movie"},
      {name: 'OVA', id: "ova"},
      {name: 'ONA', id: "ona"},
      {name: 'Special', id: "special"},
      {name: 'Music', id: "music"}
    ],
    selectedType: 'tv',
    searchInput: '',
    selectgenres: [],
}

const page = createSlice({
  name: 'page',
  initialState,
  reducers: {

    changeSelectType: (state, action) => {
      state.selectedType = action.payload
    },

    searchInputValue: (state, action) => {
      state.searchInput = action.payload
    },

    increasePage: (state, action) => {
        state.pageNumber += 1
    },

    decreasePage: (state, action) => {
        state.pageNumber -= 1
    },

    defaultPageNumber: (state, action) => {
      state.pageNumber = 1 
    },

    selectGenres: (state, action) => {
      const check = state.selectgenres.find( i => i === action.payload)
      if(check) {
        console.log("already selected")
      }
      else {
        state.selectgenres.push(action.payload)
      }     
    },

    unselectGenres: (state, action) => {
      
      console.log(action.payload)
      state.selectgenres = state.selectgenres.filter( i => i !== action.payload)
     
    },

    defaultGenres: (state, action) => {
      state.selectgenres = []
    }

  }
});

export const { 
  changeSelectType, searchInputValue,
  increasePage, decreasePage, defaultPageNumber,
  selectGenres, unselectGenres, defaultGenres
} = page.actions

export default page.reducer