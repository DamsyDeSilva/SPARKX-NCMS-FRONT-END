import "./Home.css";
import Header from "../components/Header";
import PatientRegForm from "../components/PatientRegForm";

function Home() {
  return (
    <div className="home">

      <div className="div_header">
        <Header />
      </div>

      <div className="div_patient_reg_form">
        <PatientRegForm />
      </div>
    </div>
  );
}
export default Home;
