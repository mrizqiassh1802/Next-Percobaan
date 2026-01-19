import { getInfluencer } from '../services';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import Image from 'next/image';

export default async function HomeContent() {
  const influencers = await getInfluencer();

  return (
    <div className="m-5 grid grid-cols-1 items-center gap-8 sm:grid-cols-3 lg:grid-cols-4">
      {influencers.map((influencer) => (
        <Card key={influencer._id}>
          <CardHeader>
            <div>
              <CardTitle className="lg:text-md sm:text-xs md:text-sm">{influencer.name}</CardTitle>
              <CardDescription className="text-xs md:text-sm">
                {influencer.category} | {influencer.phone}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            {/* <img
              className="aspect-3/2 rounded-md object-cover"
              src={influencer.profile_photo}
              alt={influencer.name}
            /> */}

            <Image
              src={influencer.profile_photo}
              alt={influencer.name}
              width={640}
              height={480}
              className="aspect-3/2 rounded-md object-cover"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
