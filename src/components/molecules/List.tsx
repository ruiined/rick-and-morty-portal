import { ListItem } from '.';

type List = {
  items: string[][];
};

export const List = ({ items }: List) => {
  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <ListItem key={item[0]} label={item[0]} value={item[1]} />
      ))}
    </div>
  );
};
