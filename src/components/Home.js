import React, { Component } from 'react'
import Nav from './Nav'
import Banner from './Banner'
import FeaturesCollection from './FeaturesCollection';
import Svgs from './Svgs'
import Steps from './Steps'

export default class Home extends Component {
    render() {
        return (
            <div style={{width:'100vw'}}>
                <Nav />
		<Svgs />
                <Banner />
		<FeaturesCollection/>
		<Steps />
            </div>
        )
    }
}
