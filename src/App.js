import "./App.css";
import Header from "./Components/Header/Header";
import CourseDeck from "./Components/CourseDeck/CourseDeck";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="container">
      <Header />
      <CourseDeck />
      <Footer />
    </div>
  );
}

export default App;
