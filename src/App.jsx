import AddContact from "./components/addContact/AddContact.jsx";
import Container from "./components/container/Container.jsx";
import Favourites from "./components/favourites/Favourites.jsx";
import Header from "./components/header/Header.jsx";
import ContactList from './components/contact-list/ContactList.jsx';


function App() {

  return (
    <>
      <Header/>
      <Container color={"brown"}>
        <ContactList/>
      </Container>
    </>
  )
}

export default App
