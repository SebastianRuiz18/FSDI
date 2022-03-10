import './product.css';
import QuantityPicker from './quantityPicker';

const Product = (props) => {
    return(<div className="product">
                <img className='image' src={props.image} alt="product img"/>
                <h2>{props.title}</h2>
                <label className='price'>${props.price}</label>
                <label className='total'>$Total</label>
                <QuantityPicker></QuantityPicker>
                <button>Add</button>
            </div>);
};

export default Product;