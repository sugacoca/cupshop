import React from "react";
import {Link} from 'react-router-dom';
import '../Item/Item.css';

const Item = (props) => {
    return(
        <div className="item">
            <Link to={`/product/${props.id}`}>
                      <img src={props.image} alt="" />
            </Link>
            <p>{props.name}</p>
        </div>
    )
}
export default Item;