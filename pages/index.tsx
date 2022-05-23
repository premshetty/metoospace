import type { NextPage } from 'next'
import Head from 'next/head'
import HomeContainer from './../components/Home/HomeContainer';

const Home: NextPage = () => {
  return (
    <div className="flex  flex-col   py-2">
      <Head>
        <title>MeetoSPace</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="meeto space booking page" />
      </Head>
      <HomeContainer />
    </div>
  )
}

export default Home
