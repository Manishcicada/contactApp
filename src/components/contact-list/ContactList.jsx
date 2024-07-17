import classes from './ContactList.module.css';
import UserBlock from '../User/UserBlock.jsx';

const DUMMY_DATA = [
  { name: 'user1', email: 'user1@email.com', id: Math.random() },
  { name: 'user2', email: 'user2@email.com', id: Math.random() },
  { name: 'user3', email: 'user3@email.com', id: Math.random() },
  { name: 'user4', email: 'user4@email.com', id: Math.random() },
];

export default function ContactList() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.contactList}>
          <h2>Contact List</h2>
          <button>Hide Contact</button>
        </div>
        <div className={classes.clearAll}>
          <div className={classes.counter}><span>3</span></div>
          <button>Clear All</button>
        </div>

      </header>
      <UserBlock DUMMY_DATA={DUMMY_DATA} />
    </>
  );
}