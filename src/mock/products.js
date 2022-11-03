//Array de objetos
export const products = [

    {id: 1,
    title: 'Nike Revolution 6 ',
    price: 23000,
    descuento: 15,
    stock: 10,
    category: 'Running',
    description: "Suma más y más kilómetros con tus Zapatillas Nike         Revolution 6 Next Nature, que aportan amortiguación y confort a cada paso que des. Su capellada transpirable y suela diseñada por computadora para una mejor tracción son ideales hasta para los corredores más exigentes.",
    img:'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw95fa9197/products/NI_DC3728-401/NI_DC3728-401-1.JPG'    
    },

    {id: 2,
    title: 'Salomon Patrol',
    price: 30000,
    descuento: 10,
    stock: 7,
    category: 'Trail',
    description: "Todo Terreno Contagrip®: Está diseñado para la más amplia variedad de superficies. Brinda durabilidad y confianza en superficies húmedas, secas, duras o sueltas.",
    img:'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw8ab717d1/products/SL_415832/SL_415832-1.JPG'    
    },

    {id: 3,
    title: 'Adidas Terrex',
    price: 20000,
    descuento: 10,
    stock: 5,
    category: 'Trekking',
    description: "Acumulá kilómetros en la montaña gracias a la ligereza de estas zapatillas de senderismo. El diseño te proporciona mayor estabilidad y tracción en terrenos irregulares y mojados, mientras que la mediasuela con amortiguación aporta comodidad todo el día",
    img:'https://www.tradeinn.com/f/13842/138429272/adidas-zapatillas-senderismo-terrex-ax4.jpg'    
    },

    {id: 4,
    title: 'Montagne Impermeable Trail Running Ultra 3.0',
    price: 32000,
    descuento: 15,
    stock: 4,
    category: 'Trail',
    description: "Este nuevo desarrollo de la colección invierno trae la combinación de su capellada con tecnología AMORED RUB y tecnología AQUACLEVER, transformándola en la mejor opción para el corredor de senderismo.",
    img:'https://http2.mlstatic.com/D_NQ_NP_769464-MLA49935386356_052022-O.webp',
    },

    {id: 5,
    title: 'Nike Zoom Winflo 8',
    price: 39000,
    descuento: 20,
    stock: 0,
    category: 'Running',
    description: "Su diseño de confección es alucinante: se combina con una parte superior traslúcida y la tecnología Flywire que brinda un ajuste estable y cómodo para las carreras largas. Además, su tela de malla asegura ventilación constante, manteniendo tus pies frescos en todo momento. La unidad Zoom Air en el antepié proporciona amortiguación adicional y junto a la espuma Cushlon Foam hacen que cada paso sea suave y brinde respuesta inmediata entregando a la vez, suma elasticidad. Elegí la cantidad de kilómetros que quieras, ellas están preparadas.",
    img:'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw343c2c59/products/NI_CW3419-010/NI_CW3419-010-1.JPG',
    },

    {id: 6,
    title: 'Salomon Hypulse Adventure',
    price: 32000,
    descuento: 15,
    stock: 2,
    category: 'Trail',
    description: "La transición a los senderos será suave con este calzado ligero y dinámico. La HYPULSE se cimienta sobre el par dinámico y reactivo de Energy Blade y la espuma Fuze Surge y ofrece una pisada fluida y eficaz. Una cómoda corredora de trail repleta de tecnologías básicas listas para el sendero, para hacer realidad una versión mejor y más rápida de ti.",
    img:'https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/4/1/416849_0.jpg',
    },
    
    {id: 7,
    title: 'Jaguar Trekking 3049',
    price: 32000,
    descuento: 15,
    stock: 6,
    category: 'Trekking',
    description: "Impermeable de mateial de Poliuretano ideal para disfrutar de aventuras. El diseño te proporciona mayor estabilidad y tracción en terrenos irregulares y mojados, mientras que la mediasuela con amortiguación aporta comodidad todo el día",
    img:'https://http2.mlstatic.com/D_NQ_NP_984367-MLA50052337121_052022-O.webp',
    },

];

export const getProducts = (categoryName) => {
                return new Promise((res, rej) => {
                    const productosFiltrados = products.filter(
                        (prod) => prod.category === categoryName);
                    const ref = categoryName ? productosFiltrados : products;
                    setTimeout(() =>{ 
                        res(ref);
                    }, 2000);

                });
            };

export const getProduct = (idProd) => {
                return new Promise((res, rej) => {
                    const product = products.find((prod) => prod.id === +idProd);
                    
                    setTimeout(() =>{ 
                        res(product);
                    }, 2000);

                });
            };