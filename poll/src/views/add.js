import React from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { TextField, Button } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#053099"
  },
  wrapper: {
    width: "40%",
    height: "50vh",
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
    height: "100%",
    alignItems: "stretch",
    justifyContent: "space-around"
  }
}));

export default props => {
  let projects;
  const classes = useStyles();
  React.useEffect(
    () => async () => {
      projects = await Axios.get("http://localhost:8081/getAll");
    },
    []
  );

  const [category, setCategory] = React.useState(1);
  const [idea, setIdea] = React.useState("");

  const handleCategoryChange = e => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };
  const handleIdeaChange = e => {
    console.log(e.target.value);
    setIdea(e.target.value);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = () => {
    const projects = Axios.post("http://localhost:8081/addIdea", {
      idea,
      category
    }).then(success => {
      setOpen(true);
    });
    setIdea("");
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <Typography variant="h6" className={classes.title}>
            Add entries to the poll
          </Typography>
        </div>
        <div className={classes.formWrapper}>
          <TextField
            id="time"
            type="text"
            label="Idea"
            value={idea}
            onChange={handleIdeaChange}
          />
          <Select
            label="Category"
            onChange={handleCategoryChange}
            value={category}
          >
            <MenuItem value={1}>Communication</MenuItem>
            <MenuItem value={2}>BAU</MenuItem>
            <MenuItem value={3}>People Management</MenuItem>
            <MenuItem value={4}>Infrastructure</MenuItem>
          </Select>
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            {" "}
            Submit{" "}
          </Button>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        key="top,center"
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
};
