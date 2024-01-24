import { Tag } from "@/types";
import styles from "./card.module.css";

interface Props {
  tags: Tag[];
}
const Tags = ({ tags }: Props) => {
  return (
    <div className={styles.cardTags}>
      {tags.map((value, index) => {
        return <button key={index + value.tagId}>{value.name}</button>;
      })}
    </div>
  );
};

export default Tags;
