import { Highlight } from "@/types";
import Map from "../Svgs/Map";

interface Props {
    highlights: Array<Highlight>
}

const Highlights = ({ highlights }: Props) => {
  return (
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
  );
};

export default Highlights;