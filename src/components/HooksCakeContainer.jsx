import React from 'react'
import { useSelector } from 'react-redux'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes)
  return (
    <div>
        <h2>Num of cakes - {numOfCakes}</h2>
        <button>By cake</button>
    </div>
  )
}

export default HooksCakeContainer