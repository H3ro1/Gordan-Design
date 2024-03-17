import * as React from 'react'

import Layout from '../components/layout'
import Banner from '../components/banner'
import Gridbody from '../components/gridbody'

const Profile = () => {
return(
    <Layout>
        <Banner Heading={"Hi I'm Gordan"}/>
        <Gridbody></Gridbody>
    </Layout>
    )
}

export default Profile