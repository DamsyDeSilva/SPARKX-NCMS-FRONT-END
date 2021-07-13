import "./pageStyles.css";
import Header from "../components/Header";
import PatientRegForm from "../components/PatientRegForm";
// import StatComponent from "../components/StatComponent";

const Home = () => {
  return (
    <div className="home">
      <div className="div_header">
        <Header />
      </div>

      <div className="div_Home_Content">
        <div className="div_image">

          <img
            src={
              "https://media.istockphoto.com/vectors/group-of-people-wearing-medical-masks-vector-id1202623453?k=6&m=1202623453&s=170667a&w=0&h=SfNIc7aXyRGfokRnYDvFDZy2DE6XNDqXZqPKO5thP7s="
            }
            alt="Logo"
          />
        </div>

        <div className="div_patient_reg_form">
          <PatientRegForm />
        </div>
      </div>
    </div>
  );
};
export default Home;
