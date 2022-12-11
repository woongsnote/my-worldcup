import Layout from "../components/Layout";
import MainCard from "../components/MainCard";
import { NavData } from "../data/NavData";

export default function Home() {
  return (
    <Layout>
      <h2 className="text-center text-3xl font-bold py-4">카타르 월드컵</h2>
      {NavData.map((data) => {
        return (
          <MainCard key={data.title} title={data.title} link={data.link} />
        );
      })}
    </Layout>
  );
}
