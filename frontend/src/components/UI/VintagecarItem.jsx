import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import React from "react";

const JobItem = (props) => {
  const { imgUrl, title, salary, jobType, noOfPositions, postedDate, applyBeforeDate } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="job__item">
        <div className="job__img">
          <img src={imgUrl} alt={title} className="w-100" />
        </div>

        <div className="job__item-content mt-4">
          <h4 className="section__title text-center">{title}</h4>
          <h6 className="salary__info text-center mt-2">
            {salary} <span> / {jobType}</span>
          </h6>

          <div className="job__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className="d-flex align-items-center gap-1">
              <i className="ri-user-line"></i> {noOfPositions} Positions
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-calendar-line"></i> Posted: {postedDate}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-calendar-check-line"></i> Apply Before: {applyBeforeDate}
            </span>
          </div>

          <button className="w-50 job__item-btn job__btn-apply">
            <Link to={`/jobs/${title}`}>Apply Now</Link>
          </button>

          <button className="w-50 job__item-btn job__btn-details">
            <Link to={`/jobs/${title}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default JobItem;
