export const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 p-8">
      {children}
    </div>
  );
};
