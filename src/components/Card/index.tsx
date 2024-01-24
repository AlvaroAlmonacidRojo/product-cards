import Image from "next/image";
import styles from "./card.module.css";
import { MultiMarket } from "@/types";
import useDeviceType from "@/hooks/useDeviceType";
import PriceDetail from "./PriceDetail";
import Destination from "./Destination";
import Highlights from "./Highlights";
import Includes from "./Includes";
import Tags from "./Tags";

const dimensions = {
  mobile: { width: 317, height: 150 },
  tablet: { width: 530, height: 150 },
  desktop: { width: 542, height: 266 },
};

const Card = ({ multimarket }: { multimarket: MultiMarket }) => {
  const deviceType = useDeviceType();
  const {
    id,
    destination,
    days,
    tags,
    highlights,
    includes,
    priceDetail,
    title,
    images,
    map,
  } = multimarket;
  return (
    <article className={styles.card}>
      <div className={styles.cardContent}>
        <div>
          <Image
            alt={destination}
            src={images[0][deviceType]}
            priority
            width={dimensions[deviceType].width}
            height={dimensions[deviceType].height}
          />
        </div>
        <div className={styles.cardDetails}>
          <PriceDetail priceDetail={priceDetail}/>
          <Destination destination={destination} days={days} title={title} />
            <Highlights highlights={highlights} />
          {deviceType !== "mobile" && (
              <Includes includes={includes} />
          )}
          <Tags tags={tags}/>
          <div className={styles.seeCard}>
            <button>See trip</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
