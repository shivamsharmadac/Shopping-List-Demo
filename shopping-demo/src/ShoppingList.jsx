import ShoppingListItem from "./ShoppingListItem";
export default function ShoppingList({ items }) {
  return (
    <>
      <ul>
        {items.map((i) => (
          <ShoppingListItem
            key={i.id}
            item={i.item}
            quantity={i.quantity}
            completed={i.completed}
          />
        ))}
      </ul>
    </>
  );
}
{
  /* const data = [
    {id:1, item: "Eggs", quantity: 10, completed: false },
    {id:2 ,item: "Spinach", quantity: 5, completed: true },
    { id:3,item: "Bread", quantity: 4, completed: false },
    { id:4,item: "Butter", quantity: 12, completed: true }
  ]; */
}
