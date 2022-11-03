import { Link } from 'react-router-dom'

const Item = ( { producto } ) => {

    return (
        <div className="item">
            <img className="img-item" src={producto.img} alt={producto.title} />
            <arcticle>
                <h2 className="h2-title">{producto.title}</h2>
                <h4 className="descuento">{producto.descuento}% descuento</h4>
                <h5 className="h5-title"><s>${producto.price}</s></h5>
                <h3 className="h3-title">${producto.price - (producto.price * producto.descuento)/100}</h3>

                <Link className="btn-detail" to={`/detail/${producto.id}`}>
                    Ver detalle
                </Link>
            </arcticle>
        </div>
    );
};

export default Item;