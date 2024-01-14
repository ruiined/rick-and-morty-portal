type ListItem = {
  label: string;
  value: string;
};

export const ListItem = ({ label, value }: ListItem) => {
  return (
    <p>
      <span className="font-light text-slate-700">{label}:</span>
      <span className="tracking-wide">{value}</span>
    </p>
  );
};
