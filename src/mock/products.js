
export const products = [

    {id: 1,
    title: 'Nike Revolution 6 ',
    price: 23000,
    descuento: 15,
    stock: 10,
    category: 'Running',
    description: "Suma más y más kilómetros con tus Zapatillas Nike Revolution 6 Next Nature, que aportan amortiguación y confort a cada paso que des. Su capellada transpirable y suela diseñada por computadora para una mejor tracción son ideales hasta para los corredores más exigentes.",
    img:'https://res.cloudinary.com/dzxtzb32h/image/upload/v1669458419/1_plaomi.jpg'    
    },

    {id: 2,
    title: 'Salomon Patrol',
    price: 30000,
    descuento: 10,
    stock: 7,
    category: 'Trail',
    description: "Todo Terreno Contagrip®: Está diseñado para la más amplia variedad de superficies. Brinda durabilidad y confianza en superficies húmedas, secas, duras o sueltas.",
    img:'https://res.cloudinary.com/dzxtzb32h/image/upload/v1669458419/2_doee9d.jpg'    
    },

    {id: 3,
    title: 'Adidas Terrex',
    price: 20000,
    descuento: 10,
    stock: 5,
    category: 'Trekking',
    description: "Acumulá kilómetros en la montaña gracias a la ligereza de estas zapatillas de senderismo. El diseño te proporciona mayor estabilidad y tracción en terrenos irregulares y mojados, mientras que la mediasuela con amortiguación aporta comodidad todo el día.",
    img:'https://res.cloudinary.com/dzxtzb32h/image/upload/v1669458419/3_ldk4it.jpg'    
    },

    {id: 4,
    title: 'Montagne Impermeable Trail Running Ultra 3.0',
    price: 32000,
    descuento: 15,
    stock: 4,
    category: 'Trail',
    description: "Este nuevo desarrollo de la colección invierno trae la combinación de su capellada con tecnología AMORED RUB y tecnología AQUACLEVER, transformándola en la mejor opción para el corredor de senderismo.",
    img:'https://res.cloudinary.com/dzxtzb32h/image/upload/v1669458418/4_jky1qu.jpg',
    },

    {id: 5,
    title: 'Nike Zoom Winflo 8',
    price: 39000,
    descuento: 20,
    stock: 1,
    category: 'Running',
    description: "Su diseño de confección es alucinante: se combina con una parte superior traslúcida y la tecnología Flywire que brinda un ajuste estable y cómodo para las carreras largas. Además, su tela de malla asegura ventilación constante, manteniendo tus pies frescos en todo momento. La unidad Zoom Air en el antepié proporciona amortiguación adicional y junto a la espuma Cushlon Foam hacen que cada paso sea suave y brinde respuesta inmediata entregando a la vez, suma elasticidad. Elegí la cantidad de kilómetros que quieras, ellas están preparadas.",
    img:'https://res.cloudinary.com/dzxtzb32h/image/upload/v1669458418/5_xscjuu.jpg',
    },

    {id: 6,
    title: 'Salomon Hypulse Adventure',
    price: 32000,
    descuento: 15,
    stock: 2,
    category: 'Trail',
    description: "La transición a los senderos será suave con este calzado ligero y dinámico. La HYPULSE se cimienta sobre el par dinámico y reactivo de Energy Blade y la espuma Fuze Surge y ofrece una pisada fluida y eficaz. Una cómoda corredora de trail repleta de tecnologías básicas listas para el sendero, para hacer realidad una versión mejor y más rápida de ti.",
    img:'https://res.cloudinary.com/dzxtzb32h/image/upload/v1669458418/6_lggj3n.jpg',
    },
    
    {id: 7,
    title: 'Jaguar Trekking 3049',
    price: 32000,
    descuento: 15,
    stock: 6,
    category: 'Trekking',
    description: "Impermeable de mateial de Poliuretano ideal para disfrutar de aventuras. El diseño te proporciona mayor estabilidad y tracción en terrenos irregulares y mojados, mientras que la mediasuela con amortiguación aporta comodidad todo el día.",
    img:'https://res.cloudinary.com/dzxtzb32h/image/upload/v1669458419/7_c6n9uw.jpg',
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