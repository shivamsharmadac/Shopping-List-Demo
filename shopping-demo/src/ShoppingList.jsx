export default function ShoppingList({ items }) {
  return (
    <>
      <h1 style={{ color: "green",  fontFamily: "80px" }}>
        Shopping List
      </h1>
      <ul>
        {items.map((i) => (
          <li
            style={{
              color: i.completed ? "grey" : "red",
              textDecoration: i.completed ? "line-through" : "underline",
              
              fontSize: "40px",
            }}
          >
            {i.item}-{i.quantity}
          </li>
        ))}
      </ul>
    </>
  );
}
