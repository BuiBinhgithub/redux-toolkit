import { createReducer } from '@reduxjs/toolkit'
import { initalPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface BlogState {
  postList: Post[]
}

const initialState: BlogState = {
  postList: initalPostList
}

const blogReducer = createReducer(initialState, (builder) => {})

export default blogReducer
