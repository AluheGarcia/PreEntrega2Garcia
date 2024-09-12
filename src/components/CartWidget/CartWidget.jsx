import React from 'react'
import "./CartWidget.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const CartWidget = () => {
  return (
    <div className='Carrito'>
        <ShoppingCartIcon sx={{ fontSize: 50 }} ></ShoppingCartIcon>
        <h3>3</h3>
    </div>
  )
}

export default CartWidget