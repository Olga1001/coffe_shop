import ProductOffer from "../components/product-offer/product-offer"
import ProductInfo from "../components/product-info/product-info"

const Product = ({data}) => {

    const item = data.filter((item) => window.location.pathname === item.link);

    return (
        <>
            <ProductOffer/>
            <ProductInfo item={item[0]}/>
        </>
    )
}

export default Product;