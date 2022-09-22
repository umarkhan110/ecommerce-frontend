import React from 'react'
import {useDispatch } from 'react-redux';
import {bindActionCreator} from  "redux"
import {action} from "../state/index"
const Shop = () => {
  const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=>{dispatch(action.withdrawMoney(100))}}>-</button>
        <p>Add to cart</p>
        <button onClick={()=>{dispatch(action.depositMoney(100))}}>+</button>
    </div>
  )
}

export default Shop