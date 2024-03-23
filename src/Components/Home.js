import React from 'react'

export default function Home() {
  return (
    <div>
      <div className='add-to-cart'>
        <img src="https://thumbs.dreamstime.com/b/shopping-cart-icon-symbol-flat-shape-trolley-web-store-button-online-shop-logo-sign-vector-illustration-image-black-silhouette-196187637.jpg"/>

      </div>
      <h1>Home Component</h1>
      <div  className='cart-wrapper'>
        <div className='img-wrapper item '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfPbw93S8JzsF1pM7kplpa5NriUaBvOgmMUoZIyGcfGA&s"/>
        </div>
        <div className='text-wrapper item'>
          <span>
            I-Phone
          </span>
          <span>
            Price:$1000.00
          </span>
        </div>
        <div className=' btn-wraper item'>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}
