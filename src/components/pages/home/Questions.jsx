/* eslint-disable */
import { Box } from "@mui/material";
import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";
import { questions } from "../../../data/questionsdata";
import NavigateTop from "../../NavigateTop";
import Checkbox from "@mui/material/Checkbox";
import $ from "jquery";
import { useState, useEffect } from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={0} ref={ref} variant="filled" {...props} />;
});


function Questions({ questionsArray }) {
  const [reload, setReload] = useState(0);
  const [count, setCount] = useState(0);
  let checkboxArray = new Array(questions.length).fill(false);
  const [checkbox, setCheckBox] = useState(checkboxArray);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setCount(
      JSON.parse(localStorage.getItem("checkboxArray"))?.filter(Boolean)
        .length || 0
    );
    setCheckBox(
      JSON.parse(localStorage.getItem("checkboxArray")) || checkboxArray
    );
  }, [reload]);

  const handleChange = (index) => {
    setCheckBox((checkbox) => {
      checkbox[index] = !checkbox[index];
      if (checkbox[index]) {
        setOpen(!open);
      }
      console.log(open);
      localStorage.setItem("checkboxArray", JSON.stringify(checkbox));
      setReload(reload + 1);
      return checkbox;
    });
  };
  return (
    <>
      <Box sx={{ position: "relative", backgroundColor: "rgb(0 0 0 / 4%)" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Q.id</strong>
              </TableCell>
              <TableCell>
                <strong>Done</strong>
              </TableCell>
              <TableCell>
                <strong>Questions</strong>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questionsArray.map((question, index) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell>{question.id}.</TableCell>

                  <TableCell>
                    <Checkbox
                      color="success"
                      checked={checkbox ? checkbox[index] : false}
                      onChange={() => handleChange(index)}
                    />
                  </TableCell>

                  <TableCell>
                    <a
                      sx={{ textDecoration: "none", color: "black" }}
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
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
        <NavigateTop />
      </Box>
      <>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
        >
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            {`${count} of ${questions.length} Done`}
          </Alert>
        </Snackbar>
      </>
    </>
  );
}

export default Questions;
