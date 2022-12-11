import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import TCard from "../components/TCard";
import Title from "../components/Title";
import { FinalData } from "../data/FinalData";

const Final = () => {
  return (
    <Layout>
      <NavBar />
      <Title title="결승" />
      <div className="pt-4">
        {FinalData.map((data) => {
          return <TCard key={data.id} result={data.result} time={data.time} />;
        })}
      </div>
    </Layout>
  );
};

export default Final;
