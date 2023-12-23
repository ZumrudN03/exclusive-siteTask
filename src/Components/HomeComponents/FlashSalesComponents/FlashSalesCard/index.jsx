import React, { useContext, useEffect, useState } from 'react';
import './index.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { WishlistContext } from '../../../../Context/wishlist';
import { BasketContext } from '../../../../Context/basket';

function FlashSalesCard() {
    const [flashCard, setFlashCard] = useState([]);
    const { addBasket } = useContext(BasketContext);
    const { addWishlist, wishlist } = useContext(WishlistContext);

    useEffect(() => {
        fetch("https://657ef0619d10ccb465d58d01.mockapi.io/api/products/products")
            .then((res) => res.json())
            .then((data) => setFlashCard(data))
    }, []);

    var settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='flashSalesCard'>
            <Slider {...settings}>
                {flashCard.map((x) => (
                    <div key={x.id} className='flashCard'>
                        <div className="flashCard_img">
                            <div className="flashCard_img_icon">
                                <i
                                    className={`${wishlist.some((item) => item.id === x.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}`}
                                    onClick={() => addWishlist(x)}
                                ></i>
                                <Link to={`/detail/${x.id}`}><i className="fa-regular fa-eye"></i></Link>
                            </div>
                            <img src={x.image} alt="" />
                            <div className="cardHover" onClick={() => addBasket(x)}>
                                <p>Add To Cart</p>
                            </div>
                        </div>
                        <div className="flashCard_text">
                            <p className='name'>{x.name}</p>
                            <div className="flashCard_text_price">
                                <p className='price'>${x.price}</p>
                                <p className='oldPrice'>${x.oldPrice ? x.oldPrice : (x.price * 2)}</p>
                            </div>
                            <div className="flashCard_text_comment">
                                <div className='flashCard_text_comment_star'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p>({x.comments})</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default FlashSalesCard;
