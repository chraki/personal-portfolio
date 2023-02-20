import React from "react";
import styles from '../styles/Home.module.scss';
import { Col} from 'react-bootstrap';

const Projects = (props) => {
    const {scrollRef} = props;
    return (
        <div className={styles.coloredDiv} ref={scrollRef}>
            <div className={styles.eduDiv}>
                <p className={styles.eduHeading}>Projects</p>
            </div>
            <div className={styles.projectsMainDiv}>
                <div className={styles.projectDiv}>
                    <div className={styles.mobileProjectDiv}>
                      <img src='/images/kc-overseas.png' width={400} height={210} alt=''/>
                    </div>
                    <Col className={styles.projectContentDiv}>
                        <p className={styles.projectHeading}>Kc Learnings Resources:</p>
                        <p className={styles.projectDescription}>Technologies: ReactJs, NextJs, NodeJs, Express, Jest </p>
                        <p className={styles.projectDescription}>I have developed the complete learnig resources partner page to get the documents 
                            under the countries and categories. We can download and view the documents 
                            for partners. And also developed the learning resources admin page to upload 
                            the documents under countries.
                        </p>
                        <span className={styles.projectDescription}>
                          link :<a href={'https://app.coursefinder.ai/kc-learning'} target="_blank">https://app.coursefinder.ai/kc-learning</a>
                        </span>
                    </Col>
                    <Col className={styles.projectContentDiv}>
                        <p className={styles.projectHeading}>Invoice Management:</p>
                        <p className={styles.projectDescription}>Technologies: ReactJs, NextJs, NodeJs, Express, Jest </p>
                        <p className={styles.projectDescription}>I have developed the invoice management UI screens and integration for 
                            pages to generate the invoices for students using ReactJs. And also I have worked on 
                            development of some API's using NodeJs.
                        </p>
                        <span className={styles.projectDescription}>
                            link: <a href={'https://app.coursefinder.ai/invoice-management'} target="_blank">https://app.coursefinder.ai/invoice-management</a>
                        </span>
                    </Col>
                    <Col className={styles.projectContentDiv}>
                        <p className={styles.projectHeading}>Commission Note:</p>
                        <p className={styles.projectDescription}>Technologies: ReactJs, NextJs, NodeJs, Express, Jest </p>
                        <p className={styles.projectDescription}>I have developed the commission note UI screens and integration for 
                            all pages to generate the commission note using ReactJs. I have developed 
                            chat messaging section using getStream.io. And also I have worked on 
                            development of some API's using NodeJs.
                        </p>
                        <span className={styles.projectDescription}>
                            link: <a href={'https://app.coursefinder.ai/commission-note'} target="_blank">https://app.coursefinder.ai/commission-note</a>
                        </span>
                    </Col>
                </div>
                <div className={styles.imageDiv}>
                  <img src='/images/kc-overseas.png' width={500} height={250} alt=''/>
                </div>
            </div>
            <div className={styles.eduDiv}>
                <p className={styles.eduHeading}>Personal Projects</p>
            </div>
            <div className={styles.personalProjectsDiv}>
                <div className={styles.imgDiv}>
                    <img src='/images/tasty-kitchen.png' width={400} height={200} alt=''/>
                </div>
                <Col className={styles.projectDiv}>
                    <p className={styles.projectHeading}>Tasty Kitchen Application</p>
                    <p className={styles.projectDescription}>Technologies: ReactJs</p>
                    <p className={styles.projectDescription}>I have developed the Tasty Kitchen sample application UI screens and integration 
                        for all pages using ReactJs.
                    </p>
                    <span className={styles.projectDescription}>
                       link: <a href={'https://rakitastykit.ccbp.tech/'} target="_blank">https://rakitastykit.ccbp.tech/</a>
                    </span>
                </Col>
            </div>
            <div style={{paddingBottom: '40px', marginTop: '30px'}} className={styles.personalProjectsDiv}>
                <div className={styles.imgDiv}>
                    <img src='/images/jobby.png' width={400} height={200} alt=''/>
                </div>
                <Col className={styles.projectDiv}>
                    <p className={styles.projectHeading}>Jobby App Application</p>
                    <p className={styles.projectDescription}>Technologies: ReactJs</p>
                    <p className={styles.projectDescription}>I have developed the Jobby App sample application UI screens and integration 
                        for all pages using ReactJs.
                    </p>
                    <span className={styles.projectDescription}>
                        link: <a href={'https://chrakijobby.ccbp.tech/jobs'} target="_blank">https://chrakijobby.ccbp.tech/jobs</a>
                    </span>
                </Col>
            </div>
        </div>
    )
};

export default Projects;