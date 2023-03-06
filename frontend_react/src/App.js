import { Navbar } from "./components";
import { About, Footer, Header, Skills, Testimonials, Work } from "./container";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default App;
