import Footer from "../../components/Footer";
import Header from "../../components/Header";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import { getAllSlugs } from "../../sanity_api/api";
import sanity from "../../sanity_api/sanity";
import BlockContent from "@sanity/block-content-to-react";
import { random } from "../../components/RandNum";

const Movie = ({ movies }) => {
  const serializer = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };
  const nums = random(10);
  return (
    <div className="min-h-screen bg-black text-white 2xl:max-w-7xl 2xl:mx-auto">
      <div>
        <Header />
        <div className="p-20">
          <div className="grid justify-items-center space-y-10">
            <div classsName="space-y-4">
              <p>add year</p>
              <p className="text-xl font-bold">{movies.movie.title}</p>
              <div className="relative pt-8 pb-20 sm:pb-96">
                <YoutubeEmbed embedId={movies.movie.youtubeId} />
              </div>
              <div className="pt-28">
                <BlockContent
                  blocks={movies.movie.overview}
                  serializers={serializer}
                />
              </div>
            </div>
            <div className="grid justify-items-center">
              <p className="text-lg font-bold">Recommendations: </p>
              <div className="flex space-x-4 font-semibold text-white">
                <a
                  href={`/movies/${movies.others[nums[0]].slug}`}
                  className="hover:text-red-500"
                >
                  {movies.others[nums[0]].title}
                </a>
                <span>|</span>
                <a
                  href={`/movies/${movies.others[nums[1]].slug}`}
                  className="hover:text-red-500"
                >
                  {movies.others[nums[1]].title}
                </a>
                <span>|</span>
                <a
                  href={`/movies/${movies.others[nums[2]].slug}`}
                  className="hover:text-red-500"
                >
                  {movies.others[nums[2]].title}
                </a>
                <span>|</span>
                <a
                  href={`/movies/${movies.others[nums[3]].slug}`}
                  className="hover:text-red-500"
                >
                  {movies.others[nums[3]].title}
                </a>
              </div>
            </div>
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
    fallback: false,
  };
};

// const singlePageQuery = `*[_type == "movie" && slug == $slug] {
//     "id": _id,
//     title,
//     overview,
//     youtubeId,
//     slug,
// }[0]`;

const titlesQuery = `{'movie': *[_type == 'movie' && slug == $slug]{"id": _id,
title,
overview,
youtubeId,
slug}[0], 'others': *[_type == 'movie' && slug != $slug]{"id": _id,
title,
slug}}`;

export const getStaticProps = async ({ params }) => {
  const movies = await sanity.fetch(titlesQuery, { slug: params.slug });
  return { props: { movies } };
};
