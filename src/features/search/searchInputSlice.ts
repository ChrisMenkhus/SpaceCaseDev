import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface SearchInputState {
  value: string
}

const initialState: SearchInputState = {
  value: '',
}

export const searchInputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    clear: (state) => {
      state.value = ''
    },
  },
})

// Action creators are generated for each case reducer function
export const { update, clear } = searchInputSlice.actions

export default searchInputSlice.reducer
