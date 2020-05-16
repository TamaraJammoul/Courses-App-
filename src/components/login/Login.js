import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "./login.css";
import { ProductConsumer } from "./../../context";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
    this.formik.resetForm({});
  };

  return (
    <ProductConsumer>
      {(value) => {
        return (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <div className="container contain wow fadeInDown">
                  <section id="content">
                    <form action="">
                      <h1 className="wow pulse">
                        {value.isLogin ? "Login" : "Sign up"}
                      </h1>
                      <div>
                        <input
                          type="email"
                          name="email"
                          id="username"
                          placeholder="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          className="wow fadeInLeft shadow-sm"
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <h6 className="text-danger">{formik.errors.email}</h6>
                        ) : null}
                      </div>
                      <div>
                        <input
                          type="password"
                          placeholder="Password"
                          name="password"
                          id="password"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.password}
                          className="wow fadeInLeft shadow-sm"
                        />
                        {formik.touched.password && formik.errors.password ? (
                          <div className="text-danger">
                            {formik.errors.password}
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <input
                          type="submit"
                          disabled={!formik.isValid}
                          value={value.isLogin ? "Login" : "Sign up"}
                          className="shadow-sm"
                        />

                        <Link to="#">Lost your password?</Link>
                        <Link to="#">
                          {value.isLogin ? "Sign up" : "Login"}
                        </Link>
                      </div>
                    </form>
                    <div className="logbutton">
                      <Link to="/">not now</Link>
                    </div>
                  </section>
                </div>
              );
            }}
          </Formik>
        );
      }}
    </ProductConsumer>
  );
}

export default LoginForm;
