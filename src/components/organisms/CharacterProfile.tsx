'use client';

import { useCharacter } from '@/hooks/useCharacters';
import Image from 'next/image';
import Link from 'next/link';
import { List } from '../molecules';

export const CharacterProfile = ({ id }: { id: string }) => {
  const { name, image, description, location, episodes } = useCharacter(
    Number(id),
  );

  if (!name) {
    return <p>Not found</p>;
  }

  return (
    <div>
      <div className="responsive flex flex-col justify-center align-middle items-center">
        <Link
          href="/"
          className="text-slate-600 p-2 hover:text-slate-900 transition duration-300"
        >
          &#8617; Go back
        </Link>
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-center gap-12 justify-center">
            <Image
              className="rounded-full object-cover mt-2 shadow-md"
              src={image}
              alt={name}
              width={200}
              height={200}
            />
            <div>
              <h1 className="text-2xl font-bold mb-2">{name}</h1>
              <List items={description} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-8 md:mt-16 md:ml-8 gap-8">
        <div>
          <h3 className="text-xl font-medium mb-2">Location</h3>
          <List items={location} />
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">Episodes</h3>
          <List items={episodes} />
        </div>
      </div>
    </div>
  );
};
