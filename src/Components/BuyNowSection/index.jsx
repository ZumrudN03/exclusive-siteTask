import React from 'react'
import './index.scss'

function BuyNowSection() {
    return (
        <div className="buyNowSection">
            <div className='buyNow'>
                <div className="buyNow_textBox">
                    <p className='categories'>Categories</p>
                    <h1>Enhance Your Music Experience</h1>
                    <div className="buyNow_timer">
                        <div className="time">
                            <h4>05</h4>
                            <p>Days</p>
                        </div>
                        <div className="time">
                            <h4>23</h4>
                            <p>Hours</p>
                        </div>
                        <div className="time">
                            <h4>59</h4>
                            <p>Minutes</p>
                        </div>
                        <div className="time">
                            <h4>35</h4>
                            <p>Seconds</p>
                        </div>
                    </div>
                    <button>Buy Now!</button>
                </div>
                <div className="buyNow_img">
                    <img src="https://s3-alpha-sig.figma.com/img/3cc9/43ca/7e210f637fc0504b7d93cd207df744c2?Expires=1704067200&Signature=TH37vjPNx17JF~ehOXZ9KYwzlPqtv7HPOhgUr~W3xsOiPZ6dp3GTjw4L2NSimGhY1jZIdNevqu~hnX41QfDsYS99x9zOkS~OmWkmQWY4NhJxiEIwFuLPLP-ZzvkN1P3m-IK7mMTIL2Ou~PfrQuDS664i8rN5rYDuNgQAOH8C0PtHS01K4gbkB7Y9cDt5h9xHTiu8VEoXkEspGZ~ohg65Tf-qQ4VIEc~s3diS2Sts-VE8g2WMDciL80jQNR1JRHoYf6rqbPSVZG7V4~od3TCUG6kQ5tURjmB7tg9IJWxYZ~T3KMStQyV8fKZL0ZGw4pfD9MXBF-6VMJG31ZKNR3GKkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
            </div>
        </div>
    )
}

export default BuyNowSection