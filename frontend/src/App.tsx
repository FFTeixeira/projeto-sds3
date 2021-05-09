import Navbar from "components/navbar";
import Footer from "components/footer";
import Datatable from "components/datatable";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        
        <Datatable />
      </div>
      <Footer />
    </>
  );
}

export default App;