export interface Card {
  id: string;
  name: string;
  image: string;
  url: string;
}

export interface POIS {
  title: string;
  cards: Array<Card>;
}

export interface MultiMarket {
  id: number;
  title: string;
  destination: string;
  images: ImageElement[];
  productAnimation: null;
  days: number;
  url: string;
  map: Map;
  highlights: Highlight[];
  includes: string[];
  priceDetail: PriceDetail;
  tags: Tag[];
  crafterDetail: CrafterDetail | null;
  hasPrivateTour: boolean;
  hasSoloTraveller: boolean;
  headLine: null | string;
  tagHeadLine: TagHeadLine[];
  isLandOnly: boolean;
  isValid: boolean;
  extraNights: number;
  isNew: boolean;
  isPromoted: boolean;
  isFlashSales: boolean;
  fcpFixedPrice: FcpFixedPrice;
}

export interface CrafterDetail {
  crafterSentence: string;
  crafterName: string;
  crafterAvatar: string;
}

export interface FcpFixedPrice {
  hasFcpFixedPrice: boolean;
  price: number;
}

export interface Highlight {
  title: string;
  url: string;
}

export interface ImageElement {
  desktop: string;
  tablet: string;
  mobile: string;
}

export interface Map {
  showImage: boolean;
  image: MapImage;
}

export interface MapImage {
  desktop: string;
  tablet: string;
  mobile: string;
  horizontal: string;
  horizontalSmall: string;
}

export interface PriceDetail {
  fromPrice: number;
  fromPriceBeautify: string;
  discountSaved: number;
  oldPriceBeautify: string;
  pricingPercentage: number;
  pricePerNight: string;
  oldPrice: number;
}

export interface TagHeadLine {
  alias: string;
  name: string;
  category: string;
  uri: string;
  isWinner: boolean;
  uuid: string;
}

export interface Tag {
  alias: string;
  name: string;
  description: string;
  categoryName: string;
  uri: string;
  tagId: string;
}

export interface Destinations {
  featuredMonoMarket: any[];
  featuredMultiMarket: MultiMarket[];
  monoMarket: any[];
  multiMarket: MultiMarket[];
}

export interface Landing {
  POIS: POIS;
  destinations: Destinations;
}
