import "./app-offer.scss"

const AppOffer = () => {   
    const beansLogo = `${process.env.PUBLIC_URL}/assets/images/beans-logo.svg`;

    const myStyle = {
        backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/images/main-bg.jpg"
        })`
    };

    return (
        <section className="section_offer text-center" style={myStyle}>
            <div className="container justify-center">
                <h1>Everything You Love About Coffee</h1>
                <img src={beansLogo} alt="beans logo" className="beans-logo" />
                <p>We makes every day full of energy and taste</p>
                <p>Want to try our beans?</p>
                <a href="#" className="btn-more">More</a>
            </div>
        </section>
    )
}

export default AppOffer;