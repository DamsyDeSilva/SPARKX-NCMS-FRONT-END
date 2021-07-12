import "./pageStyles.css";
import Header from "../components/Header";
import DistrictStats from "../components/DistrictStat"
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({

  title: {
    fontSize: "20px",
    color: "#f1356d",
    marginBottom: "30px",
  },
}));

const Stats = () => {

  const classes = useStyles();

  return (
    <div className="home">
      <div className="div_header">
        <Header />
      </div>
        <h1 className={classes.title}> Patient Statistics</h1>

      <div>
       <DistrictStats/>
      </div>
    </div>
  );
};
export default Stats;
