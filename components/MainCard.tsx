import Link from "next/link";

type Props = {
  title: string;
  link: string;
};

const MainCard = ({ title, link }: Props) => {
  return (
    <div className="md:w-1/2 p-4 mx-auto w-full">
      <Link href={link}>
        <div className="border border-gray-200 p-6 rounded-lg hover:bg-[#8A1538] hover:text-white">
          <h2 className="text-xl font-medium title-font mb-2 text-center">
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default MainCard;
