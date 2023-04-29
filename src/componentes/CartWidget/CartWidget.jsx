import './CartWidget.css'

const  CartWidget  =  ( )  =>  {
  const imgCarrito= "../src/assets/carrito.png"
return (
  <div>
    <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
  </div>
)
}

export default CartWidget
