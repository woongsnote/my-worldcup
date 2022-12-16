import { GameResult } from "../../interfaces/gameResult";

type Props = {
  time?: string;
  result: GameResult[];
};

const TournamentCard = ({ time, result }: Props) => {
  return (
    <div className="border border-gray-200 p-6 rounded-lg">
      {result.map((data) => {
        return (
          <div key={data.country} className="flex-col gap-10 py-2 w-full">
            <div className="flex w-full ">
              <div className="text-center w-1/2 ">
                <a href={`https://www.google.com/search?q=${data.country}`}>
                  {data.country}
                </a>
              </div>
              <div className="px-4 w-1/4"> {data.score}</div>
              {data.penalty && (
                <div className="text-red-400">({data.penalty})</div>
              )}
            </div>
          </div>
        );
      })}
      <div className="w-full pt-2 text-center">( {time} )</div>
    </div>
  );
};

export default TournamentCard;
