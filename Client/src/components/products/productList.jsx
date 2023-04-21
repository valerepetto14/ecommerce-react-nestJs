import api from '../../api/config'
import CardProduct from './cardProducts';

const ProductList = ( { data, moreActive } ) => {
    return (
        <div className='w-full mt-10 flex flex-wrap justify-center gap-14 transition-all'>
           {
                data.map((product) => {
                    return (
                        <CardProduct
                            title={product.title}
                            price={product.price}
                            img={product.img}
                            New={product.new}
                            ofert={product.ofert}
                        />
                    )
                })
           }
        </div>
    )
}

export default ProductList;