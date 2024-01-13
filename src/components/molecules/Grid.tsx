export const Grid = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid grid-flow-col auto-cols-min">{children}</div>;
};
