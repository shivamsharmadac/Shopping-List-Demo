import ShoppingList from "./ShoppingList";

export default function App() {
  const data = [
    { item: "eggs", quantity: "10", completed: "false" },
    { item: "Spinach", quantity: "5", completed: "true" },
    { item: "bread", quantity: "4", completed: "true" },
    { item: "Butter", quantity: "12", completed: "false" },
  ];
  return (
    <>
      <ShoppingList items={data} />
    </>
  );
}
