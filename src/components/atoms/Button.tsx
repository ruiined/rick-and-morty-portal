export const Button = ({
  label,
  handleClick,
  disabled,
}: {
  label: string;
  handleClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      className="bg-slate-100 text-slate-600 p-2 w-full hover:text-slate-900 hover:bg-slate-200 disabled:text-slate-300 disabled:hover:bg-slate-100 disabled:hover:text-slate-200 disabled:cursor-default transition duration-300 text-sm font-semibold"
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
