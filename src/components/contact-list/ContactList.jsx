import classes from './ContactList.module.css';
import UserBlock from '../User/UserBlock.jsx';
import Modal from '../Modal/Modal.jsx';
import { dataActions } from '../../store/dataSlice.js';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToLocalStorage } from '../../util/util.js';

export default function ContactList() {

  const data = useSelector(state=>state.data);
  addToLocalStorage(data);
  const dispatch = useDispatch();
  const number = data.length;

  const[open, setOpen] = useState(false);
  const[hide, setHide] = useState(false);

  function handleClearAll(){
    dispatch(dataActions.clearAll());
    setOpen(false);
  }

  return (
    <>
      <header className={(hide|| number<1)?classes.headerOnHide:classes.header}>
        <div className={classes.contactList}>
          <h2>Contact List</h2>
          <button
            onClick={()=>setHide(!hide)}
          >Hide Contact</button>
        </div>
        <div className={classes.clearAll}>
          <div className={classes.counter}><span>{number}</span></div>
          <button
          onClick={()=>setOpen(true)}
          >Clear All</button>
        </div>

      </header>
      {!hide && <UserBlock data={data} />}
      <Modal 
      open = {open} 
      setOpen={setOpen} 
      message = "All Contacts"
      onConfirm={handleClearAll}
      />
    </>
  );
}