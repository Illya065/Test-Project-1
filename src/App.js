import "./App.css";
import Form from "./_components/Form/Form";
import Header from "./_components/Header/Header";
import List from "./_components/List/List";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <Header />

          <Form />

          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
