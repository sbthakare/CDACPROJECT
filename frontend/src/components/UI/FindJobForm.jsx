import React from "react";
import "../../styles/find-job-form.css";
//import "../../styles/find-job-form.css";
import { Form, FormGroup } from "reactstrap";

const FindJobForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Enter Skill" required />
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__job-btn">Search Jobs</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindJobForm;
