// import { UserCircleIcon } from "@heroicons/react/solid";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <header className="flex p-4 items-center">
            <div className="flex flex-grow space-x-4 w-full">
                <img src="img/clone.png" className="h-10 sm:h-20"></img>
                <div className="space-x-4">
                <Link to="1">
                    <button>Recent</button>
                </Link>
                <Link to="2">
                    <button>Top Rated</button>
                </Link>
                <Link to="3">
                    <button>Trending Now</button>
                </Link>
                </div>
            </div>
            {/* <div className='flex-none w-20'>
                <UserCircleIcon className="h-8 sm:h-20" />
            </div> */}
            
        </header>
    )
};

export default Header;