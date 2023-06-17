export default function ShoppingList({items}){

    return(
        <ul>
        {items.map(i  => <li>{i.item}-{i.quantity}</li>)}
        </ul>
    );
}