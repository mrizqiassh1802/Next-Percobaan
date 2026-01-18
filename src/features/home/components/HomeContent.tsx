import { getInfluencer } from "../services";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function HomeContent() {
  const influencers = await getInfluencer();

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-8 m-5 items-center">
      {influencers.map((influencer) => (
        <Card key={influencer._id}>
          <CardHeader>
            <div>
              <CardTitle className="lg:text-md md:text-sm sm:text-xs">
                {influencer.name}
              </CardTitle>
              <CardDescription className="md:text-sm text-xs">
                {influencer.category} | {influencer.phone}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <img
              className="aspect-3/2 object-cover rounded-md"
              src={influencer.profile_photo}
              alt={influencer.name}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
