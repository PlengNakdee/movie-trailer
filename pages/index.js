import Head from "next/head";
import Carousal from "../components/Carousal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageBanner from "../components/ImageBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white 2xl:max-w-7xl 2xl:mx-auto">
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
        <div className="pl-6">
          <div id="1">
            <p>Recent</p>
            <Carousal />
          </div>
          <div id="2">
            <p>Top Rated</p>
            <Carousal />
          </div>
          <div id="3">
            <p>Trending Now</p>
            <Carousal />
          </div>
        </div>
        <div className="pt-4 border-b-2 border-white">
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
