import { CharacterProfile } from '@/components/organisms';

import { useRouter } from 'next/router';

export default function Profile({ params }: { params: { id: string } }) {
  return <CharacterProfile id={params.id} />;
}
