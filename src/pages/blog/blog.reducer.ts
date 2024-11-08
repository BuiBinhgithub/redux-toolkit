import { createReducer } from '@reduxjs/toolkit'
import { Post } from 'types/blog.type'

interface BlogState {
  postList: Post[]
}

const initialState: BlogState = {
  postList: []
}

const blogReducer = createReducer(initialState, (builder) => {})

export default blogReducer
