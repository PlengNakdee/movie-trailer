import Head from 'next/head'
import Header from '../components/Header'
import ImageBanner from '../components/ImageBanner'

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Head>
        <title>Movie App</title>
        <meta name="description" content="" />
        <link rel="icon" href="clone.png" />
      </Head>
      <div>
        <div className="relative">
          <div className="absolute">
            <Header />
          </div>
          <div className="">
            <ImageBanner />
          </div>
        </div>
        <div class="flex flex-nowrap">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <p>Images card row</p>
        <p>Images card row</p>
        <p id="3">Images card row</p>
        <p>footer</p>
      </div>
    </div>
  )
}
