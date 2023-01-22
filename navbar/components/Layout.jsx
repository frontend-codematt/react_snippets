import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Navbar></Navbar>
            { children }
            <Footer></Footer>
        </>
    )
}

export default Layout

