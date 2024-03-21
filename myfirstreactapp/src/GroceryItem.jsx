
function GroceryItem(props) {
    return <button onClick={props.onClick} style={{backgroundColor: 'green', color: 'white', borderRadius: '7px'}}>
        {props.name}
        </button>
}

export default GroceryItem;