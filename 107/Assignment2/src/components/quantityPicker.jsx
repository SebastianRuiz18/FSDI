import './quantityPicker.css';
import {useState} from "react";

const QuantityPicker = () => {
    let [quantity, setQuantity] = useState(0);

    const handleDecrease = () => {
        if(quantity >= 1){
            setQuantity(quantity - 1);
        }
        else{
            setQuantity(quantity = 0);
        }
    }
    const handleIncrease = () => {
        console.log("Quantity Increased!");
        setQuantity(quantity + 1);
    }

    return(<div className="quantityPicker">
            <button className='btn btn-info btn-sm' onClick={handleDecrease}>-</button>
            <label> {quantity} </label>
            <button className='btn btn-info btn-sm' onClick={handleIncrease}>+</button>
            </div>);
};

export default QuantityPicker;