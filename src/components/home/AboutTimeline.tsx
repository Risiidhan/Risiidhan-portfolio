"use client"

import React, { useEffect, useState } from 'react'
import { Timeline } from '../ui/timeline'
import { timelineContent } from '../../content/timelineContent';

const AboutTimeline = () => {
    const data = timelineContent;

    const [body, setBody] = useState<any>({
        title: "A walk through my journey",
        content: <>As a Software Engineer I have demonstrated a strong ability
                to adapt quickly and learn independently, ensuring timely project completion
                and maintaining a steadfast commitment to excellence. My journey began with a
                role where I served to enhance website responsiveness and cross platform development
                and now I play a full stack role in the development of comprehensive projects. 
                <br />Here's my journey as a Software Engineer for the past years</>
    })
    return (
        <div>
            <Timeline data={data} bodyTitle={body?.title} bodyContent={body?.content} />
        </div>
    )
}

export default AboutTimeline