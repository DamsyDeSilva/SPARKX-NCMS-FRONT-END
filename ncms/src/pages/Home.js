import "./pageStyles.css";
import Header from "../components/Header";
import PatientRegForm from "../components/PatientRegForm";
// import StatComponent from "../components/StatComponent";

const Home = () =>  {
  return (
    <div className="home">
      <div className="div_header">
        <Header />
      </div>

      <div className="div_Home_Content">
        {/* <div className="div_stats">
          <StatComponent/>
        </div> */}

        <div className="div_patient_reg_form">
          <PatientRegForm />
        </div>

      </div>
    </div>
  );
}
export default Home;
