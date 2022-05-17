import type { NextPage } from 'next'
import Head from 'next/head'
import BookingContainer from './../components/BookingContainer';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>MeetoSPace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BookingContainer />
    </div>
  )
}

export default Home
