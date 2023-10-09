// Custom Hooks
import { useVendorManager } from "@/hooks/useVendorManager";

const ItemNav = ({ item }: any) => {
  const { currentNavCategory, handleClickCategory }: any = useVendorManager();

  return (
    <div
      className={`${
        currentNavCategory?.id === item.id && "bg-yellow-600 "
      } flex items-center gap-4 w-full border px-16 py-5 hover:bg-yellow-600 transition-all hover:cursor-pointer`}
    >
      <div className="text-2xl">{item.icon}</div>
      <button
        type="button"
        className="text-2xl font-bold"
        onClick={() => handleClickCategory(item)}
      >
        {item.name}
      </button>
    </div>
  );
};

export { ItemNav };
