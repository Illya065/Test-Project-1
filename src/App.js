import "./App.css";
import Form from "./_components/Form/Form";
import Header from "./_components/Header/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <Header />

          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
