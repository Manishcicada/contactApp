import classes from './Header.module.css';


export default function Header(){
  return(
    <>
      <header className = {classes.header}>
        <h2>User Manual</h2>
        <nav className = {classes.nav}>
          <ul>
            <li>
              <button>
                Add Contact
              </button>
            </li>
            <li>
              <button>
                Contact List
              </button>
            </li>
            <li>
              <button>
                Favourites
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}