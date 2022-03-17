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
    clearInput: (state) => {
      state.value = ''
    },
  },
})

// Action creators are generated for each case reducer function
export const { update, clearInput } = searchInputSlice.actions

export default searchInputSlice.reducer
