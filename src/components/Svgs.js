import React, { Component } from 'react'
import './../css/Svgs.css'

export default class Svgs extends Component {
    render() {
        return (
            <section className='icon'>
                <svg className='semi-circle' width="110" height="80" viewBox="0 0 445 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M412 200C430.225 200 445.302 185.104 441.985 167.183C434.422 126.31 412.852 88.26 379.831 58.5786C338.104 21.0714 281.511 4.00466e-06 222.5 0C163.489 -4.00466e-06 106.896 21.0714 65.1688 58.5786C32.1482 88.26 10.5783 126.31 3.01477 167.183C-0.301551 185.104 14.7746 200 33 200L222.5 200H412Z" fill="#FACF4C"/>
                </svg>
                <svg className='triangle' width="90" height="90" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M90.4737 16.5C94.7076 9.16666 105.292 9.16667 109.526 16.5L177.076 133.5C181.31 140.833 176.018 150 167.55 150H32.45C23.9822 150 18.6898 140.833 22.9237 133.5L90.4737 16.5Z" fill="#E94235"/>
                </svg>
            </section> 
        )
    }
}



