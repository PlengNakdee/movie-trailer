import { PlayIcon } from "@heroicons/react/solid";

const ImageBanner = ({poster}) => {
    return (
        <div>
            <div className="">
                <figure className="">
                    <img className="object-cover" src={poster} />
                    <figcaption className="absolute -mt-24 ml-4 sm:-mt-80 sm:ml-10 space-y-2">
                        <div className="">
                            <p className="text-white text-lg sm:text-5xl">Title</p>
                        </div>
                        <div className="flex items-center bg-white space-x-2 bg-opacity-75 p-2 w-20 rounded sm:w-40 text-gray-500">
                            <PlayIcon className="text-gray-500 w-1/4" />
                            <p>Play</p>
                        </div>
                    </figcaption>
                </figure>
                 
            </div>
        </div>
    )
};

export default ImageBanner