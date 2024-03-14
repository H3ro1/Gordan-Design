import * as React from "react"
import Layout from "../components/layout.js"
import Banner from "../components/banner.js"


const IndexPage = () => {
  return (
   <Layout>
     <Banner/>
   </Layout>
  )
}
export default IndexPage

export const Head = () => <title>Home Page</title>
