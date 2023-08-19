import React from 'react';
import classes from './cv.module.css';
const Cv = () => {


    const generatePrintActon = () => {
        window.print();
    }

    return <div className={classes.Wrapper}>
        <div className={classes.PrintSection}>
        <button onClick={generatePrintActon}>
            Print
        </button>
        </div>
        <div className={classes.downloadWrapper}>
            <div className={classes.CvHeader}>
                <h1>
                    Sudhindra Pai K
                </h1>
                <div className={classes.ContactDetails}>
                    <ul>
                        <li>
                            phone: +91 7975346362
                        </li>
                        <li>
                            Email-id : sudhindraise@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
        <div className={classes.Section}>
            <div className={classes.SectionTitle}>
            Objective:
            </div>
            <div className={classes.SectionDetails}>
            Passionate and dedicated Frontend Developer with 6 years of experience crafting user-friendly and visually appealing web applications.
            Adept at translating  UI/UX designs into responsive and efficient code. 
            Seeking opportunities to contribute my skills to a dynamic development team.
            </div>
        </div>
        {/* <div className={classes.Section}>
            <div className={classes.SectionTitle}>
            Summary
            </div>
            <div className={classes.SectionDetails}>
            <ul className={classes.SummaryDetails}>
                <li>
                A Web Front End developer with 5 years of experience in development and maintenance.
                </li>
                <li>
                I am learning new things to be updated to Web technologies and best 
                practices that are suggested by web developer communities.
                </li>
                <li>
                Since I started my career with a start-up company that is e-commerce based, 
                I learned the process in the organization and given the most 
                contribution to solve the challenges that they are facing in the development process.
                </li>
            </ul>
            </div>
        </div> */}
        
        <div className={classes.Section}>
            <div className={classes.SectionTitle}>
            Technical Skills:
            </div>
            <div className={classes.SectionDetails}>
            <ul className={classes.SummaryDetails}>
                <li>
                    Languages: HTML5, CSS3, JavaScript(ES6+)
                </li>
                <li>
                    Frameworks/Libraries: React, Nextjs
                </li>
                <li>
                    Version Control: Git
                </li>
                <li>
                    Responsive Design
                </li>
                <li>
                    Cross-Browser Compatibility
                </li>
                <li>
                    Web Performance Optimization 
                </li>
                <li>
                    CSS Preprocessors: SASS
                </li>
                <li>
                    Testing: Jest, Enzyme
                </li>
                <li>
                    RESTful APIs and AJAX
                </li>
            </ul>
            </div>
        </div>
        <div className={classes.Section}>
            <div className={classes.SectionTitle}>
            Experience:
            </div>
            <div className={classes.SectionDetails}>
                <div className={[classes.ExperienceTitle, classes.CompanyDeails].join(" ")}>
                Ninjass Labs Private Limited - Senior Frontend Developer - December 4th, 2016 to 18 September 2021
                </div>
            <ul className={classes.SummaryDetails}>
                <li>
                Collaborated with designers to implement pixel-perfect UI/UX designs for web applications.
                </li>
                <li>
                Developed and maintained responsive, mobile-first websites using HTML, CSS, and JavaScript.
                </li>
                <li>
                Implemented state management using React and Redux, enhancing application performance and maintainability.
                </li>
                <li>
                Utilized RESTful APIs to fetch and display dynamic content, improving user engagement.
                </li>
                <li>
                Optimized website performance by minimizing render times and reducing HTTP requests.
                </li>
            </ul>
            </div>
            <div className={classes.SectionDetails}>
                <div className={[classes.ExperienceTitle, classes.CompanyDeails, classes.PM10].join(" ")}>
                ACL Digital - Senior Frontend Developer - 27 September 2021 to 10th February 2022
                </div>
            <ul className={classes.SummaryDetails}>
                <li>
                Developed and maintained responsive, mobile-first websites using HTML, CSS, and JavaScript.
                </li>
            </ul>
            </div>
            <div className={classes.SectionDetails}>
                <div className={[classes.ExperienceTitle, classes.CompanyDeails].join(" ")}>
                Publicis Sapient - Senior Experience Engineer - 10th February 2022 to till date
                </div>
            <ul className={classes.SummaryDetails}>
                <li>
                Led frontend development for a major project, coordinating with a cross-functional team to deliver on-time and within scope.
                </li>
            </ul>
            </div>
        </div>
        <div className={classes.Section}>
            <div className={classes.SectionTitle}>
            Education
            </div>
            <div className={classes.SectionDetails}>
            <ul className={classes.SummaryDetails}>
                <li>
                Completed B.E in Information Science and Engineering - June 2016 - from Malnad 
                College of Engineering with CGPA of 7.32
                </li>
                <li>
                Pre-University - Viveka P.U College Kota - June 2012 with 83%
                </li>
                <li>
                High School - Viveka Boys High School Kota - June 2010 with 84%
                </li>
            </ul>
            </div>
        </div>
        <div className={classes.Section}>
            <div className={classes.SectionTitle}>
            Personal Projects:
            </div>
            <div className={classes.SectionDetails}>
                <b>KingsRing.com</b>
                <br /> 
                The project involves the creation of an innovative online lottery website, offering users a 
                modern and user-friendly platform to participate in a variety of lottery games from the comfort of their homes. 
                The website will provide a seamless experience for users to easily purchase tickets, select their preferred numbers, and await draw results, eliminating the need for physical ticket purchase. With secure online payment methods and a transparent process, participants will have the opportunity to win enticing prizes by matching their chosen numbers with the official draws. The project will prioritize user safety by adhering to legal and regulatory standards, ensuring a trustworthy 
                environment for lottery enthusiasts to engage in this exciting online experience.
            </div>
            <div className={classes.SectionDetails} style={{marginTop: "40px"}}>
                <b>daydream-inteligence-service</b>
                <br /> 
                The project aims to develop an advanced call center analytics tool that empowers businesses to gain 
                valuable insights from their customer interactions. This comprehensive tool will leverage cutting-edge 
                technologies to analyze and interpret a wide range of call data, including customer sentiment, call duration, 
                issue resolution rates, and agent performance. By providing customizable dashboards and real-time reporting, 
                the call center analytics tool will enable businesses to make informed decisions, enhance customer service strategies, 
                optimize resource allocation, and ultimately improve overall operational efficiency. This project seeks to offer a 
                robust and user-friendly solution that revolutionizes how 
                businesses harness the power of their call center data to drive growth and customer satisfaction.
            </div>
            <div className={[classes.SectionDetails, classes.PM30].join(" ")}>
                <b>Truinfo.helth</b>
                <br /> 
                The online doctor consultation project endeavors to establish a secure and accessible platform that 
                enables individuals to seek medical advice and guidance from licensed healthcare professionals remotely. 
                Through this digital platform, users will be able to schedule virtual appointments, engage in real-time video 
                or text-based consultations, and receive accurate diagnoses, treatment recommendations, and prescriptions. 
                The project seeks to bridge the gap between medical practitioners and patients, ensuring convenient healthcare 
                access while maintaining the highest standards of patient confidentiality and data security. By leveraging technology 
                to connect patients with qualified doctors, the project aims to revolutionize the healthcare landscape, providing 
                timely and personalized medical care regardless of geographical constraints.
            </div>
        </div>
        <div className={classes.Section}>
            <div className={classes.SectionTitle}>
            Personal Details:
            </div>
            <div className={classes.SectionDetails}>
            <ul className={classes.SummaryDetails}>
                <li>
                    Date of birrh: 08/02/1994
                </li>
                <li>
                    Gender: Male
                </li>
                <li>
                    Nationality: Indian
                </li>
                <li>
                    Languages Known: Kannada, English, Hindi, and Konkani
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div>
}

export default Cv