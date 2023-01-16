import React from 'react'
import SubscribeBanner from 'pages/home/components/subscription-banner/SubscribeBanner';
import teamBuildingIllustration from "assets/svgs/team-building-illustrator.svg";
import "./coming-soon.scss"

const ComingSoon = () => {
    return (
        <article className='brand-container coming-soon-block'>

            <div className='coming-soon'>
                <span>Coming Soon</span>
                <span>
                    <img src={teamBuildingIllustration} alt="team building illustration" />
                </span>
            </div>

            <SubscribeBanner className="subscribe-banner--transparent" headingText="Our team is working hard to build this page." />
        </article>
    )
}

export default ComingSoon