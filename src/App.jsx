import AddContact from "./components/addContact/AddContact.jsx";
import Container from "./components/container/Container.jsx";
import Favourites from "./components/favourites/Favourites.jsx";
import Header from "./components/header/Header.jsx";


function App() {

  return (
    <>
      <Header/>
      <Container color={"brown"}>
        <Favourites/>
      </Container>
    </>
  )
}

export default App
