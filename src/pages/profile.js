import * as React from 'react'

import Layout from '../components/layout'
import Banner from '../components/banner'
import profileimage1 from '../images/profileimage1.webp'
import profileimage2 from '../images/profileimage2.webp'

import Squaregrid from "../components/squaregrid"

import logo1 from "../images/logo1.webp"
import logo2 from "../images/logo2.webp"
import logo3 from "../images/logo3.webp"
import logo4 from "../images/logo4.webp"
import logo5 from "../images/logo5.webp"
import logo6 from "../images/logo6.webp"
import logo7 from "../images/logo7.webp"
import logo8 from "../images/logo8.webp"
import logo9 from "../images/logo9.webp"
import logo10 from "../images/logo10.webp"
import logo11 from "../images/logo11.webp"
import logo12 from "../images/logo12.webp"

import {
    profileimagewrapper,
    profilelayout,
    aboutwrapper,
    aboutheadingwrapper,
    abouttextwrapper,

} from '../style/profile.module.css'
import Squaregridimage from '../components/squaregridimages'

const squares = [
    
    {squaretitle : "2017 — Present", squaresubtitle : "Apple Inc.", squareundertitle : "Lead Product Designer"},
    {squaretitle : "2015 — 2019", squaresubtitle : "Google LLC", squareundertitle : "Senior UX Designer"},
    {squaretitle : "2012 — 2016", squaresubtitle : "Amazon.com", squareundertitle : "Creative Director"},
    {squaretitle : "2010 — 2014", squaresubtitle : "Microsoft Corporation", squareundertitle : "Lead Brand Strategist"},
    {squaretitle : "2008 — 2012", squaresubtitle : "Tesla Motors", squareundertitle : "Chief Innovation Officer"},
    {squaretitle : "2005 — 2009", squaresubtitle : "SpaceX", squareundertitle : "Lead Aerospace Engineer"},
    {squaretitle : "2003 — 2007", squaresubtitle : "Netflix Inc.", squareundertitle : "Head of Content"},
    {squaretitle : "2009-2014", squaresubtitle : "Twitter", squareundertitle : "Senior Social Media Manager"},
    {squaretitle : "2005— 2010", squaresubtitle : "Uber Technologies Inc.", squareundertitle : "Director of Operations"},
    {squaretitle : "2015 — 2017", squaresubtitle : "Airbnb Inc.", squareundertitle : "Lead Experience Designer"},
    
]
    const squares2 = [
        {squareimage: logo1},
        {squareimage: logo3},
        {squareimage: logo4},
        {squareimage: logo5},
        {squareimage: logo6},
        {squareimage: logo7},
        {squareimage: logo8},
        {squareimage: logo9},
        {squareimage: logo10},
        {squareimage: logo11},
    ]



const Profile = () => {
return(
    <Layout>
        <Banner Heading={"Hi I'm Gordan"}/>
        <div className={profilelayout}>
            <div className={profileimagewrapper}> <img src={profileimage1} alt='profileimagegordan'/> <img src={profileimage2} alt='sideimagegordan'/> </div>
            <div className={aboutwrapper}>
                <div className={aboutheadingwrapper}>   
                <div>About</div>
                </div>
                <div className={abouttextwrapper}><p>A freelance designer based in the US. I combine my experience in product and brand to solve problems, tell stories, and create compelling experiences.</p></div>
            </div>
        <Squaregrid squares={squares} title={"Where I've worked"}></Squaregrid>
        <Squaregridimage squares={squares2} title={"Who I've worked with"}/>
        </div>
    </Layout>
    )
}

export default Profile