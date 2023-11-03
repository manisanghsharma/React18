import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const Additem = ( {newItem, setNewItem, handleSubmit} ) => {
  const inputRef = useRef();

  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
            autoFocus 
            ref={inputRef}
            type="text"
            id='addItem'
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={() => inputRef.current.focus()} type='submit' aria-label='Add Item'>
            <FaPlus />
        </button>
    </form>
  );
}
export default Additem