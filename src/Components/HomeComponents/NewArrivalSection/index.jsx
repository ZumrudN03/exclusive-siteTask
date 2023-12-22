import React from 'react'
import './index.scss'

function NewArrivalSection() {
    return (
        <div className='newArrivalSection'>
            <div className="newArrivalSection_header">
                <div className="featured">
                    <div className='blok'></div>
                    <p>Featured</p>
                </div>
                <h2>New Arrival</h2>
            </div>
            <div className="newArrivalSection_cards">
                <div className="newArrivalSection_cards_left">
                    <h3>PlayStation 5</h3>
                    <p>Black and White version of the PS5 coming out on sale.</p>
                    <a href="#">Shop Now</a>
                </div>
                <div className="newArrivalSection_cards_right">
                    <div className="newArrivalSection_cards_right_up">
                        <h3>Women's Collections</h3>
                        <p>Featured woman collections that give you another vibe.</p>
                        <a href="#">Shop Now</a>
                    </div>
                    <div className="newArrivalSection_cards_right_down">
                        <div className="speakers">
                            <h3>Speakers</h3>
                            <p>Amazon wireless speakers</p>
                            <a href="#">Shop Now</a>
                        </div>
                        <div className="perfume">
                            <h3>Perfume</h3>
                            <p>GUCCI INTENSE OUD EDP</p>
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewArrivalSection