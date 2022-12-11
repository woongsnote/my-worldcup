import Link from "next/link";
import { NavData } from "../data/NavData";

const NavBar = () => {
  return (
    <div className="flex w-full items-center justify-center fixed top-0 z-50 bg-white">
      <Link
        href="/"
        className="mx-2 mb-4 text-md hover:font-bold hover:text-[#8A1538]"
      >
        홈
      </Link>
      {NavData.map((data) => {
        return (
          <Link
            key={data.title}
            href={data.link}
            className="mx-2 mb-4 text-md hover:font-bold hover:text-[#8A1538]"
          >
            {data.title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavBar;
