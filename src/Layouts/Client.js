import React from 'react'
import '../styles/HomePage.css'
import tes from '../images/tes.jpg'
import test from '../images/test_con.png'


function Client() {
    return (
        <div>
            <div id="testimonial" class="clients">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titlepage">
                                <h2>testimonial</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clients_red">
                <div class="container">
                    <div id="testimonial_slider" class="carousel slide" data-ride="carousel">
                      
                      
                        <div class="carousel-inner">


                            <div class="carousel-item active">

                                <div class="testomonial_section">
                                    <div class="full center">
                                    </div>
                                    <div class="full testimonial_cont ">
                                        <div class="row">
                                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 pa_right">
                                                <div class="testomonial_img">
                                                    <figure><img src={tes} alt="#" /></figure>
                                                    <i><img src={test}alt="#" /></i>
                                                </div>
                                            </div>
                                            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 pa_left">
                                                <div class="cross_inner">
                                                    <h3>Jomono<br /><strong class="ornage_color">review</strong></h3>
                                                    <p>I literally never ate fruit or
                                                        vegetables before.
                                                        My diet instead revolved
                                                        around ice cream, chocolate,
                                                        peanut butter and jelly eaten with
                                                        a spoon, pick-n-mix, and lots of
                                                        cereal and pasta -
                                                        I was a sugar monster.

                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>

                    </div>
                </div>
            </div>

            {/*  <!-- end clients --> */}


        </div>
    )
}

export default Client
