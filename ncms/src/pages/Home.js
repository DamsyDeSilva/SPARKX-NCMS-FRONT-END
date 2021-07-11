import "./Home.css";
import Header from "../components/Header";
import PatientRegForm from "../components/PatientRegForm";
import UserLogin from "../components/UserLogin";

function Home() {
  return (
    <div className="home">
      <div className="div_header">
        <Header />
      </div>

      <div className="div_Home_Content">
        <div className="div_userLogin_form">
          {/* <Stats/> */}
        </div>

        <div className="div_patient_reg_form">
          <PatientRegForm />
        </div>

        <div className="div_userLogin_form">
          <UserLogin />
        </div>
      </div>
    </div>
  );
}
export default Home;
