import React from "react";

interface ItemNavProps {
  item: {
    id: number;
    name: string;
    href: string;
    icon: React.ReactNode;
  };
}

const ItemNav = ({ item }: ItemNavProps) => {
  return (
    <div className="flex items-center gap-4 w-full border px-16 py-5 hover:bg-yellow-600 transition-all hover:cursor-pointer">
      <div className="text-2xl">{item.icon}</div>
      <button type="button" className="text-2xl font-bold">
        {item.name}
      </button>
    </div>
  );
};

export { ItemNav };
