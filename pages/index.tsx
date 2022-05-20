import type { NextPage } from 'next'
import Head from 'next/head'
import BookingContainer from '../components/Booking/BookingContainer';

const Home: NextPage = () => {
  return (
    <div className="flex  flex-col ml-20  py-2">
      <Head>
        <title>MeetoSPace</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="meeto space booking page" />
      </Head>
      <BookingContainer />
    </div>
  )
}

export default Home
