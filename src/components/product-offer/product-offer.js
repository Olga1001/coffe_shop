import "./product-offer.scss"

const ProductOffer = () => {   
    const myStyle = {
        backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/images/our-coffee.jpg"
        })`
    };

    return (
        <section className="product_offer" style={myStyle}>
            <div className="container justify-center">
                <h1>Our Coffee</h1>
            </div>
        </section>
    )
}

export default ProductOffer;