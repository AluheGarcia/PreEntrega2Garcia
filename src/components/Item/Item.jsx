import { Link } from 'react-router-dom';
import './Item.css';
const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto col-md-2 col-960-3'>
        <img src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p>Precio: {precio} </p>
        <p>ID: {id} </p>
        <Link to={`/item/${id}`}>Ver Detalles</Link>
    </div>
  )
}

export default Item