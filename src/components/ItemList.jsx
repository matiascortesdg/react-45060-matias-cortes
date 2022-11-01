import Item from './Item'

const ItemList = ({ items } ) => {

    return (
        <div className="item-list">
            {items.map((producto) => {
                return (
                    <Item key={producto.id} producto={producto}/>
                );
            })}
        </div>    
    );
};

export default ItemList;