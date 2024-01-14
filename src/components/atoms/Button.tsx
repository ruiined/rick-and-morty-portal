export const Button = ({ label }: { label: string }) => {
  return (
    <button className="bg-slate-100 text-slate-800 p-2 w-full hover:text-slate-900 hover:bg-slate-200 transition duration-300">
      {label}
    </button>
  );
};
