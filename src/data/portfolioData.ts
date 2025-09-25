import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
    name: "Ravi Kant Singh",
    aboutHome: "A data-driven Mathematics and Computing student passionate about translating complex datasets into actionable insights using Python, SQL, and Power BI.",
    aboutPage: "A data-driven and analytical Mathematics and Computing student with a strong foundation in statistical analysis, business intelligence, and process optimization. Proficient in leveraging Python, SQL, and Power BI to translate complex datasets into actionable insights. Proven ability in stakeholder management and project coordination demonstrated through leadership roles in large-scale event management. Eager to apply quantitative skills to drive data-informed decision-making in a challenging analyst role.",

    projects: [
        {
            id: "sales-data-analytics",
            title: "End-to-End Sales Data Analytics Solution",
            description: "Developed an end-to-end analytics project by extracting, transforming, and loading historical sales data to identify key business trends and performance metrics using Python, SQL, and Power BI.",
            technologies: ["Python", "Pandas", "Matplotlib", "SQL", "Power BI"],
            sourceCode: "https://github.com/Helios-5/Sales_Data_Analysis.git",
            readme: `
# 📊 End-to-End Sales Data Analytics Solution

An end-to-end analytics project that extracts, transforms, and loads historical sales data to identify key business trends and performance metrics.

## 🚀 Key Features

-   **ETL Process**: Extracted, transformed, and loaded historical sales data to prepare it for analysis.
-   **Interactive Dashboards**: Engineered interactive dashboards and visualizations in **Power BI** to track KPIs such as revenue patterns, product performance, and regional sales penetration.
-   **In-Depth SQL Analysis**: Executed complex **SQL** queries to analyze large datasets.
-   **Actionable Insights**: Provided actionable recommendations that informed inventory management and marketing strategies.

## 🛠️ Tech Stack

-   **Data Processing**: Python (Pandas, Matplotlib)
-   **Database**: SQL
-   **Visualization**: Power BI
`
        },
        {
            id: "personal-portfolio",
            title: "Personal Portfolio Website",
            description: "Designed and deployed a fully responsive personal portfolio website using ReactJS and Tailwind CSS, hosted on GitHub Pages for seamless deployment and accessibility.",
            technologies: ["ReactJS", "Tailwind CSS", "Github Pages"],
            sourceCode: "https://github.com/Helios-5/Portfolio",
            readme: `
# 🎨 Personal Portfolio Website

A fully responsive personal portfolio website designed to showcase projects, skills, and experience.

## 🚀 Key Features

-   **Responsive Design**: Achieved 90% mobile responsiveness for a seamless experience across all devices.
-   **Performance Optimized**: Improved page load performance for a faster user experience.
-   **Seamless Deployment**: Hosted on GitHub Pages for reliable accessibility and continuous deployment.

## 🛠️ Tech Stack

-   **Frontend**: ReactJS
-   **Styling**: Tailwind CSS
-   **Deployment**: GitHub Pages
`
        },
    ],
    skills: [
        {
            category: "Data Analysis & Visualization",
            technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "SQL", "Power BI", "Tableau", "MS Excel", "ETL Processes"]
        },
        {
            category: "Programming & Databases",
            technologies: ["C/C++", "MySQL", "PostgreSQL", "MongoDB", "HTML/CSS"]
        },
        {
            category: "Front-End Development",
            technologies: ["React.js", "Tailwind CSS", "HTML", "CSS"]
        },
        {
            category: "Tools & Platforms",
            technologies: ["Git", "GitHub", "Docker", "JIRA (Familiarity)"]
        }
    ],
    workExperience: [
        {
            role: "Engifest Coordinator, Cultural Council",
            company: "Delhi Technological University",
            period: "Sept 2022 – Present",
            description: "Collaborated with university leadership, 20+ cultural societies, and corporate sponsors to organize 10+ campus-wide events for over 10,000 attendees. Developed targeted marketing strategies and presented value propositions to secure prime sponsorships from OnePlus, Google Gemini, and Intel. Led fundraising efforts that generated over ₹1.2 Crore in monetary funding for Engifest 2025.",
            technologies: ["Stakeholder Management", "Communication", "Fundraising", "Marketing"]
        },
        {
            role: "Logistics & Security Lead, YUVAAN Council",
            company: "Delhi Technological University",
            period: "Sept 2022 – Present",
            description: "Devised and executed a comprehensive security and logistics roadmap for 30+ large-scale events, ensuring zero safety incidents and seamless operations. Managed logistics for 50+ visiting artists by coordinating with 25+ internal and external stakeholders.",
            technologies: ["Risk Management", "Project Coordination", "Logistics Planning"]
        },
        {
            role: "Class Representative, Mathematics and Computing",
            company: "Delhi Technological University",
            period: "Aug 2023 – Jul 2024",
            description: "Served as the primary liaison between faculty and 80+ students, effectively communicating academic requirements and consolidating student feedback to improve course structure.",
            technologies: ["Communication", "Feedback Analysis", "Liaison"]
        }
    ],
    education: [
        {
            title: "Bachelor of Technology",
            degree: "B.TECH in Mathematics and Computing",
            institution: "Delhi Technological University",
            period: "2022-2026",
            coursework: [],
            location: "Delhi, India",
            logo: "assets/DTU.png"
        },
        {
            title: "Senior Secondary School",
            degree: "CBSE Class XII",
            institution: "Kendriya Vidyalaya AGCR",
            period: "2021",
            coursework: [],
            location: "Delhi, India",
            logo: "assets/KV.png"
        }
    ],
    resumeUrl: "/resume.pdf",
    socials: {
        github: "https://github.com/Helios-5",
        linkedin: "https://www.linkedin.com/in/ravi-kant-singh-84bab4259/"
    }
};