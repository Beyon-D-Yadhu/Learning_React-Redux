import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch() //returns a reference to dispatch function from redux store
  return (
    <div>
        <h2>Num of cakes - {numOfCakes}</h2>
        <button onClick={()=>dispatch(buyCake())}>By cake</button>
    </div>
  )
}

export default HooksCakeContainer