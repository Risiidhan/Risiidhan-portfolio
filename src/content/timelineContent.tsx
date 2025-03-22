import { TimelineEntry } from "@/Interfaces/HomeInterface";


export const timelineContent: TimelineEntry[] = [
    {
        title: "Bachelor’s in Software Engineering",
        subTitle: (
            <>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    London Metropolitan
                </span> (2022 – 2023)
            </>
        ),
        content: (
            <>
                Awarded First Class Honors in Software Engineering.
                Ranked as the TOP PERFORMER in the graduating batch.
            </>
        ),
        img: "/assets/bachelors.jpeg"
    },
    {
        title: "Front End Intern",
        subTitle: (
            <>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Aizenit - Sri Lanka
                </span> (March 2022 – July 2022)
            </>
        ),
        content: (
            <>
                Improved website responsiveness using Tailwind CSS and SCSS.
                Built the company website with Next.js and Strapi.
                Enabled native Android deployment using Capacitor and Android Studio.
            </>
        ),
    },
    {
        title: "Coding Hacakthon",
        subTitle: (
            <>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    ESOFT – Sri Lanka
                </span> (2022)
            </>
        ),
        content: (
            <>
                Participated in this exclusive hackathon event in Sri Lanka , 
                where we collaborated to solve a real-world problem using cutting edge technologies. 
                The experience taught us valuable lessons in teamwork, problem-solving, and time management,
                and we are proud of our accomplishments in the competition.
            </>
        ),
        img: "/assets/hackathon.jpeg"
    },
    {
        title: "Software Engineer",
        subTitle: (
            <>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    FINAP – Sri Lanka
                </span> (Feb 2023 – May 2024)
            </>
        ),
        content: (
            <>
                Developed a Hotel Management System with Angular, Bootstrap, and Azure, optimizing operations.
                Built a Banking & Finance solution using .NET, Microservices, SQL, and repository pattern.
                Enhanced security with Google reCAPTCHA and developed SSRS reports for business analysis.
            </>
        ),
    },
    {
        title: "Software Engineer",
        subTitle: (
            <>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    gsmfeed – Dubai
                </span> (June 2024 - Present)
            </>
        ),
        content: (
            <>
                Contributing to a social media platform for traders using Next.js, Tailwind, Laravel, and Framer Motion.
                Led Contacts page development, verified 200+ users via KYC, and implemented multi-language support with Redux.
                Integrated Stripe for subscriptions, managed event registrations, and enhanced landing page interactivity.
            </>
        ),
    },
];

