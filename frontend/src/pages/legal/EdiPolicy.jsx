import React from 'react'
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import "./edi-policy.scss";

const EdiPolicy = () => {
    return (
        <div>
            <ClimateBanner bannerHeadingText="Equality, Diversity and Inclusion Policy" />

            <article className='edi-policy'>
                <section className="edi-policy__writeup">
                <div className='brand-container'>
                    <p className='edipolicy__text justify'>
                        Valorise Limited (Valorise) is committed to encouraging equality, diversity and inclusion among our workforce, and eliminating unlawful discrimination.
                    </p>

                    <p className='edipolicy__text justify'>
                        The aim is for our workforce to be truly representative of all sections of society and our customers, and for each employee to feel respected and able to give their best.
                    </p>

                    <p className='edipolicy__text'>
                        The organisation - in providing goods and/or services and/or facilities - is also committed against unlawful discrimination of customers or the public.
                    </p>

                    <p className='edipolicy__text'>
                        The policy’s purpose is to:
                    </p>

                    <ul className='edipolicy-list'>
                        <li className='edipolicy-list-item'>provide equality, fairness and respect for all in our employment, whether temporary, part-time or full-time</li>
                        <li className='edipolicy-list-item'>not unlawfully discriminate because of the Equality Act 2010 protected characteristics of age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race (including colour, nationality, and ethnic or national origin), religion or belief, sex and sexual orientation</li>
                        <li className='edipolicy-list-item'>oppose and avoid all forms of unlawful discrimination. This includes in pay and benefits, terms and conditions of employment, dealing with grievances and discipline, dismissal, redundancy, leave for parents, requests for flexible working, and selection for employment, promotion, training or other developmental opportunities</li>
                    </ul>
                    <br/>
                    <p className='edipolicy__text'>
                        The organisation commits to:
                    </p>

                    <ul className='edipolicy-list'>
                        <li className='edipolicy-list-item'>Encourage equality, diversity and inclusion in the workplace as they are good practice and make business sense</li>
                        <li className='edipolicy-list-item justify-text'>
                            <p>
                            Create a working environment free of bullying, harassment, victimisation and unlawful discrimination, promoting dignity and respect for all, and where individual differences and the contributions of all staff are recognised and valued.
                            </p>
                            <p>
                            This commitment includes training managers and all other employees about their rights and responsibilities under the equality, diversity and inclusion policy. Responsibilities include staff conducting themselves to help the organisation provide equal opportunities in employment, and prevent bullying, harassment, victimisation and unlawful discrimination.
                            </p>
                            <p>
                            All staff should understand they, as well as their employer, can be held liable for acts of bullying, harassment, victimisation and unlawful discrimination, in the course of their employment, against fellow employees, customers, suppliers and the public
                            </p>
                        </li>
                        <li className='edipolicy-list-item'>
                            <p>
                                Take seriously complaints of bullying, harassment, victimisation and unlawful discrimination by fellow employees, customers, suppliers, visitors, the public and any others in the course of the organisation’s work activities.
                            </p>
                            <p>
                                Such acts will be dealt with as misconduct under the organisation’s grievance and/or disciplinary procedures, and appropriate action will be taken. Particularly serious complaints could amount to gross misconduct and lead to dismissal without notice.
                            </p>
                            <p>
                                Further, sexual harassment may amount to both an employment rights matter and a criminal matter, such as in sexual assault allegations. In addition, harassment under the Protection from Harassment Act 1997 – which is not limited to circumstances where harassment relates to a protected characteristic – is a criminal offence.
                            </p>
                        </li>
                        <li className='edipolicy-list-item'>
                        Make opportunities for training, development and progress available to all staff, who will be helped and encouraged to develop their full potential, so their talents and resources can be fully utilised to maximise the efficiency of the organisation.
                        </li >
                        <li className='edipolicy-list-item'>
                        Decisions concerning staff being based on merit (apart from in any necessary and limited exemptions and exceptions allowed under the Equality Act).
                        </li>
                        <li className='edipolicy-list-item'>
                        Review employment practices and procedures when necessary to ensure fairness, and also update them and the policy to take account of changes in the law.
                        </li>
                        <li className='edipolicy-list-item'>
                            <p>
                                Monitor the make-up of the workforce regarding information such as age, sex, ethnic background, sexual orientation, religion or belief, and disability in encouraging equality, diversity and inclusion, and in meeting the aims and commitments set out in the equality, diversity and inclusion policy.
                            </p>
                            <p>
                                Monitoring will also include assessing how the equality, diversity and inclusion policy, and any supporting action plan, are working in practice, reviewing them annually, and considering and taking action to address any issues.
                            </p>
                        </li>
                    </ul>
                    <br/>
                    <p className='edipolicy__text'>
                        The equality, diversity and inclusion policy is fully supported by senior management and has been agreed with trade unions and/or employee representatives.
                    </p>

                    <p className='edipolicy__text'>
                        Details of the organisation’s grievance and disciplinary policies and procedures can be found on the company intranet. This includes with whom an employee should raise a grievance – usually their line manager.
                    </p>
  
                    <p className='edipolicy__text'>
                        Use of the organisation’s grievance and/or disciplinary procedures does not affect an employee’s right to make a claim to an employment tribunal within three months of the alleged discrimination.
                    </p>
                </div>
                </section>
           
            </article>
        </div>
    )
}

export default EdiPolicy