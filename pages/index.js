import Head from 'next/head'

import Navbar from '../components/Navbar'
import Map from '../components/Map'
import LocationSelector from '../components/LocationSelector'

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  rideRequestContainer: `h-full w-[400px] ml-[1rem] py-[3rem] absolute top-0 left-0 flex flex-col justify-end`,
  rideRequest:`h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll`
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Head>
        <title>Uber Blockchain</title>
        <meta name="description" content="Uber App with Blockchain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className={style.main}>
        <Map />
        <div className={style.rideRequestContainer}>
          <div className={style.rideRequest}>
            <LocationSelector/>
            {/* confirm ride */}
          </div>
        </div>
      </div>
    </div>
  )
}
