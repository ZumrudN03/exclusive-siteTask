import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./index.scss";
import { BasketContext } from "../../Context/basket";
import { WishlistContext } from "../../Context/wishlist";


function Detail() {
  const [detail, setDetail] = useState(null);
  const {addBasket} = useContext(BasketContext)
  const {addWishlist} = useContext(WishlistContext)


  let { id } = useParams();

  useEffect(() => {
    fetch(
      `https://657ef0619d10ccb465d58d01.mockapi.io/api/products/products/` + id
    )
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);

  return (
    <div className="detail_container">
      {detail && (
        <div className="detail">
          <div className="detail_header">
            <p>
              <Link to={"/"}>
                <span>Home / </span>
              </Link>
              {detail.name}
            </p>
          </div>
          <div className="detail_card">
            <div className="detail_card_slider">
              <img src={detail.image} alt="" />
              <img src={detail.image} alt="" />
              <img src={detail.image} alt="" />
              <img src={detail.image} alt="" />
            </div>
            <div className="detail_card_img">
              <img src={detail.image} alt="" />
            </div>
            <div className="detail_card_desc">
              <h3>{detail.name}</h3>
              <div className="detail_card_desc_comments">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <p className="review">({detail.comments} Reviews)</p>
                <p className="stock">In Stock</p>
              </div>
              <p className="price">${detail.price}</p>
              <p className="text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore, ipsa mollitia ullam deleniti explicabo minima
                consequuntur exercitationem quidem adipisci, accusamus cumque!
                Natus esse quos ad? Voluptatibus repudiandae sequi commodi in?
              </p>
              <div className="detail_card_desc_color">
                <p>Colours:</p>
                <i className="fa-solid fa-circle" style={{ color: "red" }}></i>
                <i className="fa-solid fa-circle" style={{ color: "gray" }}></i>
              </div>
              <div className="detail_card_desc_size">
                <h5>Size: </h5>
                <p>XS</p>
                <p>S</p>
                <p>M</p>
                <p>L</p>
                <p>XL</p>
              </div>
              <div className="detail_card_desc_btns">
                <div className="counter">
                  <button className="decrease">-</button>
                  <p>2</p>
                  <button className="increase">+</button>
                </div>
                <button className="buyNow" onClick={()=>addBasket(detail)}>Buy Now</button>
                <div className="wishlist">
                  <i className="fa-regular fa-heart" onClick={()=>addWishlist(detail)}></i>
                </div>
              </div>
              <div className="detail_card_desc_service">
                <div className="service">
                  <i className="fa-solid fa-truck-fast"></i>
                  <div className="freeDelivery_text">
                    <h6>Free Delivery</h6>
                    <p>Enter your postal code for Delivery Availability</p>
                  </div>
                </div>
                <hr />
                <div className="service">
                  <i className="fa-solid fa-rotate"></i>
                  <div className="returnDelivery_text">
                    <h6>Return Delivery</h6>
                    <p>Free 30 Days Delivery Returns. Details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
