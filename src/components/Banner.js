import React from 'react'
import "./../css/Banner.css"

export default function Banner() {
    return (
            <div className='banner containn'>
                <center>
                    <div class="highlight">
                        A Resume Builder Tool
                    </div>
                </center>

                <h1>
                    Create Your <br /> 
                    Resume
                </h1>

                <p>
                    By employing the best practices and innovative technologies in creating a professional resume, Steph Resume boosts your chances of landing a better job, completely for free
                </p>

                <button className="btn">Get Started</button>
                <a className='link'>Sign Up</a>
            </div> 
	)
}
