import React from 'react'
import GetRequestCall from './Fetch/GetRequestCall'
import PostRequestCall from './Fetch/PostRequestCall'
import { UsersList } from './UsersList'
import TodoList from './TodoList'

 const MainComp = () => {
  return (
    <div>
        <GetRequestCall/>
        <PostRequestCall/>

        <UsersList/>
        <TodoList/>
    </div>
  )
}

export default MainComp