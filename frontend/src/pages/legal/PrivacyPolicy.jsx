import "./privacy-policy.scss";
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import arrowDownIcon from "assets/svgs/arrow-down-blue.svg"
import { useState } from 'react';

const ppData = [
    {
        id: 1,
        headingText: "1. What personal data do we gather?",
        pointOne: {
            text: "We do not collect any data that can identify you personally through our website. We only collect the data that is necessary to perform legitimate business services., although in line with most websites, some information, e.g., IP address, date and time of visit is logged. Google Analytics is used to monitor our website. The information we collect includes the following:",
            bullets: [
                "Basic information like your name, position and title, employer, and contact details (e-mail, phone and mailing address).",
                "Information on the customer relationship",
                "Information relating to your use of our technical platforms e.g., what device (PC/phone/tablet), IP address, operating system, web browser, etc.).",
                "Information of your activity on our web pages, including web browser configuration and IP address."
            ]
        },
        pointTwo: {
            text: "You are not required to place any personal information on our website, but if you do not you may find that a limited amount of information will be available to you.",
            bullets: []
        }
    },
    {
        id: 2,
        headingText: "2. Why do we gather your personal data?",
        pointOne: {
            text: "We mainly gather your personal data in the interests of the usual business practices of Valorise. We may also use your data to provide you with relevant information and to maintain our relationship with you. Your data may also be used for internal visitor analysis in order to further optimise the website.",
            bullets: []
        },
        pointTwo: {
            text: "Your personal data will only be used for the purposes mentioned and described above. Valorise gathers your personal data either; on the basis of your consent, the data is necessary for the business need, or because it is legally obliged to do so.",
            bullets: []
        }
    },
    {
        id: 3,
        headingText: "3. Who has access to your personal data?",
        pointOne: {
            text: "Your data will only be used for its intended purpose by Valorise employees only. Access to your personal data is restricted to those employees that need access to it to perform their role. Should any of the information we hold become out-of-date or need updating please contact us at data@valorise.co.uk",
            bullets: []
        },
        pointTwo: {
            text: "",
            bullets: []
        }
    },
    {
        id: 4,
        headingText: "4. How do we protect your personal data?",
        pointOne: {
            text: "Valorise takes appropriate measures to protect your personal data from unauthorised access, disclosure and improper use, and to monitor the accuracy and integrity of your personal data. These measures are regularly evaluated and updated where necessary.",
            bullets: []
        },
        pointTwo: {
            text: "",
            bullets: []
        }
    },
    {
        id: 5,
        headingText: "5. How long do we retain your personal data?",
        pointOne: {
            text: "Valorise will only retain your personal data for as long as necessary for the purposes stated in this Privacy Policy. If Valorise processes personal data on the basis of your consent, then you can always revoke this consent. For instance, personal data that you provide to us in order to show your interest in the company and to obtain further information is used by us in order to carry out your request only. For statistical purposes, Valorise may store your personal data for longer than is strictly necessary, but it will take additional measures to ensure the principle of data minimisation.",
            bullets: []
        },
        pointTwo: {
            text: "",
            bullets: []
        }
    },
    {
        id: 6,
        headingText: "6. How can you exercise your rights?",
        pointOne: {
            text: "If you have questions about the processing of your personal data by Valorise or if you want to view your personal data that Valorise has processed or have it deleted, corrected or changed, or if you want to object to the processing or invoke your right to restriction of processing, you can contact Valorise via the contact details below. In principle, Valorise will respond to your request within one month.",
            bullets: []
        },
        pointTwo: {
            text: "If you have a complaint about the processing of personal data by or on behalf of Valorise, you can submit a complaint to the Information Commissioners Office .",
            bullets: []
        }
    },
    {
        id: 7,
        headingText: "7. Links to other websites",
        pointOne: {
            text: "Our website contains links to other company websites. These websites may use different privacy rules. It is your responsibility to check this before making your personal information available to them.",
            bullets: []
        },
        pointTwo: {
            text: "",
            bullets: []
        }
    },
    {
        id: 8,
        headingText: "8. Contact",
        pointOne: {
            text: "Valorise Ltd, 1 Concept Business Centre, Kettlestring Lane, York. YO30 4XF.",
            bullets: []
        },
        pointTwo: {
            text: "Email: data@valorise.co.uk",
            bullets: []
        }
    },

]

const PrivacyPolicy = () => {
    const [accordionIndex, setAccordionIndex] = useState(null);


    const showAccordionContent = (index) => {
        setAccordionIndex(index);
        if (accordionIndex === index) {
            return setAccordionIndex(null)
        }
    }


    return (
        <div className='privacy'>
            <ClimateBanner bannerHeadingText="Privacy Policy" />
            <main className='privacy-content'>
                <article className='brand-container-2'>
                    <div className='privacy-intro'>
                        <h3 className='big-heading-3'>
                            Introduction
                        </h3>
                        <article className="font-350">
                            <p>Valorise Ltd considers the privacy and data protection of customers and visitors to be important. Valorise has therefore taken the necessary measures to protect your personal data which complies with the requirements of personal data protection legislation. All data that Valorise gathers for the provision of our services is processed in accordance with the General Data Protection Regulations (GDPR).</p>
                            <p>In our Privacy Policy we want to make sure that it is clear to you which personal data Valorise processes and what happens to that data. This Privacy Policy applies to the processing of your personal data by Valorise and provides information about our privacy policy and the measures we take with regards to the personal data we may gather when you use the Valorise website or when you contact us.</p>
                        </article>
                    </div>
                    <div className='privacy-accordions'>
                        {
                            ppData.map((ppItem, index) => (

                                <div className='accordion' key={ppItem.id}>
                                    <div className='accordion-visible'>
                                        <h4 className='big-heading-5 accordion-heading--blue'>{ppItem.headingText}</h4>
                                        <button type='button' className={`accordion-toggler ${index === accordionIndex ? "selected" : null} `} onClick={() => showAccordionContent(index)}>
                                            <img src={arrowDownIcon} alt="This is an arrown pointing down" />
                                        </button>
                                    </div>
                                    {
                                        (accordionIndex === index) ? (
                                            <div className='accordion-dropdown'>

                                                <p className="">{ppItem.pointOne.text}</p>


                                                <ul className="accordion-bullet-listing"> {
                                                    ppItem.pointOne.bullets.map((bullet, index) => (
                                                        <li key={index}>{bullet}</li>

                                                    )
                                                    )
                                                }
                                                </ul>



                                                <p>{ppItem.pointTwo.text}</p>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            ))
                        }
                    </div>
                </article>
            </main>
        </div>
    )
}

export default PrivacyPolicy