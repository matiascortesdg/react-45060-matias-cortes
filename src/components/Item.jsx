const Item = ( { producto } ) => {

    return (
        <div className="item">
            <img className="img-item" src={producto.img} alt={producto.title} />
            <arcticle>
                <h2 className="h2-title">{producto.title}</h2>
                <h4 className="descuento">{producto.descuento}% descuento</h4>
                <h3 className="h3-title">${producto.price}</h3>
                <h3 className="h3-title">${producto.price * producto.descuento/100}</h3>


            </arcticle>
        </div>
    );
};

export default Item;