
function Items(props){
    const items = props.items.map((item) => <li key={item}>{item}</li>);
    return <ul>{items}</ul>;
    
    
}
export default Items