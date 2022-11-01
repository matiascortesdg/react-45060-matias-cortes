//Array de objetos
export const products = [

    {id: 1,
    title: 'Nike Revolution 6 ',
    price: 23000,
    descuento: 15,
    stock: 10,
    category: 'Running',
    img:'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw95fa9197/products/NI_DC3728-401/NI_DC3728-401-1.JPG'    
    },

    {id: 2,
    title: 'Salomon Patrol',
    price: 30000,
    descuento: 10,
    stock: 7,
    category: 'Trail',
    img:'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw8ab717d1/products/SL_415832/SL_415832-1.JPG'    
    },

    {id: 3,
    title: 'Adidas Terrex',
    price: 20000,
    descuento: 10,
    stock: 5,
    category: 'Trekking',
    img:'https://www.tradeinn.com/f/13842/138429272/adidas-zapatillas-senderismo-terrex-ax4.jpg'    
    },
];

export const getProducts = () => {
return new Promise((res, rej) => {
setTimeout(() =>{ 
res(products);
}, 2000);

});
};