// import { UserCircleIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);
  return (
    <div className={`fixed z-20 w-full ${scroll ? "bg-black" : "bg-none"}`}>
      <div className="flex space-x-4 p-4 items-center">
        <Link href="/">
          <a>
            <img src="/img/clone.png" className="h-10 sm:h-14"></img>
          </a>
        </Link>
        {/* <div className="space-x-4">
                <Link to="1">
                    <button>Recent</button>
                </Link>
                <Link to="2">
                    <button>Top Rated</button>
                </Link>
                <Link to="3">
                    <button>Trending Now</button>
                </Link>
                </div> */}
      </div>
      {/* <div className='flex-none w-20'>
                <UserCircleIcon className="h-8 sm:h-20" />
            </div> */}
    </div>
  );
};

export default Header;
