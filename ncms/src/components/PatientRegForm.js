import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  patientRegForm: {
    maxWidth: "400px",
    margin: "auto",
    textAlign: "center",
  },
  regLabel: {
    textAlign: "left",
    display: "block",
  },
  formTitle: {
    fontSize: "20px",
    color: "#f1356d",
    marginBottom: "30px",
  },
  forminput: {
    width: "100%",
    paddingTop: "6px",
    margin: "10px",
    border: "1px",
    borderStyle: "solid",
    borderColor: "#ddd",
    boxSizing: "border-box",
    display: "block",
  },
  formButton: {
    background:  "#f1356d",
    color:"fff",
    border:"0",
    padding:"8px",
    borderRadius: "8px",
  },
}));

export default function PatientRegForm() {
  const { patientRegForm, regLabel, formTitle, forminput, formButton } = useStyles();
  return (
    <div className={patientRegForm}>
      <h2 className={formTitle}>Patient Registration</h2>
      <form>
        <label className={regLabel}>Patient Name : </label>
        <input className={forminput} required type="text" />

        <label className={regLabel}>Location X: </label>
        <input className={forminput} required type="number" pattern="[0-9]" />

        <label className={regLabel}>Location Y: </label>
        <input className={forminput} required type="number" pattern="[0-9]" />

        <button className={formButton}> Register </button>
      </form>
    </div>
  );
}
