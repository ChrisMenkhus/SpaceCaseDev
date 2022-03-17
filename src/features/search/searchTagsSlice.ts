import Tag from './types/Tag'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface SearchTagsState {
  value: Tag[]
}

const defaultSearchTags: Tag[] = [
  { label: 'React', checked: false, default: true },
  { label: 'NextJs', checked: false, default: true },
  { label: 'Javascript', checked: false, default: true },
  { label: 'NodeJs', checked: false, default: true },
  { label: 'Styled Components', checked: false, default: true },
  { label: 'Typescript', checked: false, default: true },
]

const initialState: SearchTagsState = {
  value: defaultSearchTags,
}

export const searchTagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Tag>) => {
      state.value = [...state.value, action.payload]
    },
    remove: (state, action: PayloadAction<Tag>) => {
      state.value = state.value.filter(
        ({ label }) => label !== action.payload.label
      )
    },
    toggle: (state, action: PayloadAction<Tag>) => {
      state.value = state.value.map((element) => {
        return element.label === action.payload.label
          ? { ...element, checked: !element.checked }
          : element
      })
    },
    update: (state, action: PayloadAction<Tag>) => {
      state.value = state.value.map((element) => {
        return element.label === action.payload.label
          ? { ...action.payload }
          : element
      })
    },
    clearToggledTags: (state) => {
      state.value = state.value.map((element) => {
        return { ...element, checked: false }
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove, toggle, update, clearToggledTags } =
  searchTagsSlice.actions

export default searchTagsSlice.reducer
