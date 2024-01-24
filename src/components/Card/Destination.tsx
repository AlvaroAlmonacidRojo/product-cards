import styles from "./card.module.css";

interface Props {
  destination: string;
  days: number;
  title: string;
}

const Destination = ({ destination, days, title }: Props) => {
  return (
    <div className={styles.cardDestination}>
      <h3>
        {destination} in {days} days
      </h3>
      <h4>{title}</h4>
    </div>
  );
};

export default Destination;
