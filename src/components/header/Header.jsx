import classes from './Header.module.css';
import { useDispatch } from 'react-redux';
import { pageAction } from '../../store/activePage';


export default function Header(){

  const dispatch = useDispatch();

  function handlePageChange(payload){
    dispatch(pageAction.changePage(payload));
  }

  return(
    <>
      <header className = {classes.header}>
        <h2>User Manual</h2>
        <nav className = {classes.nav}>
          <ul>
            <li>
              <button 
                onClick={()=>handlePageChange("AddContact")}
              >
                Add Contact
              </button>
            </li>
            <li>
              <button
                onClick={()=>handlePageChange("ContactList")}
              >
                Contact List
              </button>
            </li>
            <li>
              <button
                onClick={()=>handlePageChange("Favourites")}
              >
                Favourites
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}