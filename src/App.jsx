import AddContact from "./components/AddContact.jsx";
import Container from "./components/Container.jsx";
import Favourites from "./components/Favourites.jsx";
import Header from "./components/Header.jsx";


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
