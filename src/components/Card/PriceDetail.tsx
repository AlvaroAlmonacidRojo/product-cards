import { PriceDetail } from "@/types";
import styles from "./card.module.css";

interface Props {
  priceDetail: PriceDetail;
}
const PriceDetail = ({ priceDetail }: Props) => {
  return (
    <div className={styles.cardPrices}>
      <h3>{priceDetail.pricingPercentage}%</h3>
      <p>
        From:{" "}
        <span className={styles.line}>{priceDetail.oldPriceBeautify}</span>
      </p>
      <h2>
        <strong>{priceDetail.fromPriceBeautify}</strong>
      </h2>
      <p>Per night: {priceDetail.pricePerNight}</p>
    </div>
  );
};

export default PriceDetail;
