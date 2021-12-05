import React from 'react'
import Hero from "./Hero"
import Form from "./Form"
import Plans from "./Plans"
import Best from "./Best"
import Search from "./Search"
import Map from "./Map"
import Features1 from "./Features1"
import Chat from "../Chat"
import Chart from "./Chart"
import Footer from "./Footer"

const Home = () => {
    return (
        <div className="parent">
            <div className="layout-container">
                <Hero />
                <Form />
                <Plans />
                <Best />
                <Features1 />
                <Chart />
                <Search />
                <Map />
                <Chat />
                <Footer />
            </div>
        </div>
    )
}

export default Home
