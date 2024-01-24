import { Landing } from "@/types";
import axios from "axios";

export const getLadingData = (): Promise<Landing> =>
  axios
    .get("https://api-us.exoticca.com/api/landing/v2/country/botswana")
    .then((response) => response.data);
