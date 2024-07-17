import AddContact from "./components/AddContact.jsx";
import ContactList from "./components/ContactList.jsx";
import Container from "./components/Container.jsx";
import Header from "./components/Header.jsx";


function App() {

  return (
    <>
      <Header/>
      <Container color={"brown"}>
        <AddContact/>
      </Container>
    </>
  )
}

export default App
