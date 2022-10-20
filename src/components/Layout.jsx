//creamos el componente LAYOUT

const Layout = ( props ) => {

    return (
        <div style={{
            backgroundColor: 'lightcoral',
            padding: '10px'}}>
                
            <article>{props.children}</article>
        </div>
    );
};

export default Layout;