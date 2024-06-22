import { useState } from "react";

const useFormValidate = (formData) => {
  const [values, setValues] = useState(formData);
  const [errors, setErrors] = useState({});
  const [submittedValues, setSubmittedValues] = useState(null);

  const validate = (values, isGuestSelected) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Username is required";
    }
    if (isGuestSelected && !values.guestName) {
      errors.guestName = "Guest name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    if (!values.age) {
      errors.age = "Age is required";
    } else if (values.age <= 0) {
      errors.age = "Age must be a positive number";
    }
    return errors;
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event, isGuestSelected) => {
    event.preventDefault();
    const validationErrors = validate(values, isGuestSelected);
    setErrors(validationErrors);
    console.log(Object.keys(validationErrors));
    console.log(Object.keys(values));

    if (
      Object.keys(validationErrors).length === 0 &&
      Object.keys(values).length !== 0
    ) {
      console.log(values);
      setSubmittedValues(values);
    }
  };
  return {
    values,
    errors,
    submittedValues,
    handleChange,
    handleSubmit,
  };
};

export default useFormValidate;
