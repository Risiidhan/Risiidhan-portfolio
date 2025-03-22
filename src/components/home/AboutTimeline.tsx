"use client"

import React, { useEffect, useState } from 'react'
import { Timeline } from '../ui/timeline'
import { timelineContent } from '../../content/timelineContent';

const AboutTimeline = () => {
const data = timelineContent;

const [body, setBody] = useState<any>({
    title: "A walk through my journey",
    content: "Here's my journey as a Software Engineer for the past years"
})
return (
    <div>
        <Timeline data={data} bodyTitle={body?.title} bodyContent={body?.content} />
    </div>
)
}

export default AboutTimeline