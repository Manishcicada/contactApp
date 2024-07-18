import classes from './AddContact.module.css';
import { useState } from 'react';

export default function AddContact() {

  function handleSubmit(event){
    event.preventDefault();
    console.log("Submitted");

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
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