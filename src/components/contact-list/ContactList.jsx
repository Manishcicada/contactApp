import classes from './ContactList.module.css';
import UserBlock from '../User/UserBlock.jsx';
import Modal from '../Modal/Modal.jsx';

import { useState } from 'react';

const DUMMY_DATA = [
  { name: 'user1', email: 'user1@email.com', id: Math.random(),favourite: true },
  { name: 'user2', email: 'user2@email.com', id: Math.random(),favourite: false },
  { name: 'user3', email: 'user3@email.com', id: Math.random(),favourite: false },
  { name: 'user4', email: 'user4@email.com', id: Math.random(),favourite: true },
];

export default function ContactList() {

  const number = DUMMY_DATA.length;

  const[open, setOpen] = useState(false);
  const[hide, setHide] = useState(false);

  function handleClearAll(){
    setOpen(false);
  }

  return (
    <>
      <header className={hide?classes.headerOnHide:classes.header}>
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
      {!hide && <UserBlock DUMMY_DATA={DUMMY_DATA} />}
      <Modal 
      open = {open} 
      setOpen={setOpen} 
      message = "All Contacts"
      onConfirm={handleClearAll}
      />
    </>
  );
}