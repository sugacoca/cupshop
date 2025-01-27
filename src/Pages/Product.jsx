import React, { useContext } from "react";
import {ShopContext} from '../Context/ShopContext';
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import Selection from "../Components/Selection/Selection";

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));
    
    return (    
      <div>
        <Breadcrum product={product} />
        <Selection />
        <ProductDisplay product={product} />

      </div>
    );
}
export default Product;