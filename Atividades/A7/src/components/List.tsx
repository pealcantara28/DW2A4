import { useState } from "react";

type ListProps = {
    initialItems: string[]
}

function List({initialItems}: ListProps) {
  const[newItem, setNewItem] = useState('');
  const [list, setList] = useState(initialItems);

  function addToList() {
    setTimeout(() => {
      setList(state => [...state, newItem]);
    },500)
  }

  function removeFromList(itemDel: string) {
    setTimeout(() => {
      setList(state => state.filter(item => item != itemDel));
    },500)
  }

  return (
    <>
    <input 
      type="text" 
      onChange={e => setNewItem(e.target.value)}
      placeholder="Novo item"
    />
    <button onClick={addToList}>Adicionar</button>

    <ul>
      {list.map(item => (<li key={item}>
        {item}
        <button onClick={() => removeFromList(item)}>Remover</button>
      </li>))}
    </ul>
  </>
  )
}

export default List
