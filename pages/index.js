import Head from 'next/head'

import Navbar from '../components/Navbar'
import Map from '../components/Map'

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Head>
        <title>Uber Blockchain</title>
        <meta name="description" content="Uber App with Blockchain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

{/* navbar */}
<Navbar/>
      <div className={style.main}>
        {/* map */}
        <Map/>
        <div className={style.rideRequestContainer}>
          <div className={style.rideRequest}>
            {/* location selector */}
            {/* confirm ride */}
            </div>
          </div>
      </div>
    </div>
  )
}
