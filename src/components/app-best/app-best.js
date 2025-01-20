import "./app-best.scss"
import AppBestItem from "../app-best-item/app-best-item"

const AppBest = ({data}) => {

    const items = data.map(item => {
        const {id, ...itemProps} = item;

        return (
            <AppBestItem 
                key={item.id}
                {...itemProps}
                id={id}
                item={item}
            />
        )
    })
    const myStyle = {
        backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/images/bg.jpg"
        })`
    };

    return (
        <section className="section_best" style={myStyle}>
            <div className="container text-center">
                <h2>Our best</h2>
                <ul className="d-flex">{items}</ul>
            </div>
        </section>
    )
}

export default AppBest;