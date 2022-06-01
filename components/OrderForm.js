import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <>
        <label 
            htmlFor={props.id || props.name} 
            className="w-full ml-6 text-cyan-500 uppercase text-sm mt-4 font-bold"
        >
            {label}
        </label>
        <input className="text-input w-full border-2 border-neutral-200 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error text-red-500 text-sm mt-2">{meta.error}</div>
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
          <div className="error text-red-500 text-sm mt-2">{meta.error}</div>
        ) : null}
      </>
    );
};

const MySelect = ({ label, ...props }) => {
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
        <select className="w-full border-2 border-neutral-200 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"{...field} {...props} />
        {meta.touched && meta.error ? (
            <div className="error text-red-500 text-sm mt-2">{meta.error}</div>
        ) : null}
      </>
    );
};

const OrderForm = () => {
    return (
        <section id="contactForm">
            <h2 className="font-bold text-4xl text-cyan-500 text-center mt-20 mb-6">ỦNG HỘ CHÚNG MÌNH NHÉ</h2>
            <Formik
            initialValues={{
                fullName: "",
                email: "",
                phone: "",
                address: "",
                product: "",
                acceptedTerms: false // added for our checkbox
            }}
            validationSchema={Yup.object({
                fullName: Yup.string()
                    .max(30, "Must be 30 characters or less")
                    .required("Required"),
                email: Yup.string()
                    .email("Invalid email addresss`")
                    .required("Required"),
                phone: Yup.string()
                    .length(10, "Invalid phone number")
                    .required("Required"),
                address: Yup.string()
                    .required("Required"),
                product: Yup.string()
                    .oneOf(
                        ["standee", "keychain", "figures", "other"],
                    )
                    .required("Required"),
                acceptedTerms: Yup.boolean()
                    .required("Required")
                    .oneOf([true], "You must accept the terms and conditions.")
            })}
            onSubmit={async (values) => {
                const response = await fetch(
                    "https://v1.nocodeapi.com/ratvamerch/google_sheets/gGPraAJcboZNUxxc?tabId=Order",
                    {
                        method: "post",
                        body: JSON.stringify([[values.fullName, values.email, values.phone, values.address, values.product]]),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                );
                const json = await response.json();
                alert(JSON.stringify(values, null, 4));
                console.log(JSON.stringify(values, null, 2));
            }}
            >
            <Form className="w-11/12 md:w-2/3 lg:w-1/2 flex flex-col justify-center items-center mx-auto mb-10 p-4 box-border border-2 border-cyan-500 shadow-md rounded-md">
                <MyTextInput
                label="Họ tên của bạn"
                name="fullName"
                type="text"
                placeholder="Tên của bạn là gì nhỉ?"
                />
                <MyTextInput
                label="Địa chỉ email"
                name="email"
                type="email"
                placeholder="ratvamerch.team@gmail.com"
                />
                <MyTextInput
                label="Số điện thoại"
                name="phone"
                type="text"
                placeholder="Nhập số điện thoại liên lạc của bạn"
                />
                <MyTextInput
                label="Địa chỉ của bạn"
                name="address"
                type="text"
                placeholder="Địa chỉ giao hàng của bạn"
                />
                <MySelect label="chọn sản phẩm bạn muốn mua" name="product">
                    <option value="">Hãy chọn một sản phẩm</option>
                    <option value="standee">Standee</option>
                    <option value="keychain">Keychain</option>
                    <option value="figures">Figures</option>
                    <option value="other">Other</option>
                </MySelect>
                <MyCheckbox name="acceptedTerms">
                I accept the terms and conditions
                </MyCheckbox>
    
                <button className="relative flex justify-center items-center bg-cyan-500 rounded-md mt-6 px-8 py-3 font-bold overflow-hidden cursor-pointer" type="submit">
                    <span className="iconify" data-icon="akar-icons:send"></span>
                    <span className="ml-2 py-1">Gửi luôn</span>
                </button>
            </Form>
            </Formik>
        </section>
    );
};
  
export default OrderForm;