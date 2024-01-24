import Accommodation from "../Svgs/Accommodation";
import Flights from "../Svgs/Flights";
import Transfers from "../Svgs/Transfers";
import Meals from "../Svgs/Meals";
import Activities from "../Svgs/Activities";

interface Props {
  includes: string[];
}

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

const Includes = ({ includes }: Props) => {
  return (
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
  );
};

export default Includes;
