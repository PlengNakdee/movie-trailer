// import { UserCircleIcon } from "@heroicons/react/solid";

const Header = () => {
    return (
        <header className="flex p-4 items-center">
            <div className="flex flex-grow space-x-4 w-full">
                <img src="img/clone.png" className="h-10 sm:h-20"></img>
                <select
                    id="browse"
                    name="browse"
                    className="bg-transparent border-transparent"
                    defaultValue="Browse"
                >
                    <option id="1">Recent</option>
                    <option id="2">Top Rated</option>
                    <option id="3">Trending Now</option>
                </select>
            </div>
            {/* <div className='flex-none w-20'>
                <UserCircleIcon className="h-8 sm:h-20" />
            </div> */}
            
        </header>
    )
};

export default Header;