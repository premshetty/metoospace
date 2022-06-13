import type { NextPage } from 'next'
import Head from 'next/head'
import NewHome from '../components/homenew/NewHome';

const Home: NextPage = () => {
  return (
    <div className="flex  flex-col">
      <Head>
        <title>MeetoSPace</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="meeto space booking page" />
      </Head>
      <NewHome />
    </div>
  )
}

export default Home
