//Creamos componente ItemDetail

import ItemCount from "./ItemCount";


const ItemDetail = ( { item } ) => {
    const onAdd = (qty) => {
        console.log(qty)

    };
        
    return ( 
        <div className="item-detail">
            <img className="img-detail" src={item.img} alt={item.title} />
            <div className="detail">

                <h4 className="descuento">{item.descuento}% descuento</h4>
                <h2 className="h2-title">{item.title}</h2>
                <p>{item.description}</p>
                <h5 className="h5-title"><s>${item.price}</s></h5>
                <h3 className="h3-title">${item.price - (item.price * item.descuento)/100}</h3>


                <ItemCount stock={item.stock} onAdd={onAdd}
                />
            </div>
        </div>


    
     );
};

export default ItemDetail;