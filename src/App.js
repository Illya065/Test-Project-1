import "./App.css";
import FormContainer from "./_components/Form/Form";
import Header from "./_components/Header/Header";
import ListContainer from "./_components/List/ListContainer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <Header />

          <FormContainer />

          <ListContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
