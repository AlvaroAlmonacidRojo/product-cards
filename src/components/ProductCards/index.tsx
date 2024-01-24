import { useQuery } from "@tanstack/react-query";
import Card from "../Card";
import axios from "axios";
import { Landing } from "@/types";

const ProductCards = () => {
  const queryFn = (): Promise<Landing> =>
    axios
      .get("https://api-us.exoticca.com/api/landing/v2/country/botswana")
      .then((response) => response.data);
  const { isLoading, error, data } = useQuery({
    queryKey: ["landing"],
    queryFn,
  });
  console.log("Data", data);
  return (
    <section>
      <h2>Our recommendation to visit Botswana and neighboring countries</h2>
      {data &&
        data.destinations.multiMarket.map((market, index) => {
          return <Card multimarket={market} key={index} />;
        })}
    </section>
  );
};

export default ProductCards;
