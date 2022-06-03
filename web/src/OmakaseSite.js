import React from "react";
import OmakaseMint from './OmakaseMint.js';
import { useEffect, useState } from "react";
import { Navigation } from "./components/navigation.js";
import { Header } from "./components/header.js";
import { About } from "./components/about.js";
import { Faq } from "./components/faq.js";
import { Team } from "./components/team.js";
import { Footer } from "./components/footer.js";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const OmakaseSite = () => {
    //called only once
    useEffect(async () => {

    }, []);

    return (
        <div>
            <Navigation />
            <Header />
            <OmakaseMint />
            <About />
            <Faq />
            <Team />
            <Footer />
        </div>
    );
};

export default OmakaseSite;