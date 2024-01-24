import Image from "next/image";
import styles from "./card.module.css";
import { MultiMarket } from "@/types";
import Accommodation from "../Svgs/Accommodation";
import Flights from "../Svgs/Flights";
import Transfers from "../Svgs/Transfers";
import Meals from "../Svgs/Meals";
import Activities from "../Svgs/Activities";
import Map from "../Svgs/Map";
import useDeviceType from "@/hooks/useDeviceType";

const icons: {
  [key: string]: {
    icon: React.ReactNode;
    label: string;
  };
} = {
  ACCOMMODATION: {
    icon: <Accommodation height="16" width="16" />,
    label: "Accommodations",
  },
  ALL_FLIGHTS: {
    icon: <Flights height="16" width="16" />,
    label: "All flights",
  },
  ALL_TRANSFERS: {
    icon: <Transfers height="16" width="16" />,
    label: "All transfers",
  },
  SOME_MEALS: { icon: <Meals height="16" width="16" />, label: "Some meals" },
  ACTIVITIES: {
    icon: <Activities height="16" width="16" />,
    label: "Activities",
  },
};

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
          <div className={styles.cardPrices} style={{}}>
            <h3>{priceDetail.pricingPercentage}%</h3>
            <p>From: {priceDetail.oldPriceBeautify}</p>
            <h2>
              <strong>{priceDetail.fromPriceBeautify}</strong>
            </h2>
            <p>Per night: {priceDetail.pricePerNight}</p>
          </div>
          <div className={styles.cardDestination}>
            <h3>
              {destination} in {days} days
            </h3>
            <h4>{title}</h4>
          </div>
          <div>
            <ul>
              {highlights.slice(0, 4).map((highligh, index) => {
                return (
                  <li key={highligh.title + index}>
                    <Map />
                    <div>
                      <span>{highligh.title}</span>
                    </div>
                  </li>
                );
              })}
              <span style={{ marginLeft: "20px" }}>+ {highlights.length - 4} more</span>
            </ul>
          </div>
          {deviceType !== "mobile" && (
            <div>
              <ul>
                {includes.map((include, index) => {
                  return (
                    <li key={include + index}>
                      {icons[include]?.icon || ""}
                      <div>{icons[include]?.label}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <div className={styles.cardTags}>
            {tags.map((value, index) => {
              return <button key={index + value.tagId}>{value.name}</button>;
            })}
          </div>
          <div className={styles.seeCard}>
            <button>See trip</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
