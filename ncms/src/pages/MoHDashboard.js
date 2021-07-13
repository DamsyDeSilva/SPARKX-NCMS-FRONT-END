import "./pageStyles.css";
import Header from "../components/Header";
import HospitalRegForm from "../components/HospitalRegForm";
import UserRegForm from "../components/UserRegForm";
import QueueTable from "../components/QueueTable"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    fontSize: "20px",
    color: "#f1356d",
    marginBottom: "30px",
  },
}));


const MoHDashboard = () => {
  const classes = useStyles();
  return (
    <div className="home">
      <div className="div_header">
        <Header />
      </div>

      <h1 className={classes.title}> MOH DASHBOARD</h1>

      <div className="div_Home_Content">
        <div className="div_moh_left_form">
          <UserRegForm />
        </div>
        <div className="div_moh_middle_form">
          <HospitalRegForm />
        </div>
        <div className="div_queue_table">
          <QueueTable />
        </div>
      </div>
    </div>
  );
};
export default MoHDashboard;
