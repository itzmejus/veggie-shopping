import React from 'react'
import '../styles/HomePage.css'
import about from '../images/about.jpg'

function About() {
    return (
        <div>
            {/*  <!-- about  --> */}
            <div id="about" class="about">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div class="about-box">
                                <h2>About us</h2>
                                <p>The sweet quality is set opposite to the bitter,
                                    and is a gracious,
                                    amiable, blessed and pleasant quality,
                                    a refreshing of the life, an allaying of the fierceness
                                    . It maketh all pleasant and friendly in every creature;
                                    it maketh the vegetables of the earth fragrant and of good taste,
                                    affording fair, yellow, white and ruddy colours.
                                </p>

                            </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 padding_rl">
        <div class="about-box_img">
          <figure><img src={about} alt="#" /></figure>
        </div>
      </div>
    </div>

  </div>
</div>
{/* <!-- end abouts --> */}


        </div>
    )
}

export default About
