import classes from './AddContact.module.css';
import { useDispatch } from 'react-redux';

import { dataActions } from '../../store/dataSlice';
import { pageAction } from '../../store/activePage';

export default function AddContact() {

  const dispatch = useDispatch();

  function handleSubmit(event){
    event.preventDefault();

    const fd = new FormData(event.target);
    const res = Object.fromEntries(fd.entries());
    const id = Math.random();
    const data = {...res, favourite: false, id: id};

    dispatch(dataActions.addData(data));
    dispatch(pageAction.changePage("ContactList"))
  }

  return (
    <>
      <header className={classes.header}>
        <h3>Add Contact</h3>
      </header>
      <main className={classes.main}>
        <form onSubmit={handleSubmit}>
          <div className={classes.controls}>
            <input
              className={classes.input}
              placeholder="Enter Name"
              type="text"
              name='name'
              required
            />
            <input
              className={classes.input}
              placeholder="Enter Email"
              type="email"
              name='email'
              required
            />
          </div>
          <div className={classes.buttons}>
            <button>Add</button>
          </div>
        </form>
      </main>
    </>
  );
}