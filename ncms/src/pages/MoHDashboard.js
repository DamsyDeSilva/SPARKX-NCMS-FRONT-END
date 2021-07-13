import "./pageStyles.css";
import Header from "../components/Header";
import HospitalRegForm from "../components/HospitalRegForm";
import UserRegForm from "../components/UserRegForm";

const MoHDashboard = () => {
  return (
    <div className="home">
      <div className="div_header">
        <Header />
      </div>

      <div className="div_Home_Content">
        <div className="div_patient_reg_form">
          <UserRegForm />
        </div>
        <div className="div_patient_reg_form">
          <HospitalRegForm />
        </div>
      </div>
    </div>
  );
};
export default MoHDashboard;
