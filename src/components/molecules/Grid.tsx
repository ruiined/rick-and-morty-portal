export const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
      {children}
    </div>
  );
};
