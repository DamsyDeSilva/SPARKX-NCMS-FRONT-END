import "./pageStyles.css";
import Header from "../components/Header";
import UserLogin from "../components/UserLogin";

const Login = () =>  {
  return (
    <div className="home">
      <div className="div_header">
        <Header />
      </div>

      <div className="div_Home_Content">
        {/* <div className="div_stats">

        </div> */}

        <div className="div_userLogin_form">
          <UserLogin />
        </div>
      </div>
    </div>
  );
}
export default Login;
