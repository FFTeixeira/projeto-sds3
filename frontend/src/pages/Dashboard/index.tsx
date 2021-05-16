import Barchart from "components/barchart";
import Datatable from "components/datatable";
import Donutchart from "components/donutchart";
import Footer from "components/footer";
import Navbar from "components/navbar";

function Dashboard() {

    return (

        <>
            <Navbar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                        <Barchart />
                    </div>

                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Vendas</h5>
                        <Donutchart />
                    </div>
                </div>

                <div className="py-3">
                    <h2 className="text-primary">Todas vendas</h2>
                </div>

                <Datatable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;