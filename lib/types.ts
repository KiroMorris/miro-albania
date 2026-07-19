export type Tag = "food" | "coffee" | "nature" | "history" | "city" | "beach";

export interface Place {
  id: string;
  name: string;
  region: string;
  lat: number;
  lng: number;
  /** Warm, personal 2-3 sentence pitch — why this place matters */
  why: string;
  /** Practical info: getting there, hours, cost ballpark */
  practical: string;
  timeNeeded: string;
  tags: Tag[];
}

export interface ItineraryStop {
  placeIds: string[];
  title: string;
  narrative: string;
  logistics: string;
}

export interface Itinerary {
  slug: string;
  days: string;
  title: string;
  tagline: string;
  stops: ItineraryStop[]; // one per day
}
