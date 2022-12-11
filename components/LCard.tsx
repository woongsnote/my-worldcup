import { TeamGameResult } from "../interfaces/gameResult";

type Props = {
  title: string;
  result: TeamGameResult[];
};

const LCard = ({ title, result }: Props) => {
  return (
    <div className="w-full">
      <div className="border border-gray-200  p-3 rounded-lg">
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
          {title}
        </h2>

        {result.map((data) => {
          return (
            <div key={data.country} className="flex gap-4 py-2">
              <div className="text-center w-1/2">{data.country}</div>
              <div className="w-1/3"> {data.games}</div>
              <div className="w-1/8">({data.points})</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LCard;
