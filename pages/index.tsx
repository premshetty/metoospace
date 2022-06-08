import type { NextPage } from 'next'
import Head from 'next/head'
import HomeContainer from './../components/Home/HomeContainer';

import Bcontainer from '../components/Booking/Bcontainer';

const Home: NextPage = () => {
  return (
    <div className="flex  flex-col   py-2">
      <Head>
        <title>MeetoSPace</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="meeto space booking page" />
      </Head>
      <Bcontainer />
    </div>
  )
}

export default Home
