import './ProductCard.css';
import handy from '../assets/bag_1.png';
import stylish from '../assets/bag_2.png';
import simple from '../assets/bag_3.png';
import trendy from '../assets/bag_4.png';

function ProductCard({name, tag}) {
    let bag;
    let price;
    switch (name) {
        case "handy":
            bag = handy;
            price = 400;
            break;
        case "stylish":
            bag = stylish;
            price = 250;
            break;
        case "simple":
            bag = simple;
            price = 300;
            break;
        case "trendy":
            bag = trendy;
            price = 150;
            break;
        default:
            console.log("no bag image available");
            break;
    }
    return (
        <article>
            <span>{tag}</span>
            <img src={bag} alt="A bag"/>
            <p>The {name} bag</p>
            <h4>€{price},-</h4>
        </article>
    );
}

export default ProductCard;