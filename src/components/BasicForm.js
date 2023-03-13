import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
import * as Yup from "yup";
import { addTodo } from "../redux/actions";

import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
const BasicForm = () => {
  const dispatch = useDispatch();
  return (
    <div className="">
      <h1>TODO</h1>
      <Formik
        initialValues={{
          todo: "",
          priority: "",
        }}
        validationSchema={Yup.object({
          todo: Yup.string().required("Required"),
          priority: Yup.number().integer().min(1).max(10).required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            dispatch(addTodo({ ...values, complete: false }));
            resetForm();
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, values, errors, touched }) => (
          <Form
            autoComplete="off"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              gap: "16px",
            }}
          >
            <Field
              name="todo"
              placeholder="Todo what you should do"
              as={TextField}
              label="todo"
              error={errors.todo && touched.todo}
              helperText={errors.todo && touched.todo}
            />

            {errors.todo && touched.todo && (
              <div style={{ color: "red" }}>
                <ErrorMessage name="todo" />
              </div>
            )}

            <Field
              name="priority"
              placeholder="Priority from 1 to 10"
              as={TextField}
              label="priority"
              error={errors.priority && touched.priority}
              helperText={errors.priority && touched.priority}
            />
            {errors.priority && touched.priority && (
              <div style={{ color: "red" }}>
                <ErrorMessage name="priority" />
              </div>
            )}
            <Button type="submit">+ADD TODO</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default BasicForm;
