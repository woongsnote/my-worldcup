import Layout from "../components/Layout";
import {
  Final,
  Round16,
  Round8,
  Round32,
  SemiFinal,
  TheThird,
} from "../components/Round";

export default function Home() {
  return (
    <Layout>
      <h2 className="text-center text-3xl font-bold py-4">
        2022 카타르 월드컵
      </h2>
      <Round32 />
      <Round16 />
      <Round8 />
      <SemiFinal />
      <TheThird />
      <Final />
    </Layout>
  );
}
