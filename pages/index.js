import Head from "next/head";
import Carousal from "../components/Carousal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageBanner from "../components/ImageBanner";
import { random } from "../components/RandNum";
import { getData } from "../sanity_api/api";

const Home = ({dataset}) => {
  const nums = random();
  return (
    <div className="min-h-screen bg-black text-white w-full mx-auto">
      <Head>
        <title>Movie App</title>
        <meta name="description" content="" />
        <link rel="icon" href="clone.png" />
      </Head>
      <div className="">
        <Header />
        <a href={`/movies/${dataset[nums[0]].slug}`}>
        <ImageBanner poster={dataset[nums[0]].banner}/></a>    
        <div className="pl-6 pt-10 space-y-4">
          <div id="1" className="bg-black">
            <p className="text-2xl">Recent</p>
            <Carousal poster1={dataset[nums[0]].poster} url1={`/movies/${dataset[nums[0]].slug}`} 
            poster2={dataset[nums[2]].poster} url2={`/movies/${dataset[nums[2]].slug}`} 
            poster3={dataset[nums[3]].poster} url3={`/movies/${dataset[nums[3]].slug}`}  
            poster4={dataset[nums[4]].poster} url4={`/movies/${dataset[nums[4]].slug}`}  
            poster5={dataset[nums[5]].poster} url5={`/movies/${dataset[nums[5]].slug}`}  
            poster6={dataset[nums[6]].poster} url6={`/movies/${dataset[nums[6]].slug}`} />
          </div>
          <div id="2">
            <p className="text-2xl">Top Rated</p>
            <Carousal poster1={dataset[nums[7]].poster} url1={`/movies/${dataset[nums[7]].slug}`}  
            poster2={dataset[nums[8]].poster} url2={`/movies/${dataset[nums[8]].slug}`}  
            poster3={dataset[nums[9]].poster} url3={`/movies/${dataset[nums[9]].slug}`}  
            poster4={dataset[nums[10]].poster} url4={`/movies/${dataset[nums[10]].slug}`}  
            poster5={dataset[nums[11]].poster} url5={`/movies/${dataset[nums[11]].slug}`}  
            poster6={dataset[nums[12]].poster} url6={`/movies/${dataset[nums[12]].slug}`} />
          </div>
          <div id="3">
            <p className="text-2xl">Trending Now</p>
            <Carousal poster1={dataset[nums[2]].poster} url1={`/movies/${dataset[nums[2]].slug}`}  
            poster2={dataset[nums[4]].poster} url2={`/movies/${dataset[nums[4]].slug}`}  
            poster3={dataset[nums[6]].poster} url3={`/movies/${dataset[nums[6]].slug}`}  
            poster4={dataset[nums[9]].poster} url4={`/movies/${dataset[nums[9]].slug}`}  
            poster5={dataset[nums[10]].poster} url5={`/movies/${dataset[nums[10]].slug}`}  
            poster6={dataset[nums[1]].poster} url6={`/movies/${dataset[nums[11]].slug}`} />
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

// export function random() {
//   const nums = new Set();
// while(nums.size !== 13) {
//   nums.add(Math.floor(Math.random() * 13) + 1);
// }
// return [...nums];
// }

export default Home;

