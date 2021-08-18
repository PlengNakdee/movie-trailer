import Head from "next/head";
import Carousal from "../components/Carousal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageBanner from "../components/ImageBanner";
import { getData } from "../sanity_api/api";

const Home = ({dataset}) => {
  const nums = random();
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
            <ImageBanner poster={"img/Intersteller.jpeg"}/>
          </div>       
        </div>
        <div className="pl-6 z-10">
          <div id="1" className="bg-black">
            <p>Recent</p>
            <Carousal poster1={dataset[nums[1]].poster} poster2={dataset[nums[2]].poster} poster3={dataset[nums[3]].poster} poster4={dataset[nums[4]].poster} poster5={dataset[nums[5]].poster} poster6={dataset[nums[6]].poster}/>
          </div>
          <div id="2">
            <p>Top Rated</p>
            <Carousal poster1={dataset[nums[7]].poster} poster2={dataset[nums[8]].poster} poster3={dataset[nums[9]].poster} poster4={dataset[nums[10]].poster} poster5={dataset[nums[11]].poster} poster6={dataset[nums[12]].poster}/>
          </div>
          <div id="3">
            <p>Trending Now</p>
            <Carousal poster1={dataset[nums[2]].poster} poster2={dataset[nums[4]].poster} poster3={dataset[nums[6]].poster} poster4={dataset[nums[9]].poster} poster5={dataset[nums[10]].poster} poster6={dataset[nums[0]].poster}/>
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
};

export async function getStaticProps() {
  const dataset = await getData();
  return {
    props: {
      dataset
    }
  }
};

export function random() {
  const nums = new Set();
while(nums.size !== 13) {
  nums.add(Math.floor(Math.random() * 13) + 1);
}
return [...nums];
}

export default Home;

