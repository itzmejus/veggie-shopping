import React from 'react'
import '../styles/HomePage.css'
import Homepic from '../images/img2.png'
function HomePage() {
    return (
        <section class="slider_section">

        <div class="carousel-inner">
       


            <div class="carousel-caption">

                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="text-bg">
                            <span>Welcome To Veggie</span>
                            <h1>Vegetables Shop</h1>
                            <p>We don't need a melting pot in this country, folks.
                                 We need a salad bowl. In a salad bowl,
                                  you put in the different things. You want the vegetables -
                                   the lettuce, the cucumbers, the onions,
                                    the green peppers - to maintain their identity.
                                     You appreciate differences. 
                                     "Jane Elliot"</p>
                            <form class="Vegetable">
                                <input class="Vegetable_fom" placeholder="Vegetable" type="text" name=" Vegetable" />
                                <button class="Search_btn">Search</button>
                            </form>
                            <a href="#">Contact Us</a> <a href="#">Vegetable</a>
                        </div>
                    </div>

                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="images_box">
                            <figure><img src={Homepic}/></figure>
                        </div>
                    </div>
                </div>
            </div>

</div>
      



    </section >
        
    )
}

export default HomePage
