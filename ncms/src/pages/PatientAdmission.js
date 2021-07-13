import "./pageStyles.css";
import Header from "../components/Header";
import AdmissionTable from "../components/AdmissionTable";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    fontSize: "20px",
    color: "#f1356d",
    marginBottom: "30px",
  },
}));


const PatientAdmission = () =>  {
  const classes = useStyles();
  return (
    <div className="home">
      <div className="div_header">
        <Header />
      </div>

      <h1 className={classes.title}> Patient Admission</h1>
      <div className="div_Home_Content">

        <div >
          <AdmissionTable />
        </div>

      </div>
    </div>
  );
}
export default PatientAdmission;
