import React from 'react'
import {useSelector} from 'react-redux'
const Navbar = () => {
  const amount = useSelector(state => state.amount)
  return (
    <div>
        <button>Your Balance: {amount}</button>
    </div>
  )
}

export default Navbar