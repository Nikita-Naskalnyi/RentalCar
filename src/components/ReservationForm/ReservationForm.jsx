import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as yup from "yup";
import s from "./ReservationForm.module.css";

const ReservationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    date: null,
    comment: "",
  };

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+$/;

  const ReservationFormSchema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name must be no more than 50 characters")
      .matches(
        /^[a-zA-Z\s'-]+$/,
        "Name can only contain letters, spaces, hyphens, and apostrophes"
      ),
    email: yup
      .string()
      .trim()
      .required("Email is required")
      .max(50, "Email must be no more than 50 characters")
      .matches(emailRegex, "Please enter a valid email address"),
  });

  const handleSubmit = (values, { resetForm }) => {
    toast.success("Your message has been delivered successfully.");
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ReservationFormSchema}
      onSubmit={handleSubmit}
      validateOnBlur={false}
    >
      {({ setFieldValue, values }) => (
        <Form className={s.form}>
          {[
            { name: "name", type: "text", placeholder: "Name*" },
            { name: "email", type: "email", placeholder: "Email*" },
          ].map(({ name, type, placeholder }) => (
            <label key={name}>
              <Field
                name={name}
                type={type}
                placeholder={placeholder}
                className={s.field}
                autoFocus={name === "name"}
              />
              <ErrorMessage name={name} component="div" className={s.error} />
            </label>
          ))}

          <label className={s.datepickerWrapper}>
            <DatePicker
              selected={values.date}
              onChange={(date) => setFieldValue("date", date)}
              placeholderText="Booking date"
              dateFormat="dd.MM.yyyy"
              minDate={new Date()}
              showPopperArrow={false}
              className={s.dateInput}
              calendarClassName="react-datepicker"
              popperPlacement="bottom-start"
            />
            <ErrorMessage name="date" component="div" className={s.error} />
          </label>

          <label>
            <Field
              name="comment"
              as="textarea"
              placeholder="Comment"
              className={`${s.field} ${s.commentField}`}
            />
            <ErrorMessage name="comment" component="div" className={s.error} />
          </label>

          <button type="submit" className={s.submitbtn}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ReservationForm;
