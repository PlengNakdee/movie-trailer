import Footer from "../../components/Footer";
import Header from "../../components/Header";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import { getAllSlugs } from "../../sanity_api/api";
import sanity from "../../sanity_api/sanity";
import BlockContent from '@sanity/block-content-to-react'
import OtherTitles from "../../components/OtherTitles";
import { random } from "../../components/RandNum";

const Movie = ({movie, others}) => {
    const serializer = {
        types: {
          code: (props) => (
            <pre data-language={props.node.language}>
              <code>{props.node.code}</code>
            </pre>
          ),
        },
      }
      const nums = random();
  return (
    <div className="min-h-screen bg-black text-white 2xl:max-w-7xl 2xl:mx-auto">
      <div>
        <Header />
        <div className="p-20">
          <div className="grid justify-items-center space-y-10">
            <div classsName="space-y-4">
                {/* add year */}
              <p className="text-xl font-bold">{movie.title}</p>
              <div className="relative pt-8 pb-20 sm:pb-96">
                <YoutubeEmbed embedId={movie.youtubeId} />
              </div>
              <div className="pt-28">
              <BlockContent blocks={movie.overview} serializers={serializer} />
              </div>
              
            </div>
            <OtherTitles num1={others[nums[0]].title} url1={`/movies/${others[nums[0]].slug}`}
            num2={others[nums[1]].title} url2={`/movies/${others[nums[1]].slug}`}
            num3={others[nums[2]].title} url3={`/movies/${others[nums[2]].slug}`}
            num4={others[nums[3]].title} url1={`/movies/${others[nums[3]].slug}`}
            />
          </div>
        </div>
      </div>

      <div className="pt-4 border-b-2 border-white"></div>
      <Footer />
    </div>
  );
};

export default Movie;

export const getStaticPaths = async () => {
  const slugData = await getAllSlugs();
  const paths = slugData.map((page) => {
    return { params: { slug: page.slug } };
  });
  return {
      paths,
      fallback: false
  }
};

const singlePageQuery = `*[_type == "movie" && slug == $slug] {
    "id": _id,
    title,
    overview,
    youtubeId,
    slug,
}[0]`;

const otherTitles = `*[_type == "movie" && slug != $slug] {
  "id": _id,
  title,
  slug,
}`;

export const getStaticProps = async ({ params }) => {
  const movie = await sanity.fetch(singlePageQuery, { slug: params.slug });
  const others = await sanity.fetch(otherTitles, { slug: params.slug }); 
  return { props: { movie, others } };
};
