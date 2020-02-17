import React from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

import { Select, MenuItem } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#053099"
  },
  wrapper: {
    width: "60%",
    height: "60vh",
    backgroundColor: "white",
    padding: theme.spacing(4)
  },
  paper: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(6),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  title: {},
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px"
  },
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "calc(100% - 50px)",
    alignItems: "stretch",
    justifyContent: "space-around"
  },
  legend: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  label: {
    marginRight: "20px"
  }
}));

export default props => {
  const classes = useStyles();
  let data;

  const [allData, setAllData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.get("http://localhost:8081/getAll");
      setAllData(result.data);
    };
    fetchData();
  }, []);

  const options = [
    { filter: 0, label: "All" },
    { filter: 1, label: "Communication" },
    { filter: 2, label: "BAU" },
    { filter: 3, label: "PPL management" },
    { filter: 4, label: "Infrastructure" }
  ];

  const [show, setShow] = React.useState(0);

  const handleChangeShow = e => {
    setShow(e.target.value);
  };

  data = allData
    .filter(data => (show === 0 ? true : data.category === show))
    .map(data => ({
      name: data.name,
      votes: data.votes.length,
      category: data.category
    }));

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <Typography variant="h6" className={classes.title}>
            Results
          </Typography>
        </div>
        <div className={classes.legend}>
          <div className={classes.label}>Show:</div>
          <div>
            {" "}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={show}
              onChange={handleChangeShow}
            >
              {options.map(option => (
                <MenuItem value={option.filter}>{option.label}</MenuItem>
              ))}
            </Select>
          </div>
        </div>
        <div className={classes.formWrapper}>
          <ResponsiveContainer>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="votes" fill="#053099" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
