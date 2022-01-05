import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
//   removeSelectedProduct,
} from "../redux/actions/productActions";
import { Link } from 'react-router-dom';
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { url, title} = product;
  const dispatch = useDispatch();
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);


  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    // return () => {
    //   dispatch(removeSelectedProduct());
    // };
  }, [productId]);
  return (
    <div className="ui container">
      {Object.keys(product).length === 0 ? (
       <div class="ui segment">
       <div class="ui active dimmer">
         <div class="ui massive text loader">Loading</div>
       </div></div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column grid">
            <div className="ui vertical divider"></div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={url} alt="jabba"/>
              </div>
              <div className="column rp fluid">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">$99</a>
                </h2>
                <div className="ui bottom attached">
                    <Link to="/cart">
                    <div className="ui vertical animated button" tabIndex="0">
                      <div className="hidden content">
                        <i className="shop icon"></i>
                      </div>
                      <div className="visible content">Add to Cart</div>
                    </div>
                    </Link>
                    <button class="ui labeled button" tabindex="0" onClick={() => setLike(like + 1)}>
                        <div class="ui red button">
                            <i class="heart icon"></i> Like
                        </div>
                        <a class="ui basic red label">
                            {like}
                        </a>
                        </button>
                        <button class="ui labeled button" tabindex="0" onClick={() => setDislike(dislike + 1)}>
                        <div class="ui blue button">
                            <i class="thumbs down outline icon"></i> Dislike
                        </div>
                        <a class="ui basic blue label">
                            {dislike}
                        </a>
                        </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
