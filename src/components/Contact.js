import React from "react";
import styles from  '../styles/Home.module.scss';
import { Col, Row} from 'react-bootstrap';

const Contact = (props) => {
  const {scrollRef} = props;
  return (
    <Col className={styles.contactDiv} ref={scrollRef}>
        <div className={styles.eduDiv}>
            <p style={{fontSize: '20px'}}>Contact</p>
        </div>
        <Col>
          <Row className={styles.contactSection}>
              <img src='/images/contact-email.svg' width={80} height={70} alt='' />
              <Col className={styles.sectionSubDiv}>
                <span style={{paddingBottom: '5px'}}>Email Id</span>
                <span>rakeysh325@gmail.com</span>
              </Col>
          </Row>
          <Row className={styles.contactSection}>
              <img src='/images/contact-call.svg' width={80} height={70} alt=''/>
              <Col className={styles.sectionSubDiv}>
                <span style={{paddingBottom: '5px'}}>MobileNo.</span>
                <span>+919059869773</span>
              </Col>
          </Row>
          <Row style={{marginLeft: '5px'}} className={styles.contactSection}>
              <img src='/images/linkDin.svg' width={80} height={43}  alt=''/>
              <Col className={styles.sectionSubDiv}>
                <span style={{paddingBottom: '5px'}}>Linkdin Id</span>
                <span>linkedin.com/in/chintada-rakesh-4699679a</span>
              </Col>
          </Row>
        </Col>
    </Col>
  );
};

export default Contact;