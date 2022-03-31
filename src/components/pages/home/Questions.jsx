import { Box } from "@material-ui/core";
import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
} from "@material-ui/core";
import { questions } from "../../../data/questionsdata";
import NavigateTop from "../../NavigateTop";
import Checkbox from "@mui/material/Checkbox";
import $ from "jquery";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const useStyles = makeStyles((theme) => ({
  extendedIcon: {
    marginRight: theme.spacing(1),
    position: "fixed",
  },

  link: {
    textDecoration: "none",
    color: "black",
  },
}));

function Questions() {

  const [reload, setReload] = useState(0);
  const [count, setCount] = useState(0);
  let checkboxArray = new Array(questions.length).fill(false);
  const [checkbox, setCheckBox] = useState(checkboxArray);
  console.log(count, "cnt");
  useEffect(() => {
    setCount(
      JSON.parse(localStorage.getItem("checkboxArray")).filter(Boolean).length
    );
    setCheckBox(JSON.parse(localStorage.getItem("checkboxArray")));
  }, [reload]);
  

  

  const handleChange = (index) => {
    setCheckBox((checkbox) => {
      checkbox[index] = !checkbox[index];
      if (checkbox[index]) {
        toast.success(`${count + 1} of ${questions.length} Done`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      localStorage.setItem("checkboxArray", JSON.stringify(checkbox));
      setReload(reload + 1);
      return checkbox;
    });
  };
  const classes = useStyles();
  return (
    <>
      <Box sx={{ position: "relative", backgroundColor: "rgb(0 0 0 / 4%)" }}>
        <Table>
          <TableHead>
            <TableCell>
              <strong>Q.Id</strong>
            </TableCell>
            <TableCell>
              <strong>Done</strong>
            </TableCell>
            <TableCell>
              <strong>Questions</strong>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableHead>
          <TableBody>
            {questions.map((question, index) => (
              <TableRow key={index}>
                <TableCell>{question.Id}.</TableCell>

                <TableCell >
                  <Checkbox
                    color="success"
                    checked={checkbox[index]}
                    onChange={() => handleChange(index)}
                    
                  />
                </TableCell>

                <TableCell>
                  <a
                    className={classes.link}
                    href={question.link}
                    target="_blank"
                  >
                    {question.question}
                  </a>
                </TableCell>

                <TableCell>
                  <Button
                    className="btn"
                    size="medium"
                    color="primary"
                    variant="outlined"
                  >
                    Practice
                  </Button>
                </TableCell>

                <TableCell>
                  <Button
                    className="btn"
                    size="medium"
                    color="primary"
                    variant="outlined"
                  >
                    Solution
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <NavigateTop />
      </Box>
    </>
  );
}

export default Questions;
