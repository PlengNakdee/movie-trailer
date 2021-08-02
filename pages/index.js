import Head from 'next/head'
import Carousal from '../components/Carousal'
import Header from '../components/Header'
import ImageBanner from '../components/ImageBanner'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Movie App</title>
        <meta name="description" content="" />
        <link rel="icon" href="clone.png" />
      </Head>
      <div>
        <div className="">
          <div className="fixed">
            <Header />
          </div>
          <div className="">
            <ImageBanner />
          </div>
        </div>
        <Carousal />
        <Carousal />
        <Carousal />
        <p>footer</p>
      </div>
    </div>
  )
}
