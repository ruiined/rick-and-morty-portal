import { CharacterProfile } from '@/components/organisms';

export default function Profile({ params }: { params: { id: string } }) {
  return <CharacterProfile id={params.id} />;
}
