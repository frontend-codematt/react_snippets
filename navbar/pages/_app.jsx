import '../styles/globals.scss'

import Layout from '../components/Layout'

import React from 'react'

const MyApp = ({ Component, pageProps }) => {
  return (
      <Layout>
      <Component {...pageProps} /> 
      </Layout>
  )
}

export default MyApp



