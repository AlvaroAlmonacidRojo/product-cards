import { useQuery } from "@tanstack/react-query";
import Card from "../Card";
import { getLadingData } from "@/services/api";

const ProductCards = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["landing"],
    queryFn: getLadingData,
  });

  return (
    <section>
      <h2>Our recommendation to visit Botswana and neighboring countries</h2>
      {isLoading ? 'Loading...' : data &&
        data.destinations.multiMarket.map((market, index) => {
          return <Card multimarket={market} key={index} />;
        })}
    </section>
  );
};

export default ProductCards;
