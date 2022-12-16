import { GameResult } from "../../interfaces/gameResult";

type Props = {
  time?: string;
  result: GameResult[];
};

const FinalCard = ({ time, result }: Props) => {
  return (
    <div className="border border-gray-200 p-6 rounded-lg grid grid-cols-2">
      {result.map((data) => {
        return (
          <div
            key={data.country}
            className="flex items-center justify-center gap-10 py-2 w-full"
          >
            <div className="flex flex-col font-bold">
              <a href={`https://www.google.com/search?q=${data.country}`}>
                <span className="text-center text-2xl">{data.country}</span>
              </a>
              <span className="text-center pt-2"> {data.score} </span>
              {data.penalty && (
                <div className="text-red-400">({data.penalty})</div>
              )}
            </div>
          </div>
        );
      })}
      <div className="col-span-2 text-center">
        <span className=" mt-2  text-xl font-bold">( {time} )</span>
      </div>
    </div>
  );
};

export default FinalCard;
