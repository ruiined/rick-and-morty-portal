import { CharacterList } from '@/components/organisms';

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const currentPage = Number(searchParams.page ?? 1);

  return <CharacterList page={currentPage} />;
}
