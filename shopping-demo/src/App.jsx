import ShoppingList from "./ShoppingList";

export default function App() {
  const data = [
    { item: "Eggs", quantity: 10, completed: false },
    { item: "Spinach", quantity: 5, completed: true },
    { item: "Bread", quantity: 4, completed: false },
    { item: "Butter", quantity: 12, completed: true }
  ];
  return (
    <>
      <ShoppingList items={data} />
    </>
  );
}
