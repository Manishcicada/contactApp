import classes from './AddContact.module.css';

export default function AddContact() {
  return (
    <>
      <header className={classes.header}>
        <h3>Add Contact</h3>
      </header>
      <main className={classes.main}>
        <form>
          <div className={classes.controls}>
            <input
              className={classes.input}
              placeholder="Enter Name"
              type="text"
              required
            />
            <input
              className={classes.input}
              placeholder="Enter Email"
              type="email"
              required
            />
          </div>
          <div className={classes.buttons}>
            <button type="button">Add</button>
          </div>
        </form>
      </main>
    </>
  );
}