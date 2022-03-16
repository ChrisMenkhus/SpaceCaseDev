import searchInputReducer from '@features/search/searchInputSlice'
import searchTagsReducer from '@features/search/searchTagsSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    searchInput: searchInputReducer,
    searchTags: searchTagsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
