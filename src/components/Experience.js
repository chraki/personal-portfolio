import React from "react";
import styles from '../styles/Home.module.scss';
import { Row, Col} from 'react-bootstrap';

const Experience = (props) => {
  const {scrollRef} = props;
  return (
  <Row className={styles.experienceMainDiv} ref={scrollRef}>
  <Col md={6} className={styles.experienceHeadingDiv}>
    <p>Experience :</p>
  </Col>
  <Col md={6} className={styles.experienceDetails}>
    <li className={styles.expSubDetails}>
        <p className={styles.year}>November-2021 to present,</p>
        <p className={styles.companyOrInstitute}>KC Overseas Education Pvt Ltd, Hyderabad,</p>
        <p>Role: Software Enginner</p>
        <p className={styles.education}>I am currently working as a full stack developer in KC Overseas, to develop web applications for partners, admins, staff. I have developed the pages like 
        <span style={{fontWeight: 600, marginLeft: '10px'}}>KC LEARNING, INVOICE MANAGEMENT, COMMISSION NOTE</span> projects by using React Js, Next Js, Node Js,  Express Sql Server.</p>
    </li>
    <li className={styles.expSubDetails}>
        <p className={styles.year}>May-2021 to November-2021,</p>
        <p className={styles.companyOrInstitute}>Nxt Wave Disruptive Learnings, Hyderabad,</p>
        <p className={styles.education}>I have developed my own projects like Tasty Kitchen application, Jobby App application, Wiki Search application for my knowledge in React Js using class components.</p>
    </li>
    <li className={styles.expSubDetails}>
        <p className={styles.year}>July-2018 to October-2021,</p>
        <p className={styles.companyOrInstitute}>JK Paper Pvt Ltd, Rayagada,</p>
        <p>Role: Turbine Desk Enginner</p>
        <p className={styles.education}>I have worked as a turbine desk enginner in power plant.</p>
    </li>
  </Col>
    </Row>
  );
};

export default Experience;