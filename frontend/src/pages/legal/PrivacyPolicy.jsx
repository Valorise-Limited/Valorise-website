import React from 'react';
import "./privacy-policy.scss";
import ClimateBanner from 'components/climate-banner/ClimateBanner';

// const ppData = [
//     {
//         id: 1,
//         text: "We do not collect any data that can identify you personally through our website. We only collect the data that is necessary to perform legitimate business services., although in line with most websites, some information, e.g., IP address, date and time of visit is logged. Google Analytics is used to monitor our website. The information we collect includes the following:",
//         bullets: {
//             b1: "Basic information like your name, position and title, employer, and contact details (e-mail, phone and mailing address).",
//             b2: "Information on the customer relationship",
//             b3: "Information relating to your use of our technical platforms e.g., what device (PC/phone/tablet), IP address, operating system, web browser, etc.).",
//             b4: "Information of your activity on our web pages, including web browser configuration and IP address."
//         }
//     },
//     {
//         id: 2,
//         text: "We do not collect any data that can identify you personally through our website. We only collect the data that is necessary to perform legitimate business services., although in line with most websites, some information, e.g., IP address, date and time of visit is logged. Google Analytics is used to monitor our website. The information we collect includes the following:",
//         bullets: {
//             b1: "Basic information like your name, position and title, employer, and contact details (e-mail, phone and mailing address).",
//             b2: "Information on the customer relationship",
//             b3: "Information relating to your use of our technical platforms e.g., what device (PC/phone/tablet), IP address, operating system, web browser, etc.).",
//             b4: "Information of your activity on our web pages, including web browser configuration and IP address."
//         }
//     },
//     {
//         id: 3,
//         text: "We do not collect any data that can identify you personally through our website. We only collect the data that is necessary to perform legitimate business services., although in line with most websites, some information, e.g., IP address, date and time of visit is logged. Google Analytics is used to monitor our website. The information we collect includes the following:",
//         bullets: {
//             b1: "Basic information like your name, position and title, employer, and contact details (e-mail, phone and mailing address).",
//             b2: "Information on the customer relationship",
//             b3: "Information relating to your use of our technical platforms e.g., what device (PC/phone/tablet), IP address, operating system, web browser, etc.).",
//             b4: "Information of your activity on our web pages, including web browser configuration and IP address."
//         }
//     },
//     {
//         id: 4,
//         text: "We do not collect any data that can identify you personally through our website. We only collect the data that is necessary to perform legitimate business services., although in line with most websites, some information, e.g., IP address, date and time of visit is logged. Google Analytics is used to monitor our website. The information we collect includes the following:",
//         bullets: {
//             b1: "Basic information like your name, position and title, employer, and contact details (e-mail, phone and mailing address).",
//             b2: "Information on the customer relationship",
//             b3: "Information relating to your use of our technical platforms e.g., what device (PC/phone/tablet), IP address, operating system, web browser, etc.).",
//             b4: "Information of your activity on our web pages, including web browser configuration and IP address."
//         }
//     },
//     {
//         id: 5,
//         text: "We do not collect any data that can identify you personally through our website. We only collect the data that is necessary to perform legitimate business services., although in line with most websites, some information, e.g., IP address, date and time of visit is logged. Google Analytics is used to monitor our website. The information we collect includes the following:",
//         bullets: {
//             b1: "Basic information like your name, position and title, employer, and contact details (e-mail, phone and mailing address).",
//             b2: "Information on the customer relationship",
//             b3: "Information relating to your use of our technical platforms e.g., what device (PC/phone/tablet), IP address, operating system, web browser, etc.).",
//             b4: "Information of your activity on our web pages, including web browser configuration and IP address."
//         }
//     },
//     {
//         id: 6,
//         text: "We do not collect any data that can identify you personally through our website. We only collect the data that is necessary to perform legitimate business services., although in line with most websites, some information, e.g., IP address, date and time of visit is logged. Google Analytics is used to monitor our website. The information we collect includes the following:",
//         bullets: {
//             b1: "Basic information like your name, position and title, employer, and contact details (e-mail, phone and mailing address).",
//             b2: "Information on the customer relationship",
//             b3: "Information relating to your use of our technical platforms e.g., what device (PC/phone/tablet), IP address, operating system, web browser, etc.).",
//             b4: "Information of your activity on our web pages, including web browser configuration and IP address."
//         }
//     },
//     {
//         id: 7,
//         text: "We do not collect any data that can identify you personally through our website. We only collect the data that is necessary to perform legitimate business services., although in line with most websites, some information, e.g., IP address, date and time of visit is logged. Google Analytics is used to monitor our website. The information we collect includes the following:",
//         bullets: {
//             b1: "Basic information like your name, position and title, employer, and contact details (e-mail, phone and mailing address).",
//             b2: "Information on the customer relationship",
//             b3: "Information relating to your use of our technical platforms e.g., what device (PC/phone/tablet), IP address, operating system, web browser, etc.).",
//             b4: "Information of your activity on our web pages, including web browser configuration and IP address."
//         }
//     },
//     {
//         id: 8,
//         text: "We do not collect any data that can identify you personally through our website. We only collect the data that is necessary to perform legitimate business services., although in line with most websites, some information, e.g., IP address, date and time of visit is logged. Google Analytics is used to monitor our website. The information we collect includes the following:",
//         bullets: {
//             b1: "Basic information like your name, position and title, employer, and contact details (e-mail, phone and mailing address).",
//             b2: "Information on the customer relationship",
//             b3: "Information relating to your use of our technical platforms e.g., what device (PC/phone/tablet), IP address, operating system, web browser, etc.).",
//             b4: "Information of your activity on our web pages, including web browser configuration and IP address."
//         }
//     },
// ]

const PrivacyPolicy = () => {

    return (
        <div className='privacy'>
            <ClimateBanner bannerHeadingText="Privacy Policy" />
            <main className='privacy-content'>
                <div className='brand-container'>
                    <div className='privacy-intro'>
                        <h3 className='big-heading-3'>
                            Introduction
                        </h3>
                        <div>
                            <p>Valorise Ltd considers the privacy and data protection of customers and visitors to be important. Valorise has therefore taken the necessary measures to protect your personal data which complies with the requirements of personal data protection legislation. All data that Valorise gathers for the provision of our services is processed in accordance with the General Data Protection Regulations (GDPR).</p>
                            <p>In our Privacy Policy we want to make sure that it is clear to you which personal data Valorise processes and what happens to that data. This Privacy Policy applies to the processing of your personal data by Valorise and provides information about our privacy policy and the measures we take with regards to the personal data we may gather when you use the Valorise website or when you contact us.</p>
                        </div>
                    </div>
                    <div className='privacy-accordions'>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default PrivacyPolicy