import React from 'react'
import '../styles/HomePage.css'
import v1 from '../images/v1.jpg'
import v2 from '../images/v2.jpg'

function Vegetables() {
    return (
        <div>
            
{/* <!-- vegetable --> */}
<div id="vegetable" class="vegetable">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div  class="titlepage">
          <h2> Fresh <strong class="llow">vegetable</strong> </h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
                            <div class="vegetable_shop">
                                <h3>Best Vegetables Shop</h3>
                                <p>The first step to optimising testosterone
                                    is eating right.
                                    That means cutting out the processed junk
                                    food and focusing on high quality proteins,
                                    carbs, fats, and an abundance of fruits and vegetables.
                                    Don't fall into the 'low fat' eating trap,
                                    as this will seriously inhibit
                                    your testosterone production. </p>
                            </div>
                        </div>
       <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 ">
        <div class="vegetable_img">
         <figure><img src={v1} alt="#"/></figure>
         <span>01</span>
        </div>
      </div>
       <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 ">
        <div class="vegetable_img margin_top">
         <figure><img src={v2} alt="#"/></figure>
         <span>02</span>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- end vegetable --> */}



        </div>
    )
}

export default Vegetables
