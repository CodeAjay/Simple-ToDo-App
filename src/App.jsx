import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./styles.css";
import ToDo from "./components/ToDo";

export default function App() {
  const classes = style(); // Use the makeStyles hook to generate styles

  return (
    <div className="App">
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My Material-UI Todo App
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.contents}>
        <h1>This is my Simple To Do App</h1>
        <ToDo />
      </div>
    </div>
  );
}

const style = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff5722",
    height: 60,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  title: {
    flexGrow: 1 // To push the title to the right
  },
  contents: {
    padding: 30
  }
}));
