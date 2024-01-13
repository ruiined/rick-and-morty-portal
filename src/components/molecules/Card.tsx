export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-48 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
      {children}
    </div>
  );
};
