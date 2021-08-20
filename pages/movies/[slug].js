import Footer from "../../components/Footer";
import Header from "../../components/Header";
import YoutubeEmbed from "../../components/YoutubeEmbed";

const Movie = () => {
  return (
    <div className="min-h-screen bg-black text-white 2xl:max-w-7xl 2xl:mx-auto">
      <div>
        <Header />
        <div className="p-20">
          <div className="grid justify-items-center space-y-10">
            <div classsName="space-y-4">
              <p className="text-xl font-bold">WALL·E (2008)</p>
              <div className="relative pt-8 pb-20 sm:pb-96">
              <YoutubeEmbed embedId="rokGy0huYEA" />
              </div>
              <p className="pt-24">
                WALL·E is the last robot left on an Earth that has been overrun
                with garbage and all humans have fled to outer space. For 700
                years he has continued to try and clean up the mess, but has
                developed some rather interesting human-like qualities. When a
                ship arrives with a sleek new type of robot, WALL·E thinks he's
                finally found a friend and stows away on the ship when it
                leaves.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="/">WALL·E</a>
              <a href="/">WALL·E</a>
              <a href="/">WALL·E</a>
              <a href="/">WALL·E</a>
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
