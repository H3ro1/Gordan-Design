import * as React from "react"
import { bannerlist } from "../style/banner.module.css"
import Layout from "../components/layout.js"
import Banner from "../components/banner.js"
import Gridbody from "../components/gridbody.js"




import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image6 from '../images/image6.jpg'
import image7 from '../images/image7.jpg'
import image8 from '../images/image8.jpg'
import image9 from '../images/image9.jpg'
import image10 from '../images/image10.jpg'
import image11 from '../images/image11.jpg'
import image12 from '../images/image12.jpg'

const images = [
  { image: image1, name: '.Pepsi Co' },
  { image: image2, name: '.PotsforTots' },
  { image: image3, name: '.Coppertist' },
  { image: image4, name: '.NikeBounce' },
  { image: image5, name: '.Yonex' },
  { image: image6, name: '.SincoSpice' },
  { image: image7, name: '.GetFresh' },
  { image: image8, name: '.UreNext' },
  { image: image9, name: '.Paradise Tattoo' },
  { image: image10, name: '.Temple Bar' },
  { image: image11, name: '.Orn Bracelets' },
  { image: image12, name: '.McDuggies' },
];


const IndexPage = () => {
  return (
   <Layout>
     <Banner Heading= {'Bringing the finest of Web Design to our clientele'} Bannerlist={<div className={bannerlist}>
                <ul>
                    <li>Expertise</li>
                    <li>Design</li>
                    <li>Product</li>
                    <li>Branding</li>
                </ul>
            </div> }/>
     <Gridbody images={images} />
    
   </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
