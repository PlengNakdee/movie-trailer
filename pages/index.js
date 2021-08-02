import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Movie App</title>
        <meta name="description" content="" />
        <link rel="icon" href="clone.png" />
      </Head>
      <div>
        <Header />
        <p className='font-extrabold'>Image Banner</p>
        <p>Images card row</p>
        <p>Images card row</p>
        <p>Images card row</p>
        <p>footer</p>
      </div>
    </div>
  )
}
