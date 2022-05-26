import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import RippleButton from "../components/RippleButton";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
        <label 
            htmlFor={props.id || props.name} 
            className="w-full ml-6 text-left text-cyan-500 uppercase text-sm mt-4 font-bold"
        >
            {label}
        </label>
        <input className="text-input w-full border-2 border-neutral-200 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" {...field} {...props} />
        {meta.touched && meta.error ? (
            <div className="error text-red-500">{meta.error}</div>
        ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox mt-4">
        <input {...field} {...props} type="checkbox" />
        <span className="ml-1">{children}</span>
      </label>
      {meta.touched && meta.error ? (
        <div className="error text-red-500">{meta.error}</div>
      ) : null}
    </>
  );
};

const FeedbackForm = () => {
  return (
    <section className="w-full my-20" id="contactForm">
      <h2 className="font-bold text-2xl text-cyan-500 text-center mt-14 my-6">ĐỂ LẠI LỜI NHẮN VỚI CHÚNG MÌNH</h2>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          message: "",
          acceptedTerms: false 
        }}
        validationSchema={Yup.object({
            fullName: Yup.string()
                .max(30, "Must be 30 characters or less")
                .required("Required"),
            email: Yup.string()
                .email("Invalid email addresss`")
                .required("Required"),
            message: Yup.string()
                .required("Required"),
            acceptedTerms: Yup.boolean()
                .required("Required")
                .oneOf([true], "You must accept the terms and conditions.")
        })}
        onSubmit={async (values) => {
             const response = await fetch(
                "https://v1.nocodeapi.com/ratvamerch/google_sheets/gGPraAJcboZNUxxc?tabId=Feedbacks",
                {
                    method: "post",
                    body: JSON.stringify([[values.fullName, values.email, values.message]]),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            const json = await response.json();
            alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="w-4/5 md:w-2/3 lg:w-1/2 shadow-md flex flex-col justify-center items-center mx-auto mb-10 p-4 box-border border-2 border-cyan-500 rounded-md">
          <MyTextInput
            label="Full Name"
            name="fullName"
            type="text"
            placeholder="Tên của bạn là gì nhỉ?"
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="ratvamerch.team@gmail.com"
          />
          <MyTextInput
            label="Message"
            name="message"
            type="text"
            placeholder="Bạn muốn nhắn gì với chúng mình"
          />
          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button className="relative bg-cyan-500 rounded-md mt-6 px-6 py-3 font-bold overflow-hidden cursor-pointer" type="submit">Submit</button>
        </Form>
      </Formik>
    </section>
  );
};

export default FeedbackForm;
