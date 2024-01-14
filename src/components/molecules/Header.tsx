import Link from 'next/link';

export const Header = () => {
  return (
    <div className="responsive flex bg-slate-100 w-full h-40 md:h-56 align-center justify-center items-center">
      <Link href="/">
        <h1 className="text-3xl font-bold">Rick and Morty</h1>
      </Link>
    </div>
  );
};
