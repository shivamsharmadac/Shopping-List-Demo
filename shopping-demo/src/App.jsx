import ShoppingList from "./ShoppingList";

export default function App() {
  const data = [
    {id:1, item: "Eggs", quantity: 10, completed: false },
    {id:2 ,item: "Spinach", quantity: 5, completed: true },
    { id:3,item: "Bread", quantity: 4, completed: false },
    { id:4,item: "Butter", quantity: 12, completed: true }
  ];
  return (
    <>
    <h1>The Shopping List</h1>
      <ShoppingList items={data} />
    </>
  );
}
