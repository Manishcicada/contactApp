import AddContact from "./components/addContact/AddContact.jsx";
import Container from "./components/container/Container.jsx";
import Favourites from "./components/favourites/Favourites.jsx";
import Header from "./components/header/Header.jsx";
import ContactList from './components/contact-list/ContactList.jsx';
import Modal from "./components/Modal/Modal.jsx";
import { useSelector } from "react-redux";

function App() {

  const page = useSelector(state => state.page.page);
  return (
    <>
      <Header/>
      {page ==='ContactList' &&
      <Container color={"brown"}>
        <ContactList/>
      </Container> }

      {page ==='AddContact' &&
      <Container color={"green"}>
        <AddContact/>
      </Container> }

      {page ==='Favourites' &&
      <Container color={"Red"}>
        <Favourites/>
      </Container> }
      
      <Modal open={false}/>
    </>
  )
}

export default App