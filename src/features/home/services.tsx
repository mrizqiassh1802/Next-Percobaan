import { Influencer } from "./types";

export async function getInfluencer(): Promise<Influencer[]> {
  const res = await fetch("https://picko-backend.vercel.app/home");

  if (!res.ok) {
    throw new Error("Failed to fetch influencer");
  }

  const json = await res.json();

  return json.influencers;
}
