import "./product-info.scss"

const ProductInfo = ({item}) => {   
    const { id, imagePDP, name, price, country, description } = item;

    const logo = `${process.env.PUBLIC_URL}/assets/images/beans-logo2.svg`;
    const srcImage = `${process.env.PUBLIC_URL}/assets/images/products/${imagePDP}`;
    /*
    require("../cards/images/" + img)
    */
    console.log(item)
    return (
        <section className="container product justify-center" data-id={id}>
           <img src={srcImage} alt={name} />
           <div>
                <h2 className="text-center">About it</h2>
                <img src={logo} alt="icon" className="mx-auto" />
                <p><b>Country:</b> {country}</p>
                <p><b>Description:</b> {description}</p>
                <p><b>Price:</b> {price}$</p>
           </div>
        </section>
    )
}

export default ProductInfo;