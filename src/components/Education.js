import React from "react";
import styles from '../styles/Home.module.scss';
import { Row, Col} from 'react-bootstrap';

const Education = (props) => {
  const {scrollRef} = props;
  return (
  <Col className={styles.coloredDiv} ref={scrollRef}>
  <Row className={styles.eduDiv}>
    <p className={styles.eduHeading}>Education</p>
  </Row>
  <Col className={styles.educationsDetails}>
    <li className={styles.eduDetails}>
        <p className={styles.year}>2021,</p>
        <p className={styles.companyOrInstitute}>Nxt Wave Disruptive Learnings,</p>
        <p className={styles.education}>Industry Ready Certification in Full-stack Development Nxtwave Disruptive Technologies.</p>
    </li>
    <li className={styles.eduDetails}>
        <p className={styles.year}>2011 - 2014,</p>
        <p className={styles.companyOrInstitute}>Aditya Insitute of Technology And Mangement, Tekkali,</p>
        <p className={styles.education}>I have pursued Bachelor of Technology in Mechanical Engineering with 73.7%.</p>
    </li>
    <li className={styles.eduDetails}>
        <p className={styles.year}>2008 - 2011,</p>
        <p className={styles.companyOrInstitute}>Government Polytechnic College Mahabubnagar,</p>
        <p className={styles.education}>Completed Diploma in Mechanical Engineering with 80.20%.</p>
    </li>
    <li className={styles.eduDetails}>
        <p className={styles.year}>2008</p>
        <p className={styles.companyOrInstitute}>Viswa Santhi Public School, Polaki,</p>
        <p className={styles.education}>Completed schooling in Viswa santhi public school with 87.5%.</p>
    </li>
  </Col>
    </Col>
  );
};

export default Education;