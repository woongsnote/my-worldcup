import { TeamGameResult } from "../../interfaces/gameResult";

type Props = {
  title: string;
  result: TeamGameResult[];
};

const LeageCard = ({ title, result }: Props) => {
  return (
    <div className="w-full">
      <div className="border border-gray-200  p-3 rounded-lg">
        <h2 className="text-lg  title-font mb-2 font-bold text-[#8A1538]">
          {title}
        </h2>

        {result.map((data) => {
          return (
            <div key={data.country} className="flex gap-4 py-2">
              <div className="text-center w-1/2">
                <a href={`https://www.google.com/search?q=${data.country}`}>
                  {data.country}
                </a>
              </div>
              <div className="w-1/3"> {data.games}</div>
              <div className="w-1/8">({data.points})</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeageCard;
