export default function ShoppingListItem({ item, quantity, completed }) {
  const styles = { 
    color:completed ? "grey" : "red",
    textDecoration: completed ? "line-through" : "underline",
  };

  return (
    <li style={styles}>
      {item} - {quantity}
    </li>
  );
}

// {
//   /* <li key={i.id}
//             style={{
//               color: i.completed ? "grey" : "red",
//               textDecoration: i.completed ? "line-through" : "underline",

//               fontSize: "40px",
//             }}
//           >
//             {i.item}-{i.quantity}
//           </li> */
// }
