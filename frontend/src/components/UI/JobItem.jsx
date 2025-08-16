
import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/job-item.css";

const jobItem = (props) => {
  const { imgUrl, title, salary, jobType, postedDate, applyBeforeDate } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="job__item">
        <div className="job__img">
          <img src={imgUrl} alt={title} className="w-100" />
        </div>

        <div className="job__item-content mt-4">
          <h4 className="section__title text-center">{title}</h4>
          <h6 className="job__salary text-center mt-3">
            ₹{salary} <span>/ Year</span>
          </h6>

          <div className="job__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-briefcase-line"></i> {jobType}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-calendar-line"></i> Posted: {postedDate}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-calendar-check-line"></i> Apply before: {applyBeforeDate}
            </span>
          </div>

          <button className="w-50 job__item-btn job__btn-apply">
            <Link to={`/jobs/${title}`}>Apply</Link>
          </button>

          <button className="w-50 job__item-btn job__btn-details">
            <Link to={`/jobs/${title}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default jobItem;



