export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="md:w-48 rounded-lg shadow-lg flex flex-col justify-between"
      data-testid="card"
    >
      {children}
    </div>
  );
};
