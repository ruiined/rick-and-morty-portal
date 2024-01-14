type ListItem = {
  label: string;
  value: string;
};

export const ListItem = ({ label, value }: ListItem) => {
  return (
    <p data-testid="list-item">
      <span className="font-light text-slate-700">{label}:</span>
      <span className="tracking-wide truncate">{value}</span>
    </p>
  );
};
