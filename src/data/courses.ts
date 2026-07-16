import { unsplash } from "@/lib/unsplash";

export type CourseDetail = {
  overviewHeadline: string;
  overviewParagraphs: string[];
  eligibility: string[];
  projectsHeadline: string;
  projects: { n: string; title: string }[];
  curriculumSubtitle: string;
  modules: { title: string; meta: string; topics: string[] }[];
  tools: string[];
  careerIntro: string;
  roles: string[];
  benefits: { title: string; body: string }[];
  nextStep: string;
};

export type Course = {
  slug: string;
  brochureUrl?: string;
  brochureSizeMB?: number;
  cat: string;
  title: string;
  days: number;
  duration: string;
  lectures: string;
  projects: string;
  mode: string;
  tag: string;
  img: string;
  blurb: string;
  detail?: CourseDetail;
};

export const COURSES: Course[] = [
  {
    slug: "business-analytics-mis-reporting",
    brochureUrl: "/New Courses/New Courses/Business Analytics and MIS Reporting with Excel, SQL and Power BI.pdf",
    brochureSizeMB: 11.58,
    cat: "AI & Tech for Non-Tech Careers",
    title: "Business Analytics and MIS Reporting with Excel, SQL and Power BI",
    days: 90,
    duration: "90 Days",
    lectures: "50+ Lectures",
    projects: "6 Projects",
    mode: "Classroom",
    tag: "New",
    img: '/images/courses/Business-Analytics.webp',
    blurb:
      "Build practical business analytics skills with Excel, SQL and Power BI through real projects and guided learning.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "Every company runs on reports. Sales reports, finance reports, HR reports, operations dashboards, marketing performance, customer data, and management summaries are used every day to make decisions. This course by Eduden is designed for students from MBA, BBA, Commerce, Economics, Arts, and other non computer backgrounds who want to build strong reporting and analytics skills. You will learn Excel, SQL, and Power BI in a practical classroom environment and build dashboards that can be shown in interviews, internships, and placements.",
        "This course focuses on practical analytics skills that are useful across industries. Students will learn how to clean data, create reports, write basic SQL queries, build dashboards, and present insights clearly. The goal is not to make students heavy programmers. The goal is to help them become confident with data, reporting, and business decision support. By the end of the course, students will have dashboard projects, SQL practice files, and reporting samples that can add real value to their CV.",
        "Assignments: Students will complete assignments on Excel formulas, data cleaning, pivot tables, SQL queries, dashboard building, and report writing.",
        "Quizzes: Short quizzes will test understanding of business metrics, Excel logic, SQL basics, dashboard elements, and report interpretation.",
        "Live Sessions: Live classroom sessions will include tool demonstrations, guided practice, doubt clearing, dashboard reviews, and project discussions.",
        "How It Helps in CV Building: Students can add dashboard projects, SQL query work, Excel reports, and final capstone work to their CV. This gives recruiters proof that the student can handle business data and not just speak about analytics theoretically.",
      ],
      eligibility: [
        "Students from Engineering, BBA, B.Com, Economics, Commerce, Arts, Social Science, and related backgrounds can join this course.",
        "No coding background is required.",
        "Basic computer knowledge and interest in working with data will be helpful.",
      ],
      projectsHeadline: "6 projects you'll build.",
      projects: [
        { n: "01", title: "Sales performance dashboard" },
        { n: "02", title: "HR attendance and employee report" },
        { n: "03", title: "Customer data analysis using SQL" },
        { n: "04", title: "Finance summary dashboard" },
        { n: "05", title: "Marketing campaign reporting sheet" },
        { n: "06", title: "Final MIS dashboard with written business insights" },
      ],
      curriculumSubtitle:
        "7 modules · 50+ lectures · 6 projects · Mentor-verified assignments & quizzes",
      modules: [
        {
          title: "Introduction to Business Analytics and MIS",
          meta: "",
          topics: ["Students learn how companies use data and reports in daily decision making."],
        },
        {
          title: "Excel for Data Cleaning and Reporting",
          meta: "",
          topics: [
            "Students work with formulas, sorting, filtering, pivot tables, charts, conditional formatting, and report layouts.",
          ],
        },
        {
          title: "SQL for Business Data",
          meta: "",
          topics: [
            "Students learn SELECT, WHERE, GROUP BY, ORDER BY, joins, and simple business query writing.",
          ],
        },
        {
          title: "Power BI Dashboarding",
          meta: "",
          topics: ["Students learn data import, charts, slicers, cards, filters, and dashboard design."],
        },
        {
          title: "Business Metrics and KPI Reporting",
          meta: "",
          topics: ["Students learn how to track sales, finance, HR, marketing, and operations metrics."],
        },
        {
          title: "Data Storytelling and Presentation",
          meta: "",
          topics: ["Students learn how to explain dashboards and write short management summaries."],
        },
        {
          title: "Final Capstone Project",
          meta: "",
          topics: ["Students prepare a full MIS dashboard and present business insights."],
        },
      ],
      tools: [
        "Excel",
        "Google Sheets",
        "SQL",
        "Power BI",
        "Canva or PowerPoint",
        "Basic AI tools for report explanation",
      ],
      careerIntro:
        "This course helps students apply for roles where reporting, data handling, and dashboard skills are required.",
      roles: [
        "MIS Executive",
        "Business Analyst Trainee",
        "Data Analyst Intern",
        "Reporting Analyst",
        "Operations Analyst",
        "Marketing Analyst",
        "HR Analytics Assistant",
        "Power BI Dashboard Assistant",
        "Research Analyst",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "Students who complete the assignments and final project will receive an Eduden certificate of completion.",
        },
        {
          title: "Practical Project Experience",
          body: "Students will work on reports and dashboards similar to what companies use in real roles.",
        },
        {
          title: "Portfolio Development",
          body: "Students will build a portfolio with Excel files, SQL queries, Power BI dashboards, and project summaries.",
        },
        {
          title: "Ready for Interviews",
          body: "Students will be able to explain data projects confidently during internship and placement interviews.",
        },
      ],
      nextStep:
        "AI for Business Strategy, Advanced Business Analytics, Data Science with Python, or Product Management.",
    },
  },
  {
    slug: "ai-strategy",
    brochureUrl: "/New Courses/New Courses/AI for Business Strategy and Decision Making.pdf",
    brochureSizeMB: 11.55,
    cat: "AI & Tech for Non-Tech Careers",
    title: "AI for Business Strategy and Decision Making",
    days: 60,
    duration: "60 Days",
    lectures: "40+ Lectures",
    projects: "5 Projects",
    mode: "Hybrid",
    tag: "New",
    img: "/images/courses/AI for Business Strategy and Decision Making.webp",
    blurb:
      "Use AI for market research, competitor analysis, campaign planning and faster business decisions.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "AI is not only for coders. Today, business teams use AI for market research, competitor analysis, customer understanding, sales planning, HR support, financial summaries, and faster decision making. This course by Eduden is built for MBA, BBA, Commerce, Economics, and management students who want to understand how AI is used in real business work. The course focuses on practical use, clear thinking, and business outcomes.",
        "This course teaches students how to use AI tools in business workflows. Students will learn prompt writing, business research, customer analysis, campaign planning, report creation, and decision support. The course is designed to help students become more useful in modern workplaces where AI tools are slowly becoming part of daily operations. Students will learn how to use AI responsibly and how to turn AI output into practical business documents.",
        "Assignments: Students will complete assignments on business prompts, competitor analysis, customer personas, AI supported reports, and department based use cases.",
        "Quizzes: Short quizzes will test AI concepts, prompt quality, business use cases, ethical usage, and decision making logic.",
        "Live Sessions: Live sessions will include tool demonstrations, case discussions, business prompt practice, and project feedback.",
        "How It Helps in CV Building: Students can show AI assisted business research, competitor analysis, prompt libraries, and strategy reports in their CV or portfolio. This gives them an advantage in interviews for business and management roles.",
      ],
      eligibility: [
        "MBA, BBA, B.Com, Economics, Commerce, entrepreneurship, and management students can join this course.",
        "No programming background is required.",
        "Students should have interest in business, research, strategy, or decision making.",
      ],
      projectsHeadline: "5 projects you'll build.",
      projects: [
        { n: "01", title: "AI supported competitor analysis" },
        { n: "02", title: "Market research report using AI tools" },
        { n: "03", title: "Customer persona and campaign idea project" },
        { n: "04", title: "Department wise AI use case plan" },
        { n: "05", title: "Final business strategy project using AI" },
      ],
      curriculumSubtitle:
        "7 modules · 40+ lectures · 5 projects · Mentor-verified assignments & quizzes",
      modules: [
        {
          title: "Introduction to AI in Business",
          meta: "",
          topics: [
            "Students learn what AI is and how companies use it in marketing, finance, HR, sales, operations, and research.",
          ],
        },
        {
          title: "Prompt Engineering for Business Work",
          meta: "",
          topics: [
            "Students learn how to write prompts for research, emails, reports, presentations, and business planning.",
          ],
        },
        {
          title: "AI for Market and Competitor Research",
          meta: "",
          topics: [
            "Students learn how to study markets, compare competitors, and prepare structured research notes.",
          ],
        },
        {
          title: "AI for Customer and Sales Strategy",
          meta: "",
          topics: [
            "Students learn customer persona creation, customer pain point analysis, sales pitch support, and lead planning.",
          ],
        },
        {
          title: "AI for Internal Business Functions",
          meta: "",
          topics: [
            "Students learn how AI can support HR, finance, operations, admin, and customer service tasks.",
          ],
        },
        {
          title: "AI Ethics and Responsible Use",
          meta: "",
          topics: ["Students learn accuracy checking, privacy awareness, bias, and responsible AI usage in business."],
        },
        {
          title: "Final Capstone Project",
          meta: "",
          topics: ["Students create an AI supported business improvement plan for a company or department."],
        },
      ],
      tools: [
        "ChatGPT",
        "Gemini",
        "Claude",
        "Microsoft Copilot",
        "Google Trends",
        "Excel",
        "Canva",
        "PowerPoint",
        "Notion AI",
      ],
      careerIntro:
        "This course helps students prepare for business roles where AI awareness and practical tool usage are becoming valuable.",
      roles: [
        "Business Analyst Trainee",
        "Management Trainee",
        "AI Business Support Executive",
        "Marketing Analyst",
        "Operations Analyst",
        "Research Assistant",
        "Sales Strategy Assistant",
        "Business Development Executive",
        "Startup Operations Associate",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "Students will receive an Eduden certificate after completing assignments and the final project.",
        },
        {
          title: "Practical Business Use Cases",
          body: "Students will learn how to apply AI to real business problems instead of only learning definitions.",
        },
        {
          title: "Portfolio Development",
          body: "Students will build a portfolio with business reports, AI prompts, research documents, and presentations.",
        },
        {
          title: "Ready for Interviews",
          body: "Students will be able to explain how AI can improve business workflows, reporting, customer analysis, and decision making.",
        },
      ],
      nextStep:
        "Business Analytics, Product Management with AI, Digital Business Operations, or Advanced Data Analytics.",
    },
  },
  {
    slug: "product-mgmt",
    brochureUrl: "/New Courses/New Courses/Product Management and Digital Business with AI.pdf",
    brochureSizeMB: 9.59,
    cat: "AI & Tech for Non-Tech Careers",
    title: "Product Management and Digital Business with AI",
    days: 90,
    duration: "90 Days",
    lectures: "50+ Lectures",
    projects: "5 Projects",
    mode: "Hybrid",
    tag: "New",
    img: "/images/courses/Product Management and Digital Business with AI.jpg",
    blurb:
      "Work in tech without becoming a developer user research, PRDs, wireframes and product metrics.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "Every app, website, SaaS platform, and digital service needs people who understand users, business goals, product planning, and communication with technology teams. This course by Eduden is designed for management students, business students, entrepreneurs, and non technical learners who want to work in technology companies without becoming full time developers. Students will learn how digital products are planned, researched, documented, tested, and improved.",
        "This course teaches students how to think like product managers. Students will learn user research, competitor analysis, product requirement writing, feature planning, wireframing basics, product metrics, and AI supported documentation. The course helps students build a strong business technology portfolio. By the end, students will have a complete product plan that can be used during interviews, internships, or startup pitches.",
        "Assignments: Students will complete assignments on user personas, competitor analysis, product requirement documents, user stories, feature planning, and product metrics.",
        "Quizzes: Quizzes will check understanding of product concepts, customer research, user journeys, product metrics, and business strategy.",
        "Live Sessions: Live sessions will include product case studies, group discussions, wireframe reviews, and project walkthroughs.",
        "How It Helps in CV Building: Students can add a complete product case study to their CV. This helps them stand out for internships and jobs where companies want people who understand both business and digital products.",
      ],
      eligibility: [
        "MBA, BBA, Commerce, entrepreneurship, business, and non technical students can join this course.",
        "No coding background is required.",
        "Interest in startups, digital products, user experience, or business strategy will be helpful.",
      ],
      projectsHeadline: "5 projects you'll build.",
      projects: [
        { n: "01", title: "Competitor analysis for a digital product" },
        { n: "02", title: "User persona and customer journey map" },
        { n: "03", title: "Product requirement document" },
        { n: "04", title: "Wireframe and feature planning project" },
        { n: "05", title: "Final capstone: Complete product plan for an app or platform" },
      ],
      curriculumSubtitle:
        "7 modules · 50+ lectures · 5 projects · Mentor-verified assignments & quizzes",
      modules: [
        {
          title: "Introduction to Product Management",
          meta: "",
          topics: [
            "Students learn what product managers do and how product roles connect business, design, and technology.",
          ],
        },
        {
          title: "User and Market Research",
          meta: "",
          topics: [
            "Students learn customer interviews, surveys, competitor study, user personas, and problem statements.",
          ],
        },
        {
          title: "Product Planning and Documentation",
          meta: "",
          topics: [
            "Students learn product requirement documents, user stories, feature lists, and product roadmaps.",
          ],
        },
        {
          title: "UX Basics for Product Managers",
          meta: "",
          topics: [
            "Students learn user journeys, wireframes, usability basics, and how to work with designers.",
          ],
        },
        {
          title: "AI for Product Work",
          meta: "",
          topics: [
            "Students learn how AI can support research, feature ideas, documentation, feedback summaries, and presentation writing.",
          ],
        },
        {
          title: "Product Metrics and Growth Thinking",
          meta: "",
          topics: [
            "Students learn basic product metrics such as activation, retention, engagement, conversion, and user feedback.",
          ],
        },
        {
          title: "Final Capstone Project",
          meta: "",
          topics: ["Students create a complete product plan for a mobile app, website, or SaaS product."],
        },
      ],
      tools: [
        "ChatGPT",
        "Notion",
        "Figma basics",
        "Google Forms",
        "Miro or FigJam basics",
        "Excel or Google Sheets",
        "Canva",
        "PowerPoint",
      ],
      careerIntro:
        "This course helps business students enter digital product and technology aligned roles.",
      roles: [
        "Product Management Trainee",
        "Business Analyst",
        "Product Analyst Trainee",
        "Project Coordinator",
        "Digital Product Executive",
        "Customer Success Associate",
        "Startup Operations Associate",
        "Business Strategy Associate",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "Students receive an Eduden certificate after completing assignments and the capstone project.",
        },
        {
          title: "Practical Product Experience",
          body: "Students work on documents and deliverables used in startups and product teams.",
        },
        {
          title: "Portfolio Development",
          body: "Students build a product portfolio with PRDs, user journeys, wireframes, competitor analysis, and launch plans.",
        },
        {
          title: "Ready for Interviews",
          body: "Students learn how to explain product thinking, user problems, business value, and feature decisions.",
        },
      ],
      nextStep:
        "UI UX Design, Business Analytics, AI for Business Strategy, or Full Stack Product Understanding.",
    },
  },
  {
    slug: "geoai",
    brochureUrl: "/New Courses/New Courses/GeoAI, GIS and Location Intelligence.pdf",
    brochureSizeMB: 11.66,
    cat: "AI & Tech for Non-Tech Careers",
    title: "GeoAI, GIS and Location Intelligence",
    days: 90,
    duration: "90 Days",
    lectures: "50+ Lectures",
    projects: "5 Projects",
    mode: "Hybrid",
    tag: "New",
    img: unsplash("1451187580459-43490279c0fa"),
    blurb:
      "QGIS, satellite imagery, spatial analysis and location projects for Geography and Environment students.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "Geography is no longer only about maps in books. Today, maps, satellite images, location data, and spatial analysis are used in urban planning, disaster management, environment studies, logistics, public policy, and business location decisions. This course by Eduden is designed for Geography, Geology, Environmental Science, Urban Planning, and related students who want to build modern career skills using GIS and location intelligence.",
        "This course teaches students how to work with GIS tools, map layers, spatial data, satellite imagery basics, and location based analysis. Students will learn how to prepare maps, analyze regions, study land use, and create reports that can support real projects. The course gives Geography students a strong career direction by connecting their subject with data and technology.",
        "Assignments: Students will complete assignments on map creation, layer styling, spatial queries, remote sensing interpretation, and location analysis.",
        "Quizzes: Quizzes will test understanding of GIS concepts, map layers, coordinate systems, spatial data types, and analysis methods.",
        "Live Sessions: Live sessions will include QGIS demonstrations, map creation labs, dataset practice, and project feedback.",
        "How It Helps in CV Building: Students can add GIS maps, QGIS projects, spatial reports, and location analysis projects to their CV. This gives them a practical edge over students with only theoretical geography knowledge.",
      ],
      eligibility: [
        "Students from Geography, Geology, Environmental Science, Urban Planning, Disaster Management, Civil Engineering, and related fields can join.",
        "No coding background is required.",
        "Interest in maps, environment, cities, location data, and spatial problems will be helpful.",
      ],
      projectsHeadline: "5 projects you'll build.",
      projects: [
        { n: "01", title: "Basic GIS map creation" },
        { n: "02", title: "Population or facility mapping project" },
        { n: "03", title: "Land use interpretation project" },
        { n: "04", title: "Flood risk or site suitability analysis" },
        { n: "05", title: "Final capstone: Location intelligence project with report" },
      ],
      curriculumSubtitle:
        "6 modules · 50+ lectures · 5 projects · Mentor-verified assignments & quizzes",
      modules: [
        {
          title: "GIS Foundations",
          meta: "",
          topics: [
            "Students learn what GIS is, how maps are created, and how spatial data is used for decision making.",
          ],
        },
        {
          title: "QGIS Practical Training",
          meta: "",
          topics: [
            "Students learn how to use QGIS, create layers, work with shapefiles, style maps, and label features.",
          ],
        },
        {
          title: "Spatial Data Analysis",
          meta: "",
          topics: [
            "Students learn buffer analysis, overlay analysis, distance analysis, proximity analysis, and basic spatial patterns.",
          ],
        },
        {
          title: "Remote Sensing Basics",
          meta: "",
          topics: [
            "Students learn satellite imagery, land use and land cover, vegetation index basics, and change detection.",
          ],
        },
        {
          title: "Location Intelligence",
          meta: "",
          topics: [
            "Students learn how location data is used in business, city planning, transport, disaster risk, and environment projects.",
          ],
        },
        {
          title: "Final Capstone Project",
          meta: "",
          topics: [
            "Students complete a practical location based project such as flood risk mapping, urban growth study, land use mapping, or site suitability analysis.",
          ],
        },
      ],
      tools: [
        "QGIS",
        "Google Earth",
        "Google Earth Engine basics",
        "Excel",
        "Public geospatial datasets",
        "Satellite imagery sources",
        "Canva or PowerPoint",
        "AI tools for report writing support",
      ],
      careerIntro:
        "This course gives Geography and Environmental Science students a modern career path in GIS and spatial data.",
      roles: [
        "GIS Analyst Trainee",
        "Spatial Data Assistant",
        "Urban Planning Assistant",
        "Environmental Data Assistant",
        "Disaster Mapping Assistant",
        "Location Intelligence Assistant",
        "Research Assistant",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "Students receive an Eduden certificate after completing assignments and the final project.",
        },
        {
          title: "Practical Map Based Projects",
          body: "Students work on real map based tasks that connect directly with their subject area.",
        },
        {
          title: "Portfolio Development",
          body: "Students build a GIS portfolio with maps, project files, spatial reports, and final presentation material.",
        },
        {
          title: "Ready for Interviews",
          body: "Students learn how to explain GIS projects, spatial analysis, map outputs, and location based findings.",
        },
      ],
      nextStep:
        "Advanced GIS, Remote Sensing, Environmental Data Analytics, Urban Planning Analytics, or Data Analytics.",
    },
  },
  {
    slug: "cyber-grc",
    brochureUrl: "/New Courses/New Courses/Cyber GRC, Risk and Data Privacy.pdf",
    brochureSizeMB: 12.98,
    cat: "AI & Tech for Non-Tech Careers",
    title: "Cyber GRC, Risk and Data Privacy",
    days: 90,
    duration: "90 Days",
    lectures: "45+ Lectures",
    projects: "5 Projects",
    mode: "Hybrid",
    tag: "New",
    img: "/images/courses/Cyber GRC, Risk and data privacy.jpg",
    blurb:
      "Enter cybersecurity through governance, risk and compliance no hacking or coding required.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "Cybersecurity is not only about hacking. Companies also need people who can manage risk, write policies, understand compliance, protect data, support audits, and help teams follow safe digital practices. This course by Eduden is designed for management, commerce, law, audit, finance, and non technical students who want to enter cybersecurity through governance, risk, compliance, and privacy.",
        "This course teaches cybersecurity from a business and compliance point of view. Students will learn how companies identify cyber risks, prepare policies, manage vendor risks, respond to incidents, and protect sensitive data. This is a practical cybersecurity path for students who do not want to start with penetration testing or programming. It focuses on workplace documentation, process thinking, and business responsibility.",
        "Assignments: Students will complete assignments on risk registers, security policies, compliance checklists, vendor assessments, incident response documents, and privacy templates.",
        "Quizzes: Quizzes will test understanding of cyber risk, governance terms, policy writing, compliance basics, and incident response.",
        "Live Sessions: Live sessions will include case studies, documentation practice, mock audit exercises, and GRC project reviews.",
        "How It Helps in CV Building: Students can show risk registers, policy samples, compliance templates, and incident response documents as portfolio work. This is useful for entry level roles in risk, audit, compliance, and information security teams.",
      ],
      eligibility: [
        "MBA, BBA, B.Com, Law, Finance, Audit, Commerce, and Management students can join this course.",
        "No coding background is required.",
        "Good communication, documentation skills, and interest in business risk will be helpful.",
      ],
      projectsHeadline: "5 projects you'll build.",
      projects: [
        { n: "01", title: "Cyber risk register for a mock company" },
        { n: "02", title: "Security policy writing project" },
        { n: "03", title: "Vendor risk checklist" },
        { n: "04", title: "Incident response documentation project" },
        { n: "05", title: "Final capstone: Complete GRC pack for a business" },
      ],
      curriculumSubtitle:
        "7 modules · 45+ lectures · 5 projects · Mentor-verified assignments & quizzes",
      modules: [
        {
          title: "Cybersecurity Foundations for Business",
          meta: "",
          topics: ["Students learn what cybersecurity means and how cyber attacks affect organizations."],
        },
        {
          title: "Governance and Security Policies",
          meta: "",
          topics: [
            "Students learn how to prepare policies for password use, device use, access control, email safety, and data handling.",
          ],
        },
        {
          title: "Risk Management",
          meta: "",
          topics: [
            "Students learn risk identification, risk rating, likelihood, impact, risk registers, and risk treatment plans.",
          ],
        },
        {
          title: "Compliance and Audit Basics",
          meta: "",
          topics: [
            "Students learn the basics of ISO 27001, privacy principles, evidence collection, and audit preparation.",
          ],
        },
        {
          title: "Vendor and Third Party Risk",
          meta: "",
          topics: [
            "Students learn how companies check vendor security, cloud risks, and third party data handling.",
          ],
        },
        {
          title: "Incident Response Documentation",
          meta: "",
          topics: [
            "Students learn incident reporting, escalation matrix creation, timelines, and post incident review.",
          ],
        },
        {
          title: "Final Capstone Project",
          meta: "",
          topics: ["Students prepare a complete GRC documentation pack for a mock organization."],
        },
      ],
      tools: [
        "Risk register templates",
        "Policy templates",
        "Excel or Google Sheets",
        "ISO 27001 overview resources",
        "Incident response templates",
        "Privacy checklist templates",
        "AI tools for documentation support",
      ],
      careerIntro:
        "This course is suitable for students who want cybersecurity careers without starting from coding or hacking.",
      roles: [
        "GRC Analyst Trainee",
        "Cyber Risk Associate",
        "Compliance Assistant",
        "Audit Support Executive",
        "Privacy Operations Assistant",
        "Vendor Risk Analyst",
        "Information Security Coordinator",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "Students receive an Eduden certificate after completing assignments and the final project.",
        },
        {
          title: "Practical Documentation Experience",
          body: "Students learn the kind of documents and checklists used in real compliance and risk teams.",
        },
        {
          title: "Portfolio Development",
          body: "Students build a GRC portfolio with risk registers, policies, vendor checklists, and incident templates.",
        },
        {
          title: "Ready for Interviews",
          body: "Students learn how to explain cyber risk, compliance basics, data privacy, policy work, and business impact.",
        },
      ],
      nextStep:
        "ISO 27001, Data Privacy, SOC Analyst Basics, Cybersecurity Awareness Management, or Digital Forensics Foundations.",
    },
  },
  {
    slug: "policy-analytics",
    brochureUrl: "/New Courses/New Courses/Economics, Policy and Development Analytics with AI.pdf",
    brochureSizeMB: 14.16,
    cat: "AI & Tech for Non-Tech Careers",
    title: "Economics, Policy and Development Analytics with AI",
    days: 60,
    duration: "60 Days",
    lectures: "36+ Lectures",
    projects: "4 Projects",
    mode: "Hybrid",
    tag: "New",
    img: "/images/courses/Economics, Policy and Development Analytics with AI.jpg",
    blurb:
      "Public datasets, indicators, dashboards and AI-assisted policy briefs for Economics students.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "Economics, policy, and social science are built around real questions. What is changing? Who is affected? What does the data show? What action should be taken next? This course by Eduden is designed for Economics, Political Science, Public Policy, Commerce, Sociology, and Social Science students who want to use data and AI tools for research, reports, dashboards, and policy analysis.",
        "This course teaches students how to work with public datasets, economic indicators, survey data, and research reports. Students will learn how to clean data, create charts, compare regions, identify trends, and prepare policy style reports with AI support. By the end of the course, students will have a research analytics portfolio that can support internships, academic projects, research roles, and policy related opportunities.",
        "Assignments: Students will complete assignments on public data analysis, chart creation, indicator comparison, AI assisted research summaries, and policy note writing.",
        "Quizzes: Quizzes will check understanding of data interpretation, public indicators, chart selection, research logic, and report structure.",
        "Live Sessions: Live sessions will include public dataset walkthroughs, research discussions, report feedback, and presentation practice.",
        "How It Helps in CV Building: Students can add research reports, public data dashboards, policy briefs, and data backed presentations to their CV. This is useful for internships in research firms, think tanks, NGOs, and consulting organizations.",
      ],
      eligibility: [
        "Students from Economics, Political Science, Public Policy, Commerce, Sociology, Social Science, and related academic backgrounds can join.",
        "No coding background is required.",
        "Interest in research, data, society, development, and policy will be helpful.",
      ],
      projectsHeadline: "4 projects you'll build.",
      projects: [
        { n: "01", title: "Economic indicator comparison report" },
        { n: "02", title: "Public dataset visualization project" },
        { n: "03", title: "AI assisted policy brief" },
        { n: "04", title: "Final capstone: Research analytics report with presentation" },
      ],
      curriculumSubtitle:
        "6 modules · 36+ lectures · 4 projects · Mentor-verified assignments & quizzes",
      modules: [
        {
          title: "Research and Data Basics",
          meta: "",
          topics: [
            "Students learn what research data is, how public datasets work, and how to frame research questions.",
          ],
        },
        {
          title: "Economic and Policy Data",
          meta: "",
          topics: [
            "Students work with indicators such as inflation, unemployment, population, education, health, GDP, and development data.",
          ],
        },
        {
          title: "Excel and Dashboard Basics for Research",
          meta: "",
          topics: [
            "Students learn data cleaning, chart creation, comparison reports, and simple dashboard building.",
          ],
        },
        {
          title: "AI for Research Support",
          meta: "",
          topics: [
            "Students learn how to summarize reports, prepare literature notes, draft policy briefs, and organize research points.",
          ],
        },
        {
          title: "Data Storytelling",
          meta: "",
          topics: ["Students learn how to turn data into clear explanations and presentation ready insights."],
        },
        {
          title: "Final Capstone Project",
          meta: "",
          topics: [
            "Students prepare a complete policy or economics report with data, visuals, and recommendations.",
          ],
        },
      ],
      tools: [
        "Excel",
        "Google Sheets",
        "Power BI basics",
        "World Bank Data",
        "Government datasets",
        "ChatGPT",
        "Perplexity",
        "Canva or PowerPoint",
      ],
      careerIntro:
        "This course supports students who want roles in research, development, consulting, public policy, and analytics.",
      roles: [
        "Research Analyst Trainee",
        "Policy Research Assistant",
        "Economic Analyst Trainee",
        "Data Reporting Assistant",
        "Development Sector Analyst",
        "Public Policy Intern",
        "Survey Data Assistant",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "Students receive an Eduden certificate after completing assignments and the final research project.",
        },
        {
          title: "Practical Research Experience",
          body: "Students work with public datasets and research style reports instead of only reading theory.",
        },
        {
          title: "Portfolio Development",
          body: "Students build a portfolio with dashboards, policy briefs, charts, and research reports.",
        },
        {
          title: "Ready for Interviews",
          body: "Students learn how to explain research findings, data sources, and recommendations clearly.",
        },
      ],
      nextStep:
        "Data Analytics, Business Intelligence, AI for Business Strategy, Public Policy Analytics, or GIS and Location Intelligence.",
    },
  },
  {
    slug: "nocode-ops",
    brochureUrl: "/New Courses/New Courses/Digital Business Operations and No Code Automation with AI.pdf",
    brochureSizeMB: 17.63,
    cat: "AI & Tech for Non-Tech Careers",
    title: "Digital Business Operations and No Code Automation with AI",
    days: 60,
    duration: "60 Days",
    lectures: "36+ Lectures",
    projects: "5 Projects",
    mode: "Hybrid",
    tag: "New",
    img: "/images/courses/Digital Business Operations and No Code Automation with AI.png",
    blurb:
      "Automate forms, sheets, reports and follow-ups with AI and no-code tools.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "Modern offices are full of repetitive work. Forms, sheets, emails, reports, follow ups, approvals, task tracking, customer records, and daily updates take a lot of time. AI and no code tools can make this work faster and more organized. This course by Eduden is designed for non technical students who want to work in business operations, administration, startups, customer success, HR operations, marketing operations, or digital coordination roles.",
        "This course teaches students how to use AI and no code tools to manage business tasks, automate workflows, organize data, and improve productivity. Students will work with forms, spreadsheets, task boards, AI writing tools, automation platforms, and simple internal systems. By the end of the course, students will be able to build useful business workflows and show them as practical portfolio projects.",
        "Assignments: Students will complete assignments on forms, spreadsheets, task boards, AI documents, customer tracking sheets, and workflow automation.",
        "Quizzes: Quizzes will test understanding of workflow logic, automation basics, AI tool usage, and business process mapping.",
        "Live Sessions: Live sessions will include tool walkthroughs, workflow building, doubt clearing, and project reviews.",
        "How It Helps in CV Building: Students can show real workflow projects, automation systems, AI templates, and no code dashboards in their portfolio. This helps them stand out for roles where companies need organized and tool friendly candidates.",
      ],
      eligibility: [
        "Students from MBA, BBA, Commerce, Arts, Humanities, Media, and other non technical backgrounds can join.",
        "No coding background is required.",
        "Basic computer knowledge and interest in business workflows will be helpful.",
      ],
      projectsHeadline: "5 projects you'll build.",
      projects: [
        { n: "01", title: "AI powered document and email workflow" },
        { n: "02", title: "Lead collection and follow up tracker" },
        { n: "03", title: "Task management system for a team" },
        { n: "04", title: "Automated form to sheet workflow" },
        { n: "05", title: "Final capstone: Digital operations system for a small business" },
      ],
      curriculumSubtitle:
        "7 modules · 36+ lectures · 5 projects · Mentor-verified assignments & quizzes",
      modules: [
        {
          title: "Introduction to Digital Business Operations",
          meta: "",
          topics: ["Students learn how modern teams manage tasks, data, communication, and reporting."],
        },
        {
          title: "AI for Office Productivity",
          meta: "",
          topics: [
            "Students learn how to use AI for emails, summaries, reports, presentations, and documentation.",
          ],
        },
        {
          title: "No Code Workspaces",
          meta: "",
          topics: [
            "Students learn how to organize information using Notion, Airtable, task boards, and shared documents.",
          ],
        },
        {
          title: "Forms, Sheets, and Data Collection",
          meta: "",
          topics: [
            "Students learn how to collect leads, feedback, registrations, and internal updates using forms and spreadsheets.",
          ],
        },
        {
          title: "Workflow Automation Basics",
          meta: "",
          topics: [
            "Students learn how to connect tools, automate notifications, update sheets, and reduce manual work.",
          ],
        },
        {
          title: "Business Process Mapping",
          meta: "",
          topics: ["Students learn how to understand a process, identify delays, and design a better workflow."],
        },
        {
          title: "Final Capstone Project",
          meta: "",
          topics: [
            "Students build a working digital operations system for a small business, department, or college activity.",
          ],
        },
      ],
      tools: [
        "ChatGPT",
        "Gemini",
        "Notion",
        "Airtable",
        "Google Forms",
        "Google Sheets",
        "Canva",
        "Zapier or Make",
        "Trello or Asana basics",
      ],
      careerIntro:
        "This course supports students who want to work in operations, coordination, administration, marketing support, HR operations, or startup teams.",
      roles: [
        "Business Operations Executive",
        "Operations Coordinator",
        "Digital Operations Assistant",
        "Customer Success Associate",
        "Marketing Operations Assistant",
        "HR Operations Assistant",
        "No Code Automation Assistant",
        "Startup Coordinator",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "Students receive an Eduden certificate after completing assignments and the final project.",
        },
        {
          title: "Practical Workflow Experience",
          body: "Students learn how to build systems that are useful in real offices and startups.",
        },
        {
          title: "Portfolio Development",
          body: "Students build a portfolio with workflow maps, automation screenshots, templates, and project documentation.",
        },
        {
          title: "Ready for Interviews",
          body: "Students learn how to explain business workflows, automation logic, AI use cases, and productivity improvements.",
        },
      ],
      nextStep:
        "Product Management, Business Analytics, AI for Business Strategy, Digital Marketing, or Data Analytics.",
    },
  },
   {
    slug: "ux-ui-design-business-product",
    brochureUrl: "/New Courses/UI-UX/UX-UI Design for Business and Product Careers with Figma.pdf",
    brochureSizeMB: 16.77,
    cat: "AI & Tech for Non-Tech Careers",
    title: "UX/UI Design for Business and Product Careers with Figma",
    days: 90,
    duration: "90 Days",
    lectures: "50+ Lectures",
    projects: "6 Projects",
    mode: "Hybrid",
    tag: "New",
    img: unsplash("1587440871875-191322ee64b0"),
    blurb:
      "UX thinking, UI fundamentals and Figma for MBA, BBA, Commerce and Arts students no design background needed.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "Every product people love is built on good design. Apps, websites, payment screens, food delivery flows, banking dashboards, and e-commerce checkouts all succeed or fail based on how easy and enjoyable they are to use. Companies today treat user experience as a business priority, not just a creative task. This course by Eduden is designed for students from MBA, BBA, Commerce, Economics, Arts, and other non design backgrounds who want to understand how digital products are designed and improved. You will learn UX thinking, UI fundamentals, and Figma in a practical classroom environment and build design projects that can be shown in interviews, internships, and placements.",
        "This course focuses on practical UX/UI skills that are useful in product, marketing, consulting, and startup roles. Students will learn how to research users, map customer journeys, apply design thinking, create wireframes, design clean screens in Figma, build clickable prototypes, and test designs with real users. The goal is not to make students professional graphic artists. The goal is to help them think like a user, communicate design decisions in business language, and confidently contribute to product and digital teams. By the end of the course, students will have wireframes, Figma designs, prototypes, and case study write-ups that can add real value to their CV.",
        "Learning Objectives by the end of this course, students will be able to: understand what UX and UI mean and why they matter to business and product strategy; conduct basic user research through interviews, surveys, and observation; map customer journeys and identify pain points and opportunities; apply the design thinking process to real business problems; create wireframes and clickable prototypes in Figma; apply visual hierarchy, typography, color, spacing, and layout principles; write clear and simple UX copy for screens and flows; run basic usability tests and turn feedback into design improvements; present design work with business reasoning during interviews and reviews.",
        "Assignments: Students will complete assignments on user interviews, journey mapping, wireframe sketching, Figma screen design, UX writing, prototype building, and usability test reporting.",
        "Quizzes: Short quizzes will test understanding of UX terms, design thinking stages, UI principles, typography and color basics, prototyping concepts, and usability testing methods.",
        "Live Sessions: Live classroom sessions will include Figma demonstrations, guided design practice, doubt clearing, design critiques, case study discussions, and project reviews.",
        "Expected Outcomes: By the end of the course, students will be comfortable using Figma, confident in explaining UX concepts, capable of designing and testing simple digital products, and ready to work with product, design, and marketing teams.",
        "Career Relevance for Management Students: Management students who understand UX/UI stand out in product management, consulting, marketing, and startup roles. They can speak the language of both business and design teams, evaluate digital products critically, and contribute to product decisions from day one. Recruiters increasingly prefer management candidates who can show real design thinking work rather than only classroom theory.",
        "How It Helps in CV Building: Students can add journey maps, Figma projects, prototypes, usability reports, and the final capstone case study to their CV and LinkedIn. This gives recruiters proof that the student can work on real digital products and not just speak about user experience theoretically.",
      ],
      eligibility: [
        "Students from MBA, BBA, B.Com, Economics, Commerce, Arts, Social Science, and related backgrounds can join this course.",
        "No design or coding background is required.",
        "Basic computer knowledge and interest in apps, websites, and how people use them will be helpful.",
      ],
      projectsHeadline: "6 projects you'll build.",
      projects: [
        { n: "01", title: "Customer journey map for a real Indian app or service" },
        { n: "02", title: "Mobile app redesign wireframes for a commonly used app" },
        { n: "03", title: "Landing page UI design in Figma" },
        { n: "04", title: "Clickable prototype for a new app idea" },
        { n: "05", title: "Usability test report with findings and recommendations" },
        { n: "06", title: "Final capstone: complete app or website design with case study presentation" },
      ],
      curriculumSubtitle:
        "16 modules · 50+ lectures · 6 projects · Mentor-verified assignments & quizzes",
      modules: [
        {
          title: "Introduction to UX/UI Design",
          meta: "",
          topics: [
            "Students learn what UX and UI mean, how they are different, and how design shapes everyday digital products.",
            "Practical activity: analyse one favourite app and one frustrating app and list what works and what fails.",
          ],
        },
        {
          title: "UX/UI in Business and Product Strategy",
          meta: "",
          topics: [
            "Students learn how good design increases sales, retention, trust, and brand value, and how companies measure the business impact of design.",
            "Practical activity: compare two competing apps and connect design differences to business outcomes.",
          ],
        },
        {
          title: "User Research Basics",
          meta: "",
          topics: [
            "Students learn how to understand users through interviews, surveys, observation, and simple user personas.",
            "Practical activity: conduct three short user interviews and build one user persona.",
          ],
        },
        {
          title: "Customer Journey Mapping",
          meta: "",
          topics: [
            "Students learn how to map the full customer journey across touchpoints and identify pain points, emotions, and opportunities.",
            "Practical activity: create a journey map for ordering food, booking a ticket, or opening a bank account.",
          ],
        },
        {
          title: "Design Thinking",
          meta: "",
          topics: [
            "Students learn the five stages of design thinking: empathise, define, ideate, prototype, and test, and apply them to a business problem.",
            "Practical activity: run a mini design thinking sprint in groups on a real campus or local business problem.",
          ],
        },
        {
          title: "Wireframing",
          meta: "",
          topics: [
            "Students learn how to plan screens using low fidelity sketches and digital wireframes before adding visual design.",
            "Practical activity: sketch paper wireframes for a mobile app and rebuild them as digital wireframes.",
          ],
        },
        {
          title: "UI Fundamentals and Visual Hierarchy",
          meta: "",
          topics: [
            "Students learn the building blocks of interfaces including buttons, cards, forms, navigation, and how visual hierarchy guides user attention.",
            "Practical activity: redesign a cluttered screen to improve clarity and focus.",
          ],
        },
        {
          title: "Typography, Color, Spacing, and Layout",
          meta: "",
          topics: [
            "Students learn how to choose fonts, build simple color palettes, use white space, and arrange layouts using grids and alignment.",
            "Practical activity: create one well-designed screen using proper type scale, spacing, and a three-color palette.",
          ],
        },
        {
          title: "Figma Basics",
          meta: "",
          topics: [
            "Students learn frames, shapes, text, components, auto layout basics, and how to organise design files professionally.",
            "Practical activity: recreate a popular app screen in Figma step by step.",
          ],
        },
        {
          title: "Prototyping in Figma",
          meta: "",
          topics: [
            "Students learn how to connect screens, add interactions, and create clickable prototypes that feel like real apps.",
            "Practical activity: build a clickable prototype of a three to five screen user flow.",
          ],
        },
        {
          title: "Usability Testing",
          meta: "",
          topics: [
            "Students learn how to plan simple usability tests, observe users, record findings, and improve designs based on feedback.",
            "Practical activity: test a prototype with three users and write a short findings report.",
          ],
        },
        {
          title: "Product Experience and Customer Experience",
          meta: "",
          topics: [
            "Students learn how UX connects to overall product experience and customer experience, including onboarding, support, and retention moments.",
            "Practical activity: map the end to end experience of a subscription or delivery service.",
          ],
        },
        {
          title: "UX Writing Basics",
          meta: "",
          topics: [
            "Students learn how to write clear button labels, error messages, onboarding text, and notifications in simple user friendly language.",
            "Practical activity: rewrite confusing screens from real apps with better UX copy.",
          ],
        },
        {
          title: "Design Systems Introduction",
          meta: "",
          topics: [
            "Students learn what design systems are, why companies like Google and Airbnb use them, and how reusable components keep products consistent.",
            "Practical activity: create a mini style guide with colors, typography, and basic components in Figma.",
          ],
        },
        {
          title: "Case Studies from Business, Apps, and Websites",
          meta: "",
          topics: [
            "Students study real design case studies from Indian and global products including payment apps, e-commerce, food delivery, and SaaS tools.",
            "Practical activity: present one case study analysing what the company changed and why it worked.",
          ],
        },
        {
          title: "Final Capstone Project",
          meta: "",
          topics: [
            "Students design a complete app or website from research to prototype and present it as a professional case study with business reasoning.",
          ],
        },
      ],
      tools: [
        "Figma",
        "FigJam or Miro",
        "Google Forms",
        "Canva or PowerPoint",
        "Notion or Google Docs",
        "Basic AI tools for design ideas and UX copy",
      ],
      careerIntro:
        "This course helps students apply for roles where product understanding, user focus, and design communication are valued.",
      roles: [
        "UX/UI Design Intern",
        "Product Management Trainee",
        "Product Analyst",
        "UX Researcher Trainee",
        "Business Analyst with Product Focus",
        "Digital Marketing Executive",
        "Customer Experience Associate",
        "UX Writer Trainee",
        "Design Operations Assistant",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "Students who complete the assignments and final project will receive an Eduden certificate of completion.",
        },
        {
          title: "Practical Project Experience",
          body: "Students will work on real design tasks similar to what product and design teams do in companies, from research to final prototype.",
        },
        {
          title: "Portfolio Development",
          body: "Students will build a portfolio with journey maps, wireframes, Figma designs, clickable prototypes, and case study presentations.",
        },
        {
          title: "Ready for Interviews",
          body: "Students will be able to walk interviewers through their design projects, explain their decisions in business language, and demonstrate live prototypes.",
        },
      ],
      nextStep:
        "Product Management, AI for Business Strategy, Business Analytics and MIS Reporting, or Digital Marketing and Growth.",
    },
  },


  
 

  //Cyber Security Courses
  {
    slug: "ethical-hacking-for-beginners",
    brochureUrl: "/Old Course/Cyber Security/Ethical Hacking For Beginners.pdf",
    brochureSizeMB: 15.3,
    cat: "Cyber Security",
    title: "Ethical Hacking for Beginners 45 Days Hand on Course",
    days: 45,
    duration: "45 Days",
    lectures: "32+ Lectures",
    projects: "5+ Projects",
    mode: "Hybrid",
    tag: "Bestseller",
    img: unsplash("1526374965328-7f61d4dc18c5"),
    blurb:
      "Think like an attacker, defend like a professional, and build practical cybersecurity skills.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "This 45-day ethical hacking course by Eduden is designed for total beginners who want to learn cybersecurity from scratch and enter one of the most in-demand industries in India. You'll master the core hacking phases from reconnaissance and vulnerability scanning to exploitation, report writing, and responsible disclosure.",
        "All training is based on real-world attack simulations and live lab environments using tools like Kali Linux, Burp Suite, Wireshark, Nmap, and Metasploit making this one of the most practical cybersecurity courses for beginners in India. Whether your goal is to become a penetration tester, land your first cybersecurity job, or kick off your journey as a bug bounty hunter in India, this course will set you up with the exact skills needed.",
      ],
      eligibility: [
        "Total beginners no prior cybersecurity experience needed",
        "No coding background required to start",
        "Anyone aiming to become a penetration tester, bug bounty hunter, or start a career in cybersecurity",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "10+ Assignments assignments that simulate real attack scenarios, perfect for building your portfolio and practicing concepts outside the classroom",
        },
        {
          n: "02",
          title:
            "Quizzes knowledge-check quizzes after each tool/module to test your progress and reinforce everything you have learned",
        },
        {
          n: "03",
          title:
            "Live Sessions weekly live sessions with industry professionals covering ethical hacking labs, career guidance, and Q&A with certified penetration testers",
        },
        {
          n: "04",
          title: "Projects you'll build 4 hands-on database applications",
        },
      ],
      curriculumSubtitle: "8 modules · 32+ lectures · 5+ projects",
      modules: [
        {
          title: "Introduction to Ethical Hacking",
          meta: "",
          topics: [],
        },
        {
          title: "Networking Basics for Hackers",
          meta: "",
          topics: [],
        },
        {
          title: "Reconnaissance & Intelligence Gathering",
          meta: "",
          topics: [],
        },
        {
          title: "Vulnerability Analysis",
          meta: "",
          topics: [],
        },
        {
          title: "Exploitation & Gaining Access",
          meta: "",
          topics: [],
        },
        {
          title: "Web Application Hacking",
          meta: "",
          topics: [],
        },
        {
          title: "WiFi Hacking & Social Engineering",
          meta: "",
          topics: [],
        },
        {
          title: "Reporting & Career Path",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Kali Linux", "Burp Suite", "Wireshark", "Nmap", "Metasploit"],
      careerIntro:
        "Apply what you learn to bug bounty programs, cybersecurity internships, or job-ready IT roles.",
      roles: [
        "Penetration Tester",
        "Bug Bounty Hunter",
        "Cybersecurity Intern",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Buying the course entitles you to access all course content. Once the period ends, you don't have to worry about recurring charges.",
        },
        {
          title: "Ready for interviews",
          body: "Positions in database management and engineering are in high demand. The confidence gained through mastering these concepts will help you navigate interviews with ease and secure roles in top tech companies.",
        },
      ],
      nextStep:
        "Start Bug Bounty Hunting, Digital Forensics, Android App Penetration Testing, or Advanced Network Pentesting.",
    },
  },
  {
    slug: "bug-bounty",
    brochureUrl: "/Old Course/Cyber Security/Start Bug Bounty Hunting.pdf",
    brochureSizeMB: 10.14,
    cat: "Cyber Security",
    title: "Start Bug Bounty Hunting 50 Days Hands-On Training",
    days: 50,
    duration: "50 Days",
    lectures: "35 Lectures",
    projects: "6 Projects",
    mode: "Online",
    tag: "",
    img: unsplash("1550439062-609e1531270e"),
    blurb:
      "From recon to reporting the complete roadmap for HackerOne, Bugcrowd and Synack.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "This 50-day hands-on program is the ultimate beginner's course to start your bug bounty journey in India. Whether you want to hunt on HackerOne, Bugcrowd, or Synack, this course will give you a complete roadmap from recon to reporting using the same tools used by top hunters worldwide.",
        "You'll learn how to discover and exploit vulnerabilities in web applications, perform recon using automated and manual techniques, write professional reports that get accepted, and set up your own ethical hacking workflow. If you're serious about earning money through cybersecurity, or landing internships and jobs in penetration testing, this is the best bug bounty training in Kolkata, West Bengal that actually prepares you for real-world targets not just labs.",
      ],
      eligibility: [
        "Beginners with basic web and networking knowledge",
        "Anyone wanting to earn through HackerOne, Bugcrowd, or Synack",
        "Those aiming for internships or jobs in penetration testing",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "15+ Assignments recon, exploitation, and reporting assignments with feedback through Slack/GitHub",
        },
        {
          n: "02",
          title:
            "Quizzes quick challenges, protocol knowledge tests, and recon logic rounds to sharpen your bug-hunting brain",
        },
        {
          n: "03",
          title:
            "Live Sessions live labs, tool walkthroughs, bounty report breakdowns, and Q&A with real bug bounty hunters",
        },
        {
          n: "04",
          title:
            "Projects you'll complete 6 real-world styled bug bounty projects",
        },
      ],
      curriculumSubtitle: "6 modules · 35 lectures · 6 projects",
      modules: [
        {
          title: "Bug Bounty Basics & Platforms",
          meta: "",
          topics: [],
        },
        {
          title: "Web & HTTP Fundamentals",
          meta: "",
          topics: [],
        },
        {
          title: "Recon & Asset Discovery",
          meta: "",
          topics: [],
        },
        {
          title: "OWASP Top 10 for Bug Bounty Hunters",
          meta: "",
          topics: [],
        },
        {
          title: "Burp Suite Mastery",
          meta: "",
          topics: [],
        },
        {
          title: "Reporting, PoCs & Career Building",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Burp Suite", "Recon Tools", "OWASP Top 10"],
      careerIntro:
        "Positions in bug bounty hunting are highly sought after this course prepares you to land your first gig.",
      roles: [
        "Bug Bounty Hunter",
        "Penetration Tester",
        "Web Security Researcher",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Buying the course entitles you to access all course content. Once the period ends, you don't have to worry about recurring charges.",
        },
        {
          title: "Ready for interviews",
          body: "Positions in bug bounty hunting are highly sought after. This course prepares you to land your first gig.",
        },
      ],
      nextStep:
        "Ethical Hacking for Beginners, Advanced Network Pentesting, or Cybersecurity Advanced Red Team/Blue Team.",
    },
  },
  {
    slug: "forensics",
    brochureUrl: "/Old Course/Cyber Security/Digital Forensics.pdf",
    brochureSizeMB: 11.76,
    cat: "Cyber Security",
    title: "Digital Forensics 90 Days Hands-On Training",
    days: 90,
    duration: "90 Days",
    lectures: "48 Lectures",
    projects: "6 Projects",
    mode: "Hybrid",
    tag: "New batch",
    img: unsplash("1573164713988-8665fc963095"),
    blurb:
      "Uncover hidden data, trace cybercrimes, and recover digital evidence using industry-standard tools.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "This course covers everything from disk forensics and deleted file recovery to network log analysis and mobile forensics. You'll learn how to use real forensic tools like Autopsy, FTK Imager, Volatility, Wireshark, and Sleuth Kit and apply them to realistic scenarios involving malware, insider threats, phishing, and digital fraud.",
        "You'll also learn the legal and reporting side of digital forensics, ensuring you can conduct investigations that hold up in a real-world environment whether it's for a private company, law enforcement, or cyber response team. If you're planning to become a forensics analyst, incident responder, or even step into cybercrime law, this is the most practical digital forensics training in India to get started.",
      ],
      eligibility: [
        "Any basic cybersecurity certification (e.g., CEH, Security+, eJPT)",
        "OR relevant work experience in system administration, IT support, cybersecurity, or incident response",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "15+ Assignments case-based forensic challenges covering memory dumps, disk images, log files, and malware behavior",
        },
        {
          n: "02",
          title:
            "Quizzes scenario-based tests after each module, focused on forensic tools, evidence chain-of-custody, and investigative procedures",
        },
        {
          n: "03",
          title:
            "Live Sessions weekly walkthroughs of digital crime cases, malware investigations, and open Q&A sessions with industry experts",
        },
        {
          n: "04",
          title: "Projects you'll complete 6 hands-on forensics projects",
        },
      ],
      curriculumSubtitle: "6 modules · 48 lectures · 6 projects",
      modules: [
        {
          title: "Introduction to Digital Forensics",
          meta: "",
          topics: [],
        },
        {
          title: "Disk & File System Forensics",
          meta: "",
          topics: [],
        },
        {
          title: "Memory Forensics",
          meta: "",
          topics: [],
        },
        {
          title: "Network & Log Analysis",
          meta: "",
          topics: [],
        },
        {
          title: "Mobile & Cloud Forensics (Intro)",
          meta: "",
          topics: [],
        },
        {
          title: "Reporting & Chain of Custody",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Autopsy", "FTK Imager", "Volatility", "Wireshark", "Sleuth Kit"],
      careerIntro:
        "Step into roles in digital forensics, incident response, or cybercrime investigation for private companies, law enforcement, or cyber response teams.",
      roles: [
        "Forensics Analyst",
        "Incident Responder",
        "Cybercrime Investigator",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Buying the course entitles you to access all course content. Once the period ends, you don't have to worry about recurring charges.",
        },
        {
          title: "Ready for interviews",
          body: "Positions in digital forensics and incident response are in high demand.",
        },
      ],
      nextStep:
        "Cybersecurity Advanced Red Team/Blue Team, Advanced Network Pentesting, or Start Bug Bounty Hunting.",
    },
  },
  {
    slug: "android-pentest",
    brochureUrl: "/Old Course/Cyber Security/Android Application Penetration Testing 30.pdf",
    brochureSizeMB: 9.91,
    cat: "Cyber Security",
    title: "Android App Penetration Testing - Basics (30 Days Hands-On Course)",
    days: 30,
    duration: "30 Days",
    lectures: "24 Lectures",
    projects: "3 Projects",
    mode: "Online",
    tag: "",
    img: unsplash("1512941937669-90a1b58e7e9c"),
    blurb:
      "Reverse-engineer APKs, intercept traffic, and test apps against the OWASP Mobile Top 10.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "This 30-day program is designed to introduce students to the foundations of Android mobile app penetration testing, using simple tools and real-world apps. You'll learn how to analyze APK files, inspect insecure coding practices, capture data in transit, and test Android apps for OWASP Mobile Top 10 vulnerabilities.",
        "You'll also learn how to use tools like MobSF, jadx, Burp Suite, and Android emulators all inside a safe, fully guided lab environment. Whether you're a student, entry-level analyst, or a developer curious about mobile security, this is one of the most practical Android security courses in India right now.",
      ],
      eligibility: [
        "Any basic cybersecurity certification (e.g. CEH, Security+, eJPT)",
        "OR relevant experience in cybersecurity, IT support, or app development",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments APK decompilation tasks, mobile traffic interception, and insecure storage analysis, with walkthroughs and mentorship",
        },
        {
          n: "02",
          title:
            "Quizzes quick checkpoints at the end of every module to reinforce learning, focused on OWASP Mobile concepts and tool usage",
        },
        {
          n: "03",
          title:
            "Live Sessions weekly lab demos, tool walkthroughs, and Q&A sessions with mobile security practitioners",
        },
        {
          n: "04",
          title:
            "Projects you'll complete 3 key hands-on mobile app assessments",
        },
      ],
      curriculumSubtitle: "5 modules · 24 lectures · 3 projects",
      modules: [
        {
          title: "Android Architecture & Lab Setup",
          meta: "",
          topics: [],
        },
        {
          title: "Static Analysis of APKs",
          meta: "",
          topics: [],
        },
        {
          title: "Dynamic Analysis & Network Traffic Inspection",
          meta: "",
          topics: [],
        },
        {
          title: "Common Mobile Vulnerabilities (OWASP Mobile Top 10 - Lite)",
          meta: "",
          topics: [],
        },
        {
          title: "Final Assessment & Reporting Basics",
          meta: "",
          topics: [],
        },
      ],
      tools: ["MobSF", "jadx", "Burp Suite", "Android Emulators"],
      careerIntro:
        "Positions in mobile security, ethical hacking, and app penetration testing are in high demand this course prepares you for roles such as Mobile Security Analyst, Penetration Tester, and Ethical Hacker.",
      roles: [
        "Mobile Security Analyst",
        "Penetration Tester",
        "Ethical Hacker",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Buying the course entitles you to access all course content. Once the period ends, you don't have to worry about recurring charges.",
        },
        {
          title: "Ready for interviews",
          body: "Positions in mobile security, ethical hacking, and app penetration testing are in high demand. This course prepares you for roles such as Mobile Security Analyst, Penetration Tester, and Ethical Hacker.",
        },
      ],
      nextStep:
        "Ethical Hacking for Beginners, Advanced Network Pentesting, or Start Bug Bounty Hunting.",
    },
  },
  {
    slug: "android-pentest-advanced",
    brochureUrl: "/Old Course/Cyber Security/Android Application Penetration Testing 45.pdf",
    brochureSizeMB: 7.47,
    cat: "Cyber Security",
    title:
      "Android Application Penetration Testing Advanced (45 Days Hands-On Course)",
    days: 45,
    duration: "45 Days",
    lectures: "30 Lectures",
    projects: "5 Projects",
    mode: "Online",
    tag: "",
    img: unsplash("1585079542156-2755d9c8a094"),
    blurb:
      "Runtime hooking, SSL pinning bypass, and custom mobile exploits with Frida, Objection and Xposed.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "In this course, you'll dive into advanced mobile app exploitation techniques. You'll learn how to reverse-engineer real-world applications, hook into functions during runtime, exploit insecure IPC mechanisms, bypass client-side logic and SSL pinning, and tamper with app logic on the fly.",
        "We'll walk you through real-world CVEs, appstore vulnerabilities, and CTF-style labs, designed to challenge your skills and deepen your understanding of secure mobile architecture. This is one of the most practical Android penetration testing courses in Kolkata and India, trusted by both red teamers and aspiring bug bounty hunters.",
      ],
      eligibility: [
        "Completed Android Application Penetration Testing Basics course and scored at least 90%",
        "Knowledge of APK structure, static analysis, Burp Suite, MobSF, and OWASP Mobile Top 10 concepts",
        "Familiarity with Android emulator setup and traffic interception",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments Frida scripting challenges, runtime hook simulations, bypass tasks, and post-exploit analysis, guided with trainer support",
        },
        {
          n: "02",
          title:
            "Quizzes advanced scenario-based quizzes with disassembly, patching logic, Frida hooks, and mobile security workflows",
        },
        {
          n: "03",
          title:
            "Live Sessions weekly reverse engineering labs, deep dives into custom CVEs, and real-world vulnerability discussions with experts",
        },
        {
          n: "04",
          title:
            "Projects you'll complete 5 intense mobile hacking challenges",
        },
      ],
      curriculumSubtitle: "6 modules · 30 lectures · 5 projects",
      modules: [
        {
          title: "Introduction to Dynamic Analysis",
          meta: "",
          topics: [],
        },
        {
          title: "Runtime Hooking & Logic Manipulation",
          meta: "",
          topics: [],
        },
        {
          title: "SSL Pinning & Root Detection Bypass",
          meta: "",
          topics: [],
        },
        {
          title: "Insecure IPC, Broadcast Receivers & Activities",
          meta: "",
          topics: [],
        },
        {
          title: "Reverse Engineering & Patch Testing",
          meta: "",
          topics: [],
        },
        {
          title: "Final Project & Career Prep",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Frida", "Objection", "Xposed"],
      careerIntro:
        "Positions in mobile security, ethical hacking, and app penetration testing are in high demand this course prepares you for roles such as Mobile Security Analyst, Penetration Tester, and Ethical Hacker.",
      roles: [
        "Mobile Security Analyst",
        "Penetration Tester",
        "Ethical Hacker",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "Participants completing every assignment and the final exams with a minimum 90% mark will earn a course certificate.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Buying the course entitles you to access all course content. Once the period ends, you don't have to worry about recurring charges.",
        },
        {
          title: "Ready for interviews",
          body: "Positions in mobile security, ethical hacking, and app penetration testing are in high demand. This course prepares you for roles such as Mobile Security Analyst, Penetration Tester, and Ethical Hacker.",
        },
      ],
      nextStep:
        "Cybersecurity Advanced Red Team/Blue Team, Advanced Network Pentesting, or Start Bug Bounty Hunting.",
    },
  },
  {
    slug: "adv-pentest",
    brochureUrl: "/Old Course/Cyber Security/Network Penetration Testing.pdf",
    brochureSizeMB: 14.3,
    cat: "Cyber Security",
    title: "Network Pentesting 45 Days Hands-On Course",
    days: 45,
    duration: "45 Days",
    lectures: "36 Lectures",
    projects: "5 Projects",
    mode: "Online",
    tag: "",
    img: unsplash("1544197150-b99a580bb7a8"),
    blurb:
      "Custom scripting with Python & Bash, exploitation, evasion and lateral movement.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "This 45-day hands-on offensive security course is designed for professionals who want to master the real-world tactics used in red team assessments, vulnerability research, and internal/external network exploitation. You'll learn how to go from initial access to full network control, bypassing modern security controls like firewalls, antivirus, IDS/IPS, and EDR.",
        "Through live labs and realistic attack chains, students will execute custom payloads, write Python/Bash scripts for automation, simulate pivoting across subnets, and craft detailed post-exploitation reports that demonstrate professional-grade assessments. If you're serious about getting into advanced ethical hacking, red teaming, or want to level up after CEH/OSCP prep this is one of the top offensive security training programs in India right now.",
      ],
      eligibility: [
        "At least 1 cybersecurity certification (e.g., CEH, eJPT, PNPT, or equivalent)",
        "OR 1 year of proven industry experience in ethical hacking, system administration, or network security",
        "Working knowledge of Python and Bash scripting",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments 12+ technical write-ups and scripting challenges including payload crafting, custom scanners, lateral movement automation, and log evasion",
        },
        {
          n: "02",
          title:
            "Quizzes built-in assessment checkpoints after major labs, designed to mimic real pentest decision-making",
        },
        {
          n: "03",
          title:
            "Live Sessions live weekly exploit walkthroughs, post-exploitation simulations, scripting reviews, and case study discussions",
        },
        {
          n: "04",
          title:
            "Projects complete 5 advanced projects built on enterprise-like infrastructures",
        },
      ],
      curriculumSubtitle: "6 modules · 36 lectures · 5 projects",
      modules: [
        {
          title: "Advanced Reconnaissance & Target Enumeration",
          meta: "",
          topics: [],
        },
        {
          title: "Exploitation & Gaining Access",
          meta: "",
          topics: [],
        },
        {
          title: "Post-Exploitation & Lateral Movement",
          meta: "",
          topics: [],
        },
        {
          title: "Active Directory Enumeration & Attacks (Intro)",
          meta: "",
          topics: [],
        },
        {
          title: "Custom Exploit Development (Basic Level)",
          meta: "",
          topics: [],
        },
        {
          title: "Reporting & Documentation",
          meta: "",
          topics: [],
        },
      ],
      tools: [
        "Python",
        "Bash",
        "Firewall/IDS/IPS Evasion",
        "EDR Bypass Techniques",
      ],
      careerIntro:
        "Positions in penetration testing are highly sought after this course prepares you to land your first gig.",
      roles: ["Penetration Tester", "Red Teamer", "Vulnerability Researcher"],
      benefits: [
        {
          title: "Course Certificate",
          body: "Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Buying the course entitles you to access all course content. Once the period ends, you don't have to worry about recurring charges.",
        },
        {
          title: "Ready for interviews",
          body: "Positions in penetration testing are highly sought after. This course prepares you to land your first gig.",
        },
      ],
      nextStep:
        "Cybersecurity Advanced Red Team/Blue Team, Digital Forensics, or Start Bug Bounty Hunting.",
    },
  },
  {
    slug: "cybersecurity-advanced-red-blue-team",
    brochureUrl: "/Old Course/Cyber Security/Cybersecurity Advanced.pdf",
    brochureSizeMB: 7.9,
    cat: "Cyber Security",
    title: "Cybersecurity Advanced Red Team/Blue Team Career Track",
    days: 90,
    duration: "90 Days",
    lectures: "80+ Lectures",
    projects: "8 Projects",
    mode: "Hybrid",
    tag: "",
    img: unsplash("1563986768609-322da13575f3"),
    blurb:
      "This intensive 90-day hybrid cybersecurity program equips learners with both offensive (Red Team) and defensive (Blue Team) skills. Explore advanced hacking techniques, real-world network/web app exploits, threat detection with SIEMs, and complete SOC simulations. Ideal for learners targeting high-demand roles in ethical hacking, penetration testing, and cyber defense.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "To provide learners with a deep, hands-on understanding of offensive and defensive security including network penetration testing, web app exploits, SIEM-based defense, and incident response. You'll be able to simulate attacks, build defense mechanisms, and respond like a pro in real-world scenarios.",
      ],
      eligibility: [
        "Ethical hacking/basic cybersecurity course graduates",
        "IT professionals (Linux/Networking/Security roles)",
        "Cybersecurity students preparing for advanced certifications",
        "Individuals aiming for Red Team / Blue Team job roles",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments hands-on attack and defense scenarios using virtual labs, tools, and real-world attack chains",
        },
        {
          n: "02",
          title:
            "Quizzes assess knowledge on CVEs, MITRE ATT&CK framework, log analysis, and incident workflows",
        },
        {
          n: "03",
          title:
            "Live Sessions Red vs Blue drills, threat hunting walkthroughs, and adversary emulation sessions",
        },
        {
          n: "04",
          title:
            "Projects simulate domain takeovers, SOC monitoring, malware response, and end-to-end kill chain exercises",
        },
      ],
      curriculumSubtitle: "8 modules · 80+ lectures · 8 projects",
      modules: [
        {
          title: "Red Team Advanced Reconnaissance & OSINT",
          meta: "",
          topics: [],
        },
        {
          title: "Red Team Vulnerability Analysis & Exploitation",
          meta: "",
          topics: [],
        },
        {
          title: "Red Team Web Application Hacking",
          meta: "",
          topics: [],
        },
        {
          title: "Red Team Active Directory & Post-Exploitation",
          meta: "",
          topics: [],
        },
        {
          title: "Blue Team Log Analysis & Threat Detection",
          meta: "",
          topics: [],
        },
        {
          title: "Blue Team Incident Response & Threat Hunting",
          meta: "",
          topics: [],
        },
        {
          title: "Blue Team Network Security Monitoring",
          meta: "",
          topics: [],
        },
        {
          title: "Blue Team Labs & SOC Simulation",
          meta: "",
          topics: [],
        },
      ],
      tools: ["SIEM Tools", "MITRE ATT&CK", "Active Directory", "OSINT Tools"],
      careerIntro:
        "Ideal for learners targeting high-demand roles in ethical hacking, penetration testing, and cyber defense.",
      roles: [
        "Red Team Operator",
        "Blue Team Analyst",
        "SOC Analyst",
        "Penetration Tester",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "Advanced Network Pentesting, Digital Forensics, or Bug Bounty Hunting.",
    },
  },
  {
    slug: "soc-analyst",
    brochureUrl: "/Old Course/Cyber Security/SOC Analyst.pdf",
    brochureSizeMB: 13.3,
    cat: "Cyber Security",
    title: "SOC Analyst 60 Days Hands-On Training",
    days: 60,
    duration: "60 Days",
    lectures: "40 Lectures",
    projects: "6 Projects",
    mode: "Hybrid",
    tag: "",
    img: unsplash("1551288049-bebda4e38f71"),
    blurb:
      "Real-time threat monitoring, alert triage, and incident response your fast-track into a SOC.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "This course is designed to make you SOC floor-ready teaching you everything from the basics of threat intelligence to advanced SIEM queries, log correlation, and real-time alert handling. You'll use tools like Splunk, Wazuh, Kibana, and Wireshark to simulate real-world attacks and defense strategies.",
        "Every module includes lab-based scenarios, helping you understand how threats behave, how alerts are triggered, and how incidents are managed in live SOC environments. If you're serious about getting your first job in cybersecurity as a SOC Analyst in India, this course is your best launchpad.",
      ],
      eligibility: [
        "Any Networking Certification (like CCNA, CompTIA Network+)",
        "Basic Cybersecurity Certification (like CEH, Security+) or relevant field experience",
        "Familiarity with TCP/IP, common ports, and basic security principles",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments log analysis, alert triage, and correlation assignments reviewed via GitHub or LMS portal",
        },
        {
          n: "02",
          title:
            "Quizzes threat detection, IOC recognition, and investigation scenario-based quizzes after each module",
        },
        {
          n: "03",
          title:
            "Live Sessions weekly interactive labs, case study breakdowns, threat analysis Q&As, and SIEM query deep-dives",
        },
        {
          n: "04",
          title: "Projects you'll complete 6 key SOC analyst projects",
        },
      ],
      curriculumSubtitle: "6 modules · 40 lectures · 6 projects",
      modules: [
        {
          title: "SOC Basics & Cyber Defense Essentials",
          meta: "",
          topics: [],
        },
        {
          title: "Networking for SOC Analysts",
          meta: "",
          topics: [],
        },
        {
          title: "SIEM Tools & Log Management",
          meta: "",
          topics: [],
        },
        {
          title: "Alert Triage & Incident Analysis",
          meta: "",
          topics: [],
        },
        {
          title: "Threat Hunting & Use Case Development",
          meta: "",
          topics: [],
        },
        {
          title: "Reporting, Documentation & Career Prep",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Splunk", "Wazuh", "Kibana", "Wireshark"],
      careerIntro:
        "Positions in cybersecurity and SOC analysis are in demand this course prepares you for your first SOC analyst role.",
      roles: ["SOC Analyst", "Threat Analyst", "Incident Response Analyst"],
      benefits: [
        {
          title: "Course Certificate",
          body: "Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Buying the course entitles you to access all course content. Once the period ends, you don't have to worry about recurring charges.",
        },
        {
          title: "Ready for interviews",
          body: "Positions in cybersecurity and SOC analysis are in demand. This course prepares you for your first SOC analyst role.",
        },
      ],
      nextStep:
        "Cybersecurity Advanced Red Team/Blue Team, Digital Forensics, or Advanced Network Pentesting.",
    },
  },
  {
    slug: "cloud-security",
    brochureUrl: "/Old Course/Cyber Security/Cloud Security.pdf",
    brochureSizeMB: 11.52,
    cat: "Cyber Security",
    title: "Cloud Security 60 Days Hands-On Training",
    days: 60,
    duration: "60 Days",
    lectures: "38 Lectures",
    projects: "5 Projects",
    mode: "Hybrid",
    tag: "",
    img: unsplash("1550751827-4bd374c3f58b"),
    blurb:
      "Secure real AWS, Azure and GCP environments IAM, network security, threat detection and compliance.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "This 60-day hands-on course takes you through the entire lifecycle of securing cloud infrastructure from IAM policies and network security groups to real-world vulnerabilities, threat detection, DevSecOps, and compliance. You'll work inside actual AWS, Azure, and GCP environments, simulating attacks, writing policies, implementing security controls, and using tools like CloudTrail, GuardDuty, Azure Defender, and GCP Security Command Center.",
        "It's one of the most comprehensive cloud security certification courses in India designed to make you job-ready for roles like Cloud Security Engineer, DevSecOps Analyst, or SOC+Cloud Hybrid roles.",
      ],
      eligibility: [
        "Basic knowledge of Networking & Linux",
        "Familiarity with any one cloud platform (AWS, Azure, or GCP)",
        "Prior knowledge of cybersecurity fundamentals (preferred but not mandatory)",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "15+ Assignments IAM configuration, bucket hardening, serverless protection, and log monitoring",
        },
        {
          n: "02",
          title:
            "Quizzes security scenarios, misconfig hunting, and compliance challenges after every section",
        },
        {
          n: "03",
          title:
            "Live Sessions weekly labs with cloud trainers, plus walkthroughs of real CVEs & security breaches from the cloud world",
        },
        {
          n: "04",
          title: "Projects you'll complete 5 hands-on projects",
        },
      ],
      curriculumSubtitle: "7 modules · 38 lectures · 5 projects",
      modules: [
        {
          title: "Cloud Fundamentals & Shared Responsibility",
          meta: "",
          topics: [],
        },
        {
          title: "Identity & Access Management in the Cloud",
          meta: "",
          topics: [],
        },
        {
          title: "Network Security & Firewall Rules",
          meta: "",
          topics: [],
        },
        {
          title: "Data Protection & Storage Security",
          meta: "",
          topics: [],
        },
        {
          title: "Threat Detection & Monitoring",
          meta: "",
          topics: [],
        },
        {
          title: "DevSecOps & Automation (Intro)",
          meta: "",
          topics: [],
        },
        {
          title: "Compliance & Reporting",
          meta: "",
          topics: [],
        },
      ],
      tools: [
        "CloudTrail",
        "GuardDuty",
        "Azure Defender",
        "GCP Security Command Center",
      ],
      careerIntro:
        "Positions in cloud security, DevSecOps, and related fields are highly sought after this course prepares you for roles like Cloud Security Engineer and DevSecOps Analyst.",
      roles: [
        "Cloud Security Engineer",
        "DevSecOps Analyst",
        "SOC + Cloud Hybrid Analyst",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Buying the course entitles you to access all course content. Once the period ends, you don't have to worry about recurring charges.",
        },
        {
          title: "Ready for interviews",
          body: "Positions in cloud security, DevSecOps, and related fields are highly sought after. This course prepares you for roles like Cloud Security Engineer, DevSecOps Analyst, and more.",
        },
      ],
      nextStep:
        "SOC Analyst, Cybersecurity Advanced Red Team/Blue Team, or Advanced Network Pentesting.",
    },
  },

  //Artificial Intelligence Courses
  {
    slug: "genai-prompt-engineering",
    brochureUrl: "/Old Course/AI/Generative AI & Prompt Engineering.pdf",
    brochureSizeMB: 11.6,
    cat: "AI & Tech for Non-Tech Careers",
    title: "Generative AI & Prompt Engineering 45 Days Hand on Course",
    days: 45,
    duration: "45 Days",
    lectures: "50+ Lectures",
    projects: "6 Projects",
    mode: "Hybrid",
    tag: "New",
    img: "/images/courses/Generative AI & Prompt Engineering.avif",
    blurb:
      "Master the future of AI by learning how to talk to it hands-on with GPT-4, Claude, Gemini and other LLMs.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "To help learners understand how to interact with, customize, and build tools using large language models (LLMs). The focus is on practical prompt design, chaining prompts, building chatbots, and using GenAI tools to create value whether you're coding, designing, selling, or solving business problems.",
      ],
      eligibility: [
        "Anyone curious about ChatGPT, AI tools, or building with LLMs",
        "Students and professionals (no coding experience required)",
        "Freelancers and content creators",
        "Developers, marketers, analysts, educators",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments design prompts, build workflows, and explore AI-powered automation tasks",
        },
        {
          n: "02",
          title:
            "Quizzes quick assessments on prompt design, LLM behavior, and GenAI concepts",
        },
        {
          n: "03",
          title:
            "Live Sessions AI tool walkthroughs, live builds, and hands-on GenAI integration workshops",
        },
        {
          n: "04",
          title:
            "Projects create prompt-based tools, chatbots, and automation workflows for real-world tasks",
        },
      ],
      curriculumSubtitle: "6 modules · 50+ lectures · 6 projects",
      modules: [
        {
          title: "Foundations of Generative AI & LLMs",
          meta: "",
          topics: [],
        },
        {
          title: "Prompt Engineering 101",
          meta: "",
          topics: [],
        },
        {
          title: "Using LLMs for Productivity & Content",
          meta: "",
          topics: [],
        },
        {
          title: "Building with OpenAI API & LangChain",
          meta: "",
          topics: [],
        },
        {
          title: "Integrating GenAI into Real Workflows",
          meta: "",
          topics: [],
        },
        {
          title: "Final Projects & Real-World Use Cases",
          meta: "",
          topics: [],
        },
      ],
      tools: ["GPT-4", "Claude", "Gemini", "OpenAI API", "LangChain"],
      careerIntro:
        "Build AI-powered tools, chatbots and content workflows useful whether you're coding, designing, selling, or solving business problems.",
      roles: [
        "Prompt Engineer",
        "AI Tools Consultant",
        "GenAI Content Specialist",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "AI for Business Strategy, Product Management and Digital Business with AI, or Digital Business Operations and No Code Automation with AI.",
    },
  },
  {
    slug: "deep-learning-tensorflow-keras",
    brochureUrl: "/Old Course/AI/Deep Learning & Neural Networks with TensorFlow & Keras.pdf",
    brochureSizeMB: 10.85,
    cat: "Artificial Intelligence",
    title: "Deep Learning & Neural Networks with TensorFlow & Keras",
    days: 60,
    duration: "60 Days",
    lectures: "70+ Lectures",
    projects: "8 Projects",
    mode: "Hybrid",
    tag: "",
    img: unsplash("1555255707-c07966088b7b"),
    blurb:
      "Build powerful AI models that think like a human brain neural networks, TensorFlow and Keras for vision, NLP and forecasting.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "To provide a solid foundation in neural network architectures, deep learning workflows, and real-world AI applications using TensorFlow and Keras all taught with hands-on projects, not just theory.",
      ],
      eligibility: [
        "Learners with basic ML or Python experience",
        "Data science and ML graduates ready for next level",
        "Developers exploring computer vision or NLP",
        "Professionals aiming for AI Engineer roles or research",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments train neural networks, tweak hyperparameters, and visualize layers using TensorFlow/Keras",
        },
        {
          n: "02",
          title:
            "Quizzes concept checks on backpropagation, optimizers, and CNN/RNN mechanisms",
        },
        {
          n: "03",
          title:
            "Live Sessions deep learning builds, architecture walkthroughs, and real-time model debugging",
        },
        {
          n: "04",
          title:
            "Projects image classification, sentiment analysis, sequence forecasting, and final capstone builds",
        },
      ],
      curriculumSubtitle: "7 modules · 70+ lectures · 8 projects",
      modules: [
        {
          title: "Introduction to Deep Learning",
          meta: "",
          topics: [],
        },
        {
          title: "Feedforward Neural Networks (FNNs)",
          meta: "",
          topics: [],
        },
        {
          title: "TensorFlow & Keras Fundamentals",
          meta: "",
          topics: [],
        },
        {
          title: "Convolutional Neural Networks (CNNs)",
          meta: "",
          topics: [],
        },
        {
          title: "Recurrent Neural Networks (RNNs) + LSTM/GRU",
          meta: "",
          topics: [],
        },
        {
          title: "Transfer Learning + Fine-Tuning",
          meta: "",
          topics: [],
        },
        {
          title: "Final Capstone Project",
          meta: "",
          topics: [],
        },
      ],
      tools: ["TensorFlow", "Keras", "Python"],
      careerIntro:
        "Build the skills for AI Engineer roles or research from computer vision to NLP and time series forecasting.",
      roles: [
        "AI Engineer",
        "Deep Learning Engineer",
        "Computer Vision Engineer",
        "NLP Engineer",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "AI Foundations with Python, Machine Learning Bootcamp, or Data Science with Python.",
    },
  },
  
  {
    slug: "applied-ai-healthcare-finance-marketing",
    brochureUrl: "/Old Course/AI/Applied AI in Healthcare, Finance & Marketing.pdf",
    brochureSizeMB: 7.56,
    cat: "AI & Tech for Non-Tech Careers",
    title: "Applied AI in Healthcare, Finance & Marketing 45 Days Industry Focused Course",
    days: 45,
    duration: "45 Days",
    lectures: "55+ Lectures",
    projects: "6 Projects",
    mode: "Hybrid",
    tag: "New",
    img: unsplash("1576091160399-112ba8d25d1d"),
    blurb:
      "Solve real-world problems in healthcare diagnostics, financial fraud detection, and AI-powered marketing.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "To help learners understand how AI is transforming the world's biggest industries and give them the tools to build intelligent solutions across domains like healthcare, fintech, and digital marketing.",
      ],
      eligibility: [
        "Professionals in healthcare, marketing, finance",
        "ML/DS students who want domain-specific expertise",
        "Business owners & consultants exploring AI automation",
        "Entrepreneurs building AI-based SaaS products",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments domain-based problem-solving using industry datasets and real KPIs",
        },
        {
          n: "02",
          title:
            "Quizzes assessments to reinforce AI concepts in healthcare, finance, and marketing",
        },
        {
          n: "03",
          title:
            "Live Sessions industry case studies, project walkthroughs, and tool usage demos",
        },
        {
          n: "04",
          title:
            "Projects predictive healthcare models, fintech fraud detectors, AI-powered marketing tools",
        },
      ],
      curriculumSubtitle: "4 modules · 55+ lectures · 6 projects",
      modules: [
        {
          title: "AI in Healthcare",
          meta: "",
          topics: [],
        },
        {
          title: "AI in Finance (FinTech)",
          meta: "",
          topics: [],
        },
        {
          title: "AI in Digital Marketing",
          meta: "",
          topics: [],
        },
        {
          title: "Building & Presenting Business Projects",
          meta: "",
          topics: [],
        },
      ],
      tools: ["AI/ML Platforms", "Industry Datasets"],
      careerIntro:
        "Build intelligent solutions across healthcare, fintech and digital marketing and present them as real business projects.",
      roles: [
        "AI Solutions Consultant",
        "Healthcare AI Analyst",
        "FinTech AI Analyst",
        "AI Marketing Specialist",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "Generative AI & Prompt Engineering, AI for Business Strategy, or Product Management and Digital Business with AI.",
    },
  },

  //Machine Learning Courses
  {
    slug: "ml-bootcamp",
    brochureUrl: "/Old Course/Machine Learning/AI & Machine Learning with Python.pdf",
    brochureSizeMB: 11.5,
    cat: "Machine Learning",
    title: "AI & Machine Learning with Python 90 Days Job-Ready Career Track",
    days: 90,
    duration: "90 Days",
    lectures: "75+ Lectures",
    projects: "8 Projects",
    mode: "Online",
    tag: "",
    img: "/courses/python-ai.jpeg",
    blurb:
      "Master AI and Machine Learning using Python build ML models, visualize data, and deploy AI solutions with a real portfolio.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "To help learners build a strong foundation in AI & ML using Python, understand how to apply machine learning to real problems, and gain practical experience with data preprocessing, model building, evaluation, and deployment. You'll build a job-ready portfolio while learning the tools and algorithms used by AI engineers worldwide.",
      ],
      eligibility: [
        "Students and freshers with basic Python knowledge",
        "Working professionals switching to AI/ML",
        "Developers looking to enter AI product teams",
        "Entrepreneurs building data-driven products",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments solve classification and regression problems, clean real datasets, and visualize insights",
        },
        {
          n: "02",
          title:
            "Quizzes concept checks on ML theory, Python libraries, statistics, and neural networks",
        },
        {
          n: "03",
          title:
            "Live Sessions model walkthroughs, data science project reviews, and mentoring for job readiness",
        },
        {
          n: "04",
          title:
            "Projects build models like fraud detectors, recommendation systems, and image classifiers",
        },
      ],
      curriculumSubtitle: "8 modules · 75+ lectures · 8 projects",
      modules: [
        {
          title: "Python for AI & Data Science",
          meta: "",
          topics: [],
        },
        {
          title: "Statistics & Math for Machine Learning",
          meta: "",
          topics: [],
        },
        {
          title: "Data Preprocessing & Feature Engineering",
          meta: "",
          topics: [],
        },
        {
          title: "Supervised Machine Learning",
          meta: "",
          topics: [],
        },
        {
          title: "Unsupervised Learning & Clustering",
          meta: "",
          topics: [],
        },
        {
          title: "Model Optimization & Evaluation",
          meta: "",
          topics: [],
        },
        {
          title: "Intro to Deep Learning & Neural Networks",
          meta: "",
          topics: [],
        },
        {
          title: "ML Model Deployment (Optional Add-On)",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      careerIntro:
        "Build a job-ready portfolio with the tools and algorithms used by AI engineers worldwide.",
      roles: ["AI Engineer", "Data Scientist", "Machine Learning Engineer"],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "Deep Learning & Neural Networks with TensorFlow & Keras, Data Science with Python, or AI Foundations with Python.",
    },
  },

  //Data Science Courses
  {
    slug: "data-science",
    brochureUrl: "/Old Course/Data Science/Data Science.pdf",
    brochureSizeMB: 6.75,
    cat: "Data Science",
    title:
      "Data Science & Analytics with Python + Power BI - 60 Days Career Track",
    days: 60,
    duration: "60 Days",
    lectures: "60+ Lectures",
    projects: "6 Projects",
    mode: "Hybrid",
    tag: "",
    img: unsplash("1571677246347-5040036b95cc"),
    blurb:
      "Pandas, SQL, visualization and storytelling with data a complete analyst toolkit.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "To help learners build confidence and capability in working with structured and unstructured data, performing exploratory data analysis (EDA), creating dashboards, and extracting insights that drive business decisions.",
      ],
      eligibility: [
        "Students, business grads, and freshers",
        "Aspiring data analysts or business intelligence professionals",
        "Non-tech working professionals transitioning into data roles",
        "Freelancers, marketers, and managers seeking data literacy",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments practical hands-on exercises using Python and Power BI",
        },
        {
          n: "02",
          title:
            "Quizzes assessments to reinforce data analysis and visualization concepts",
        },
        {
          n: "03",
          title:
            "Live Sessions interactive discussions on key concepts and real-life business cases",
        },
        {
          n: "04",
          title:
            "Projects build real business dashboards and data analysis projects",
        },
      ],
      curriculumSubtitle: "6 modules · 60+ lectures · 6 projects",
      modules: [
        {
          title: "Introduction to Data Science & Analytics",
          meta: "",
          topics: [],
        },
        {
          title: "Python for Data Analytics",
          meta: "",
          topics: [],
        },
        {
          title: "Data Visualization with Python",
          meta: "",
          topics: [],
        },
        {
          title: "SQL for Analysts (Structured Query Language)",
          meta: "",
          topics: [],
        },
        {
          title: "Power BI Dashboards & DAX",
          meta: "",
          topics: [],
        },
        {
          title: "Final Project + Reporting",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Python", "SQL", "Power BI", "DAX"],
      careerIntro:
        "Build real business dashboards and data analysis projects that translate insights into business actions.",
      roles: [
        "Data Analyst",
        "Business Intelligence Analyst",
        "Reporting Analyst",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "AI & Machine Learning with Python, Business Analytics and MIS Reporting with Excel, SQL and Power BI, or Deep Learning & Neural Networks with TensorFlow & Keras.",
    },
  },

  //Programming Courses
  {
    slug: "python-programming-gateway-ai-ml",
    brochureUrl: "/Old Course/Programming/Python Programming.pdf",
    brochureSizeMB: 11.67,
    cat: "Programming",
    title: "Python Programming – Gateway to AI & Machine Learning",
    days: 30,
    duration: "30 Days",
    lectures: "24 Lectures",
    projects: "4 Projects",
    mode: "Online",
    tag: "New",
    img: unsplash("1526379095098-d400fd0bf935"),
    blurb:
      "No fluff 30 days of practical Python that sets you up for freelancing, internships, or advanced ML and Data Science courses.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "This hands-on Python course is designed to teach you the fundamentals of programming and help you transition into more advanced fields like AI, machine learning, or data analysis. We start from zero no prior coding knowledge required and walk you through the basics of variables, loops, functions, and file handling.",
        "You will write code daily, complete logic challenges, build working mini projects, and understand how Python is used to automate tasks and power real-world applications. By the end, you'll be able to read and write clean Python code, solve beginner problems, and build projects that you can show off on GitHub or in interviews.",
      ],
      eligibility: [
        "Complete beginners no prior coding knowledge required",
        "Anyone who wants to automate tasks, work with data, or start toward AI and ML",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "10+ Assignments coding assignments uploaded to GitHub or shared in Slack, designed for logic building and skill development",
        },
        {
          n: "02",
          title:
            "15+ Quizzes short quizzes and brain teasers after each module to lock in your learning",
        },
        {
          n: "03",
          title:
            "Live Sessions live weekly coding reviews and real-time debugging with mentors",
        },
        {
          n: "04",
          title: "4+ Projects you'll work on 4 practical projects",
        },
      ],
      curriculumSubtitle: "8 modules · 24 lectures · 4 projects",
      modules: [
        {
          title: "Getting Started with Python",
          meta: "",
          topics: [],
        },
        {
          title: "Variables, Data Types & Operators",
          meta: "",
          topics: [],
        },
        {
          title: "Conditions & Loops",
          meta: "",
          topics: [],
        },
        {
          title: "Functions & Code Structuring",
          meta: "",
          topics: [],
        },
        {
          title: "Data Structures in Python",
          meta: "",
          topics: [],
        },
        {
          title: "File Handling & Python Automation",
          meta: "",
          topics: [],
        },
        {
          title: "Your First Steps Toward ML",
          meta: "",
          topics: [],
        },
        {
          title: "Final Project & GitHub Portfolio",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Python", "GitHub"],
      careerIntro:
        "Positions in Data Science and Machine Learning are in high demand build the confidence and portfolio to navigate interviews for roles like Data Analyst or Machine Learning Engineer.",
      roles: ["Data Analyst", "Machine Learning Engineer"],
      benefits: [
        {
          title: "Course Certificate",
          body: "Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
        },
        {
          title: "Ready for interviews",
          body: "Positions in Data Science and Machine Learning are in high demand in today's competitive job market. As a Data Analyst, Machine Learning Engineer etc. The increased confidence gained through mastering these concepts will help you navigate interviews with ease!",
        },
      ],
      nextStep:
        "AI & Machine Learning with Python, AI Foundations with Python, or Data Science & Analytics with Python + Power BI.",
    },
  },

  {
    slug: "shell-scripting",
    brochureUrl: "/Old Course/Programming/Shell Scripting.pdf",
    brochureSizeMB: 11.61,
    cat: "Programming",
    title: "Shell Scripting - 30 Days Hands-On Training",
    days: 30,
    duration: "30 Days",
    lectures: "24 Lectures",
    projects: "3 Projects",
    mode: "Online",
    tag: "",
    img: unsplash("1629654297299-c8506221ca97"),
    blurb:
      "Master the Linux terminal, write powerful Bash scripts, and automate real tasks like a pro.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "This course is your fast-track to writing Bash shell scripts on Linux. You'll learn the fundamentals of scripting variables, loops, conditionals, functions and quickly move into real-world applications like file manipulation, automation, cron jobs, and system monitoring.",
        "We won't just teach syntax. We'll teach how to think in Bash, debug scripts, and turn logic into actual, useful tools whether you're working with Kali Linux, Ubuntu, Red Hat, or any other flavor of Linux. By the end, you'll be automating repetitive tasks, creating custom command-line tools, and feeling right at home inside the terminal.",
      ],
      eligibility: [
        "Basic Linux/terminal knowledge",
        "Any cybersecurity, DevOps, or system admin background (optional, but helpful)",
        "No prior coding experience required we teach from scratch",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "10+ Assignments daily script challenges covering logic building, conditional workflows, and real use cases",
        },
        {
          n: "02",
          title:
            "10+ Quizzes syntax checks, script flow puzzles, and debugging logic tests after each module",
        },
        {
          n: "03",
          title:
            "Live Sessions weekly coding walkthroughs, script reviews, automation demos, and live error solving with mentors",
        },
        {
          n: "04",
          title:
            "3+ Projects you'll build 3+ practical tools using Shell Scripting",
        },
      ],
      curriculumSubtitle: "7 modules · 24 lectures · 3 projects",
      modules: [
        {
          title: "Shell Scripting Basics",
          meta: "",
          topics: [],
        },
        {
          title: "Logic & Conditionals",
          meta: "",
          topics: [],
        },
        {
          title: "Loops & Input",
          meta: "",
          topics: [],
        },
        {
          title: "Functions & Reusability",
          meta: "",
          topics: [],
        },
        {
          title: "File Operations & String Handling",
          meta: "",
          topics: [],
        },
        {
          title: "Scheduling & Task Automation",
          meta: "",
          topics: [],
        },
        {
          title: "Debugging & Best Practices",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Bash", "Kali Linux", "Ubuntu", "Red Hat"],
      careerIntro:
        "Positions in Data Science and Machine Learning are in high demand in today's competitive job market. As a Data Analyst, Machine Learning Engineer etc.",
      roles: ["Linux Administrator", "DevOps Engineer", "IT Support Engineer"],
      benefits: [
        {
          title: "Course Certificate",
          body: "Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
        },
        {
          title: "Ready for interviews",
          body: "Positions in Data Science and Machine Learning are in high demand in today's competitive job market. As a Data Analyst, Machine Learning Engineer etc. The increased confidence gained through mastering these concepts will help you navigate interviews with ease!",
        },
      ],
      nextStep:
        "Linux Administration, DevOps Essentials, or Cloud Computing with AWS.",
    },
  },
  {
    slug: "python-offensive-pentest",
    brochureUrl: "/Old Course/Programming/Python for Offensive PenTest 45.pdf",
    brochureSizeMB: 11.41,
    cat: "Programming",
    title: "Python for Offensive PenTest - 45 Days Hands-On Training",
    days: 45,
    duration: "45 Days",
    lectures: "30 Lectures",
    projects: "4 Projects",
    mode: "Online",
    tag: "",
    img: unsplash("1516110833967-0b5716ca1387"),
    blurb:
      "Use Python to build your own pentesting tools, write exploits, craft payloads, and simulate red team actions.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "This 45-day course teaches you how to leverage Python for real-world offensive security work from automating recon to building port scanners, brute forcers, keyloggers, backdoors, and reporting bots. You'll use popular libraries like socket, scapy, requests, paramiko, and nmap to code your own attack tools.",
        "Each lesson is practical, each project solves a real security problem, and by the end, you will be able to confidently say, I built this exploit from scratch. Whether you are preparing for OSCP, PNPT, or bug bounty programs, this course is your hacker toolkit coded in Python.",
      ],
      eligibility: [
        "Basic Python knowledge (variables, loops, functions, imports)",
        "Prior exposure to cybersecurity, Linux, or ethical hacking",
        "Completion of Eduden's Python Basics or Ethical Hacking course is highly recommended",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "10+ Assignments custom scripting tasks covering network mapping, payload crafting, packet sniffing, file exfiltration, and bypass automation",
        },
        {
          n: "02",
          title:
            "15+ Quizzes knowledge checks after each concept, focusing on code logic, vulnerability use-cases, and script performance",
        },
        {
          n: "03",
          title:
            "Live Sessions weekly coding breakdowns, malware analysis labs, and exploit build challenges with real red teamers",
        },
        {
          n: "04",
          title:
            "4+ Projects you'll build 4 key offensive tools, plus a final all-in-one framework",
        },
      ],
      curriculumSubtitle: "6 modules · 30 lectures · 4 projects",
      modules: [
        {
          title: "Offensive Python 101",
          meta: "",
          topics: [],
        },
        {
          title: "Recon & Enumeration Scripts",
          meta: "",
          topics: [],
        },
        {
          title: "Brute Force & Credential Harvesting",
          meta: "",
          topics: [],
        },
        {
          title: "Packet Sniffing & Traffic Analysis",
          meta: "",
          topics: [],
        },
        {
          title: "Exploits & Payloads",
          meta: "",
          topics: [],
        },
        {
          title: "Automation & Post Exploitation",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Python", "socket", "scapy", "requests", "paramiko", "nmap"],
      careerIntro:
        "Positions in Data Science and Machine Learning are in high demand in today's competitive job market. As a Data Analyst, Machine Learning Engineer etc.",
      roles: ["Penetration Tester", "Red Teamer", "Exploit Developer"],
      benefits: [
        {
          title: "Course Certificate",
          body: "Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
        },
        {
          title: "Ready for interviews",
          body: "Positions in Data Science and Machine Learning are in high demand in today's competitive job market. As a Data Analyst, Machine Learning Engineer etc. The increased confidence gained through mastering these concepts will help you navigate interviews with ease!",
        },
      ],
      nextStep:
        "Advanced Network Pentesting, Cybersecurity Advanced Red Team/Blue Team, or Start Bug Bounty Hunting.",
    },
  },
  {
    slug: "web-development-basics",
    brochureUrl: "/Old Course/Programming/Web Development Basics.pdf",
    brochureSizeMB: 9.28,
    cat: "Programming",
    title: "Web Development Basics - 45 Days Hands-On Course",
    days: 45,
    duration: "45 Days",
    lectures: "30 Lectures",
    projects: "3 Projects",
    mode: "Online",
    tag: "New",
    img: unsplash("1547658719-da2b51169166"),
    blurb:
      "Zero-to-hero: build modern, responsive websites using HTML, CSS, and JavaScript.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "This 45-day course takes you through the core concepts of frontend development, teaching you to build, style, and make websites interactive using HTML, CSS, and JavaScript. You'll also learn how to structure pages, work with layout systems like Flexbox and Grid, add animations, and even make your site mobile-responsive.",
      ],
      eligibility: [
        "No prior coding experience required",
        "Ideal for students, designers, or aspiring developers who want to start from scratch",
        "Anyone interested in freelancing, tech jobs, or building personal websites",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "10+ Assignments practical tasks including form design, responsive layout building, navbar creation, and image sliders",
        },
        {
          n: "02",
          title:
            "25+ Quizzes quick quizzes after each module to strengthen syntax, logic, and web architecture understanding",
        },
        {
          n: "03",
          title:
            "Live Sessions weekly live code-alongs, troubleshooting sessions, and project reviews with mentors",
        },
        {
          n: "04",
          title: "3+ Projects you'll build 3+ fully functional websites",
        },
      ],
      curriculumSubtitle: "6 modules · 30 lectures · 3 projects",
      modules: [
        {
          title: "HTML Fundamentals",
          meta: "",
          topics: [],
        },
        {
          title: "CSS Styling",
          meta: "",
          topics: [],
        },
        {
          title: "JavaScript Basics",
          meta: "",
          topics: [],
        },
        {
          title: "Real Project Work",
          meta: "",
          topics: [],
        },
        {
          title: "Final Project & Portfolio",
          meta: "",
          topics: [],
        },
        {
          title: "Automation & Post Exploitation",
          meta: "",
          topics: [],
        },
      ],
      tools: ["HTML", "CSS", "JavaScript", "Flexbox", "Grid"],
      careerIntro:
        "Positions in Data Science and Machine Learning are in high demand in today's competitive job market. As a Data Analyst, Machine Learning Engineer etc.",
      roles: ["Frontend Developer", "Freelance Web Developer"],
      benefits: [
        {
          title: "Course Certificate",
          body: "Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
        },
        {
          title: "Ready for interviews",
          body: "Positions in Data Science and Machine Learning are in high demand in today's competitive job market. As a Data Analyst, Machine Learning Engineer etc. The increased confidence gained through mastering these concepts will help you navigate interviews with ease!",
        },
      ],
      nextStep:
        "Full-Stack Web Development, Python Programming – Gateway to AI & Machine Learning, or Graphics Design Pro.",
    },
  },
  {
    slug: "wordpress-mastery",
    brochureUrl: "/Old Course/Programming/WordPress Mastery.pdf",
    brochureSizeMB: 8.63,
    cat: "Programming",
    title: "WordPress Mastery: Build, Design & Sell",
    days: 90,
    duration: "90 Days",
    lectures: "50 Lectures",
    projects: "5 Projects",
    mode: "Online",
    tag: "New",
    img: unsplash("1522542550221-31fd19575a2d"),
    blurb:
      "Build stunning websites, design like a pro with Elementor, and launch your own eCommerce store with WooCommerce.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "Over 90 days, you'll master the complete WordPress ecosystem from installing and customizing themes to designing full websites with Elementor and setting up secure online stores with WooCommerce.",
        "We'll also cover SEO, plugins, blogging, security, speed optimization, payments, and automation all hands-on, all beginner-friendly. By the end, you'll walk away with real client-ready websites, a personal portfolio, and the skills to freelance or build your own online business.",
      ],
      eligibility: [
        "No prior coding or design experience required",
        "Suitable for students, freelancers, business owners, bloggers, or marketers",
        "Weekly code-free design reviews, speed optimization workshops, and portfolio walkthroughs with mentors",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "10+ Assignments website tasks, plugin experiments, page design drills, and real-world eCommerce simulations, all with instructor feedback",
        },
        {
          n: "02",
          title:
            "15+ Quizzes quick-check quizzes on WordPress structure, plugin use, theme customization, and page-building logic",
        },
        {
          n: "03",
          title:
            "Live Sessions weekly live code-alongs, troubleshooting sessions, and project reviews with mentors",
        },
        {
          n: "04",
          title: "5+ Projects you'll build at least 5 real websites",
        },
      ],
      curriculumSubtitle: "7 modules · 50 lectures · 5 projects",
      modules: [
        {
          title: "Getting Started with WordPress",
          meta: "",
          topics: [],
        },
        {
          title: "Designing with Elementor",
          meta: "",
          topics: [],
        },
        {
          title: "Full Website Customization",
          meta: "",
          topics: [],
        },
        {
          title: "WooCommerce & eCommerce Setup",
          meta: "",
          topics: [],
        },
        {
          title: "SEO, Speed & Security",
          meta: "",
          topics: [],
        },
        {
          title: "Blogging, Email, & Automation",
          meta: "",
          topics: [],
        },
        {
          title: "Portfolio, Freelance & Monetization",
          meta: "",
          topics: [],
        },
      ],
      tools: ["WordPress", "Elementor", "WooCommerce"],
      careerIntro:
        "Positions in Data Science and Machine Learning are in high demand in today's competitive job market. As a Data Analyst, Machine Learning Engineer etc.",
      roles: [
        "Freelance Web Designer",
        "WordPress Developer",
        "eCommerce Store Builder",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
        },
        {
          title: "Ready for interviews",
          body: "Positions in Data Science and Machine Learning are in high demand in today's competitive job market. As a Data Analyst, Machine Learning Engineer etc. The increased confidence gained through mastering these concepts will help you navigate interviews with ease!",
        },
      ],
      nextStep:
        "Web Development Basics, Full-Stack Web Development, or Digital Marketing Launchpad.",
    },
  },
  {
    slug: "js-react-nextjs-mastery",
    brochureUrl: "/Old Course/Programming/JavaScript, React & Next Mastery.pdf",
    brochureSizeMB: 10.28,
    cat: "Programming",
    title: "JavaScript, React & Next.js Mastery - 90 Days Career Track",
    days: 90,
    duration: "90 Days",
    lectures: "55 Lectures",
    projects: "6 Projects",
    mode: "Online",
    tag: "New",
    img: unsplash("1633356122544-f134324a6cee"),
    blurb:
      "Master modern JavaScript, React, and build production-ready, SEO-optimized apps with Next.js.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "This course is your complete roadmap to becoming a modern frontend developer using JavaScript, React & Next.js. You'll learn core logic, UI frameworks, state management, APIs, routing, authentication, deployment, and more all by building real apps.",
      ],
      eligibility: [
        "Basic understanding of HTML & CSS",
        "No prior JavaScript or React experience needed we teach it all",
        "Ideal for students, freelancers, aspiring devs, and career switchers",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "10+ Assignments component challenges, logic puzzles, form validation tasks, routing logic, and state exercises",
        },
        {
          n: "02",
          title:
            "15+ Quizzes module quizzes for JavaScript concepts, React component hierarchy, state management, and Next.js routing",
        },
        {
          n: "03",
          title:
            "Live Sessions weekly live coding sessions, project deep-dives, and performance optimization tips from working developers",
        },
        {
          n: "04",
          title: "6+ Projects you'll build 6 real apps",
        },
      ],
      curriculumSubtitle: "7 modules · 55 lectures · 6 projects",
      modules: [
        {
          title: "Modern JavaScript",
          meta: "",
          topics: [],
        },
        {
          title: "React Fundamentals",
          meta: "",
          topics: [],
        },
        {
          title: "React Advanced",
          meta: "",
          topics: [],
        },
        {
          title: "Next.js Foundations",
          meta: "",
          topics: [],
        },
        {
          title: "State Management & Auth",
          meta: "",
          topics: [],
        },
        {
          title: "Styling, Deployment & Portfolio",
          meta: "",
          topics: [],
        },
        {
          title: "Portfolio, Freelance & Monetization",
          meta: "",
          topics: [],
        },
      ],
      tools: ["JavaScript", "React", "Next.js"],
      careerIntro:
        "Positions in Data Science and Machine Learning are in high demand in today's competitive job market. As a Data Analyst, Machine Learning Engineer etc.",
      roles: ["Frontend Developer", "React Developer", "Next.js Developer"],
      benefits: [
        {
          title: "Course Certificate",
          body: "Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
        },
        {
          title: "Ready for interviews",
          body: "Positions in Data Science and Machine Learning are in high demand in today's competitive job market. As a Data Analyst, Machine Learning Engineer etc. The increased confidence gained through mastering these concepts will help you navigate interviews with ease!",
        },
      ],
      nextStep:
        "Full-Stack Web Development, Web Development Basics, or WordPress Mastery: Build, Design & Sell.",
    },
  },
  {
    slug: "backend-django",
    brochureUrl: "/Old Course/Programming/Backend Development with Django.pdf",
    brochureSizeMB: 10.77,
    cat: "Programming",
    title: "Backend Development with Django - 60 Days Hands-On Training",
    days: 60,
    duration: "60 Days",
    lectures: "45 Lectures",
    projects: "4 Projects",
    mode: "Online",
    tag: "New",
    img: unsplash("1555099962-4199c345e5dd"),
    blurb:
      "Build dynamic web apps, create APIs, manage databases, and launch secure backends with Python and Django.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "This course teaches you everything you need to know to build robust, scalable backends using Django one of the most powerful and popular web frameworks in the world. You'll go from setting up your first project to building real-world APIs, working with relational databases, handling user auth, and deploying to the cloud.",
        "You'll even explore Django Rest Framework (DRF) to make your apps mobile and frontend-ready. By the end of the course, you'll have 4 portfolio-ready apps, a fully functioning API, and the skills to work as a Django backend developer or build your own product.",
      ],
      eligibility: [
        "Basic Python knowledge required (functions, loops, conditionals)",
        "Familiarity with HTML/CSS helpful, but not mandatory",
        "Perfect for students, developers, and career switchers who want to go full-stack",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "10+ Assignments query building, model relationships, user auth flows, API creation, deployment walkthroughs, all hands-on and guided",
        },
        {
          n: "02",
          title:
            "15+ Quizzes mini assessments after each module to test your grasp on views, models, routes, auth logic, and database queries",
        },
        {
          n: "03",
          title:
            "Live Sessions weekly backend architecture walkthroughs, model design planning, DRF lab sessions, and code optimization support",
        },
        {
          n: "04",
          title: "4+ Projects you'll build 4 full backend applications",
        },
      ],
      curriculumSubtitle: "6 modules · 45 lectures · 4 projects",
      modules: [
        {
          title: "Django Basics",
          meta: "",
          topics: [],
        },
        {
          title: "Models & Databases",
          meta: "",
          topics: [],
        },
        {
          title: "Views, Forms & Templates",
          meta: "",
          topics: [],
        },
        {
          title: "Authentication & Permissions",
          meta: "",
          topics: [],
        },
        {
          title: "Django REST Framework",
          meta: "",
          topics: [],
        },
        {
          title: "Deployment & Project Launch",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Python", "Django", "Django REST Framework"],
      careerIntro:
        "Positions in Data Science and Machine Learning are in high demand in today's competitive job market. As a Data Analyst, Machine Learning Engineer etc.",
      roles: [
        "Django Backend Developer",
        "Full-Stack Developer",
        "API Developer",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
        },
        {
          title: "Ready for interviews",
          body: "Positions in Data Science and Machine Learning are in high demand in today's competitive job market. As a Data Analyst, Machine Learning Engineer etc. The increased confidence gained through mastering these concepts will help you navigate interviews with ease!",
        },
      ],
      nextStep:
        "Full-Stack Web Development, JavaScript, React & Next.js Mastery, or Python Programming – Gateway to AI & Machine Learning.",
    },
  },
  {
    slug: "backend-nodejs",
    brochureUrl: "/Old Course/Programming/Backend Development with Node.pdf",
    brochureSizeMB: 10.98,
    cat: "Programming",
    title: "Backend Development with Node.js - 60 Days Hands-On Training",
    days: 60,
    duration: "60 Days",
    lectures: "40+ Lectures",
    projects: "4 Projects",
    mode: "Online",
    tag: "New",
    img: unsplash("1627398242454-45a1465c2479"),
    blurb:
      "Build fast, scalable RESTful APIs, handle user authentication, work with MongoDB, and deploy full backend systems.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "In 60 days, you'll learn to build powerful backend applications using Node.js, Express.js, and MongoDB. You'll start with creating basic server logic, then advance into building full authentication systems, CRUD APIs, middleware logic, and real-world API endpoints used in modern web and mobile apps.",
        "We'll even show you how to secure, document, and deploy your apps to production. By the end of this course, you'll have multiple backend projects, a resume-worthy REST API, and the confidence to call yourself a JavaScript backend developer.",
      ],
      eligibility: [
        "Basic JavaScript knowledge (variables, functions, arrays)",
        "Familiarity with any frontend tech (React, HTML, CSS) is helpful but not required",
        "Perfect for aspiring full-stack devs, freelancers, or backend beginners",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments request/response cycle practice, database modeling, API routing, token-based auth flows, and deployment tasks",
        },
        {
          n: "02",
          title:
            "Quizzes assess your skills on topics like Node.js core modules, Express routing, MongoDB schemas, and REST standards",
        },
        {
          n: "03",
          title:
            "Live Sessions weekly live coding walkthroughs, debugging sessions, API design reviews, and architectural breakdowns",
        },
        {
          n: "04",
          title: "Projects you'll build 4 backend projects using Node.js",
        },
      ],
      curriculumSubtitle: "6 modules · 40+ lectures · 4 projects",
      modules: [
        {
          title: "Introduction to Node.js",
          meta: "",
          topics: [],
        },
        {
          title: "Express.js for Routing & Middleware",
          meta: "",
          topics: [],
        },
        {
          title: "MongoDB & Mongoose",
          meta: "",
          topics: [],
        },
        {
          title: "Authentication & Security",
          meta: "",
          topics: [],
        },
        {
          title: "API Standards & Testing",
          meta: "",
          topics: [],
        },
        {
          title: "Deployment & Final Project",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      careerIntro:
        "Positions in Data Science and Machine Learning are in high demand in today's competitive job market. As a Data Analyst, Machine Learning Engineer etc.",
      roles: [
        "Node.js Backend Developer",
        "Full-Stack Developer",
        "API Developer",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
        },
        {
          title: "Ready for interviews",
          body: "Positions in Data Science and Machine Learning are in high demand in today's competitive job market. As a Data Analyst, Machine Learning Engineer etc. The increased confidence gained through mastering these concepts will help you navigate interviews with ease!",
        },
      ],
      nextStep:
        "Full-Stack Web Development, Backend Development with Django, or JavaScript, React & Next.js Mastery.",
    },
  },
  {
    slug: "database-mastery-sql-nosql",
    brochureUrl: "/Old Course/Programming/Database Mastery.pdf",
    brochureSizeMB: 7.6,
    cat: "Programming",
    title:
      "Database Mastery: SQL + NoSQL (MongoDB & MariaDB) - 45 Days Hands-On Training",
    days: 45,
    duration: "45 Days",
    lectures: "30+ Lectures",
    projects: "4+ Projects",
    mode: "Online",
    tag: "New",
    img: unsplash("1607706189992-eae578626c86"),
    blurb:
      "SQL fundamentals, relational design and ER modeling plus hands-on MongoDB and MariaDB.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "Over 45 days, you'll go from designing normalized databases with ER diagrams and writing SQL queries to building and querying document-based data with MongoDB, and working with MariaDB a drop-in replacement for MySQL used globally by large-scale applications.",
        "This course blends classic RDBMS training (theory + MySQL/MariaDB) with modern NoSQL practice (MongoDB), preparing you for any project stack backend APIs, real-time dashboards, or eCommerce systems.",
      ],
      eligibility: [
        "No prior DB experience required",
        "Ideal for students, backend/full-stack learners, aspiring data analysts, or anyone prepping for tech interviews",
        "Basic programming logic (Python/JavaScript helpful, not required)",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments ER diagrams, relational schemas, query tasks in SQL and Mongo shell, NoSQL document structuring, data migration challenges",
        },
        {
          n: "02",
          title:
            "Quizzes topic-wise assessments on DBMS theory, SQL logic, Mongo syntax, indexing, and schema best practices",
        },
        {
          n: "03",
          title:
            "Live Sessions schema reviews, query live coding, data modeling walkthroughs, and system design challenges weekly with mentors",
        },
        {
          n: "04",
          title: "Projects you'll build 4 hands-on database applications",
        },
      ],
      curriculumSubtitle: "6 modules · 30+ lectures · 4+ projects",
      modules: [
        {
          title: "DBMS & Relational Thinking",
          meta: "",
          topics: [],
        },
        {
          title: "SQL with MySQL & MariaDB",
          meta: "",
          topics: [],
        },
        {
          title: "MongoDB & NoSQL Basics",
          meta: "",
          topics: [],
        },
        {
          title: "Advanced MongoDB",
          meta: "",
          topics: [],
        },
        {
          title: "Cross-DB Integration & Use-Cases",
          meta: "",
          topics: [],
        },
        {
          title: "Final Project & Interview Prep",
          meta: "",
          topics: [],
        },
      ],
      tools: ["MySQL", "MariaDB", "MongoDB"],
      careerIntro:
        "Positions in database management and engineering are in high demand build the skills to secure roles in top tech companies.",
      roles: ["Database Administrator", "Backend Developer", "Data Analyst"],
      benefits: [
        {
          title: "Course Certificate",
          body: "Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Buying the course entitles you to access all course content. Once the period ends, you don't have to worry about recurring charges.",
        },
        {
          title: "Ready for interviews",
          body: "Positions in database management and engineering are in high demand. The confidence gained through mastering these concepts will help you navigate interviews with ease and secure roles in top tech companies.",
        },
      ],
      nextStep:
        "Backend Development with Django, Backend Development with Node.js, or Data Science & Analytics with Python + Power BI.",
    },
  },
  {
    slug: "mern-stack-developer",
    brochureUrl: "/Old Course/Programming/MERN Stack Developer.pdf",
    brochureSizeMB: 8.78,
    cat: "Programming",
    title: "MERN Stack Developer - 6 Months Hands-On Training",
    days: 180,
    duration: "6 Months",
    lectures: "90+ Lectures",
    projects: "8 Projects",
    mode: "Hybrid",
    tag: "New",
    img: unsplash("1633356122102-3fe601e05bd2"),
    blurb:
      "Build dynamic apps using React, Node, Express, and MongoDB integrate, secure, and deploy your own full-stack projects.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "This hands-on 6-month program is ideal for beginners and those with basic frontend experience who want to transition into full stack MERN development. Learn by building projects from day one and become job-ready with real deployment skills.",
      ],
      eligibility: [
        "Students (12th pass or graduates)",
        "Working professionals looking to switch to tech",
        "Frontend developers looking to go full stack",
        "Entrepreneurs & freelancers wanting to build & launch real apps",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments complete hands-on assignments to master the MERN stack, including MongoDB, Express, React, and Node.js",
        },
        {
          n: "02",
          title:
            "Quizzes test your knowledge of MERN stack concepts after each module",
        },
        {
          n: "03",
          title:
            "Live Sessions live, interactive coding sessions where you can ask questions, collaborate with peers, and get expert feedback",
        },
        {
          n: "04",
          title:
            "Projects build 8 practical projects, such as product catalogs, APIs, dashboards, and booking systems",
        },
      ],
      curriculumSubtitle: "6 modules · 90+ lectures · 8 projects",
      modules: [
        {
          title: "JavaScript & Web Fundamentals (3 Weeks)",
          meta: "",
          topics: [],
        },
        {
          title: "React – Frontend Development (6 Weeks)",
          meta: "",
          topics: [],
        },
        {
          title: "Node.js & Express – Backend API Development (6 Weeks)",
          meta: "",
          topics: [],
        },
        {
          title: "MongoDB – Database Design (3 Weeks)",
          meta: "",
          topics: [],
        },
        {
          title: "MERN Stack Integration (5 Weeks)",
          meta: "",
          topics: [],
        },
        {
          title: "Deployment, Hosting & DevOps Basics (2 Weeks)",
          meta: "",
          topics: [],
        },
      ],
      tools: ["MongoDB", "Express.js", "React", "Node.js"],
      careerIntro:
        "Become job-ready with real deployment skills across the full MERN stack.",
      roles: [
        "MERN Stack Developer",
        "Full Stack Developer",
        "Frontend Developer",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "Diploma in Full Stack Programming, JavaScript, React & Next.js Mastery, or Backend Development with Node.js.",
    },
  },
  {
    slug: "diploma-full-stack-programming",
    brochureUrl: "/Old Course/Programming/Diploma in Full Stack Programming.pdf",
    brochureSizeMB: 6.05,
    cat: "Programming",
    title: "Diploma in Full Stack Programming - 9 Months Career Track",
    days: 270,
    duration: "9 Months",
    lectures: "120+ Lectures",
    projects: "12 Projects",
    mode: "Hybrid",
    tag: "New",
    img: unsplash("1517430816045-df4b7de11d1d"),
    blurb:
      "A complete job-ready full stack web development program React, Next.js, Django and real-world databases.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "Designed for students, working professionals, and entrepreneurs, this 9-month hybrid diploma covers everything from web basics to advanced deployment. You'll graduate with a solid portfolio, job prep, and the confidence to take on real tech roles.",
      ],
      eligibility: [
        "Students (12th pass or graduates from any stream)",
        "Working professionals looking to switch careers",
        "Freelancers and entrepreneurs wanting to build real tech products",
        "Anyone passionate about building web apps, even without coding background",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments hands-on assignments covering React, Next.js, Django, PostgreSQL, and MongoDB",
        },
        {
          n: "02",
          title:
            "Quizzes reinforce your understanding of full stack concepts after each module",
        },
        {
          n: "03",
          title:
            "Live Sessions live coding sessions where you can ask questions and get real-time feedback",
        },
        {
          n: "04",
          title:
            "Projects work on 10+ real-world projects, including blogs, APIs, and ecommerce platforms",
        },
      ],
      curriculumSubtitle: "6 modules · 120+ lectures · 12 projects",
      modules: [
        {
          title: "Programming & Web Fundamentals (1 Month)",
          meta: "",
          topics: [],
        },
        {
          title: "React.js – Frontend Development (2 Months)",
          meta: "",
          topics: [],
        },
        {
          title: "Next.js – Server-Side Frontend (1.5 Months)",
          meta: "",
          topics: [],
        },
        {
          title: "Django – Backend API Development (2 Months)",
          meta: "",
          topics: [],
        },
        {
          title: "PostgreSQL + MongoDB – Database Design (1 Month)",
          meta: "",
          topics: [],
        },
        {
          title: "Full Stack Integration, DevOps & Final Capstone (1.5 Months)",
          meta: "",
          topics: [],
        },
      ],
      tools: ["React", "Next.js", "Django", "PostgreSQL", "MongoDB"],
      careerIntro:
        "Graduate with a solid portfolio, job prep, and the confidence to take on real full stack tech roles.",
      roles: [
        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "JavaScript, React & Next.js Mastery, Backend Development with Django, or Database Mastery: SQL + NoSQL (MongoDB & MariaDB).",
    },
  },
  {
    slug: "web3-dapp-development",
    brochureUrl: "/Old Course/Programming/Web3 & dApp Development.pdf",
    brochureSizeMB: 11.46,
    cat: "Programming",
    title: "Web3 & dApp Development – Full Stack Blockchain in 60 Days",
    days: 60,
    duration: "60 Days",
    lectures: "65+ Lectures",
    projects: "6 Projects",
    mode: "Hybrid",
    tag: "New",
    img: unsplash("1622630998477-20aa696ecb05"),
    blurb:
      "Ethereum fundamentals, Solidity smart contracts, frontend dApp integration and NFT marketplaces.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "To equip learners with the skills and tools to build decentralized applications using Ethereum smart contracts and connect them to web interfaces with modern Web3 libraries. Students will also explore NFT creation, smart contract deployment, and dApp monetization.",
      ],
      eligibility: [
        "Frontend or backend developers (React/JS/Python preferred)",
        "Blockchain & crypto-curious learners",
        "Startup founders building Web3 MVPs",
        "Freelancers aiming to enter the NFT and DeFi world",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments practice writing smart contracts, integrating wallets, and interacting with the Ethereum blockchain",
        },
        {
          n: "02",
          title:
            "Quizzes test your understanding of Web3 concepts, Solidity, dApp architecture, and blockchain workflows",
        },
        {
          n: "03",
          title:
            "Live Sessions expert-led sessions on smart contract design, frontend integration, and real-world Web3 challenges",
        },
        {
          n: "04",
          title:
            "Projects build and deploy complete dApps including NFT minting platforms, custom tokens, and DeFi features",
        },
      ],
      curriculumSubtitle: "7 modules · 65+ lectures · 6 projects",
      modules: [
        {
          title: "Web3 Fundamentals & Blockchain Basics",
          meta: "",
          topics: [],
        },
        {
          title: "Smart Contracts & Solidity Programming",
          meta: "",
          topics: [],
        },
        {
          title: "Smart Contract Deployment with Hardhat",
          meta: "",
          topics: [],
        },
        {
          title: "Frontend Integration with web3.js & ethers.js",
          meta: "",
          topics: [],
        },
        {
          title: "NFTs, Tokens & DeFi Basics",
          meta: "",
          topics: [],
        },
        {
          title: "IPFS, Gas Optimization & Security",
          meta: "",
          topics: [],
        },
        {
          title: "Final Project + dApp Deployment",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Solidity", "Hardhat", "web3.js", "ethers.js", "IPFS"],
      careerIntro:
        "Build and deploy complete dApps from NFT minting platforms to custom tokens and DeFi features.",
      roles: [
        "Blockchain Developer",
        "Smart Contract Developer",
        "Web3 Frontend Developer",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "Blockchain & Web3 Basics, JavaScript, React & Next.js Mastery, or Backend Development with Node.js.",
    },
  },

  //Cloud Computing Courses
  {
    slug: "aws-cloud",
    brochureUrl: "/Old Course/Cloud Computing/Cloud Computing with AWS.pdf",
    brochureSizeMB: 9.29,
    cat: "Cloud Computing",
    title:
      "Cloud Computing with AWS – Fundamentals (30 Days Hands-On Training)",
    days: 30,
    duration: "30 Days",
    lectures: "60 Lectures",
    projects: "5 Projects",
    mode: "Online",
    tag: "",
    img: unsplash("1558494949-ef010cbdcc31"),
    blurb:
      "Architect, deploy and secure real workloads on AWS aligned to certification paths.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "To help learners understand what cloud computing is, how AWS delivers cloud services, and how to create and manage real cloud infrastructure all from scratch. You'll learn everything from theory to hands-on practice: launching servers, configuring storage, working with AWS services like EC2, S3, IAM, and more all in a guided, no-fluff format.",
      ],
      eligibility: [
        "Beginners with no prior cloud experience",
        "Students & freshers preparing for cloud-based careers",
        "IT support, system admins, or developers exploring cloud roles",
        "Freelancers & tech entrepreneurs wanting to deploy cloud projects",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments hands-on labs to deploy real cloud infrastructure using AWS services like EC2, S3, and RDS",
        },
        {
          n: "02",
          title:
            "Quizzes test your knowledge on cloud computing concepts, AWS services, and best practices",
        },
        {
          n: "03",
          title:
            "Live Sessions interactive sessions with AWS professionals to guide you through the setup and configuration of AWS services",
        },
        {
          n: "04",
          title:
            "Projects work on deploying cloud projects such as websites and databases on AWS",
        },
      ],
      curriculumSubtitle: "6 modules · 60 lectures · 5 projects",
      modules: [
        {
          title: "Introduction to Cloud Computing & AWS",
          meta: "",
          topics: [],
        },
        {
          title: "Getting Started with AWS",
          meta: "",
          topics: [],
        },
        {
          title: "AWS Core Services – Compute, Storage, Networking",
          meta: "",
          topics: [],
        },
        {
          title: "Databases, Monitoring & Security",
          meta: "",
          topics: [],
        },
        {
          title: "High Availability & Serverless Concepts (Intro)",
          meta: "",
          topics: [],
        },
        {
          title: "Final Project + Interview Prep",
          meta: "",
          topics: [],
        },
      ],
      tools: ["EC2", "S3", "IAM", "RDS"],
      careerIntro:
        "Deploy real cloud projects such as websites and databases on AWS.",
      roles: [
        "Cloud Support Associate",
        "AWS Cloud Engineer",
        "DevOps Engineer",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "DevOps Essentials, Big Data Engineering – Hadoop, Spark, Kafka Career Track, or Cloud Security.",
    },
  },
  {
    slug: "aws-cloud-architect",
    brochureUrl: "/Old Course/Cloud Computing/Cloud Computing Architect with AWS.pdf",
    brochureSizeMB: 9.78,
    cat: "Cloud Computing",
    title: "Cloud Computing Architect with AWS - 90 Days Career Track",
    days: 90,
    duration: "90 Days",
    lectures: "90 Lectures",
    projects: "6 Projects",
    mode: "Online",
    tag: "New",
    img: unsplash("1523474253046-8cd2748b5fd2"),
    blurb:
      "Design, deploy, and manage scalable, secure, cost-efficient cloud architectures aligned to AWS Solutions Architect certifications.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "To train students, professionals, and tech entrepreneurs to design enterprise-grade cloud architectures using Amazon Web Services, covering compute, storage, databases, networking, high availability, fault tolerance, DevOps integration, and cost optimization. By the end of this course, you will be able to design and document full-scale AWS solutions, prepare for top AWS certifications, and apply for cloud architect, DevOps engineer, or infrastructure lead roles.",
      ],
      eligibility: [
        "IT professionals with 1+ year of experience in tech, DevOps, or cloud",
        "Developers/System Admins upgrading to architect roles",
        "Learners who have completed AWS Fundamentals or similar basics",
        "Startups/founders building scalable cloud-native products",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments hands-on labs and projects that simulate real-world AWS architecture and cloud infrastructure",
        },
        {
          n: "02",
          title:
            "Quizzes test your knowledge with quizzes covering each module's key concepts",
        },
        {
          n: "03",
          title:
            "Live Sessions live training sessions with experienced AWS professionals to clarify concepts and troubleshoot",
        },
        {
          n: "04",
          title:
            "Projects work on end-to-end AWS architecture projects, including cost-optimized, highly available, and secure solutions",
        },
      ],
      curriculumSubtitle: "6 modules · 90 lectures · 6 projects",
      modules: [
        {
          title: "AWS Architecture Foundations",
          meta: "",
          topics: [],
        },
        {
          title: "Compute, Load Balancing & Auto Scaling",
          meta: "",
          topics: [],
        },
        {
          title: "Networking & Security Architecture",
          meta: "",
          topics: [],
        },
        {
          title: "Storage, Databases & Content Delivery",
          meta: "",
          topics: [],
        },
        {
          title: "Monitoring, Cost Optimization & Automation",
          meta: "",
          topics: [],
        },
        {
          title: "Final Project + Certification/Interview Prep",
          meta: "",
          topics: [],
        },
      ],
      tools: ["AWS EC2", "Auto Scaling", "AWS Networking", "AWS Monitoring"],
      careerIntro:
        "Apply for cloud architect, DevOps engineer, or infrastructure lead roles and prepare for top AWS certifications.",
      roles: ["Cloud Architect", "DevOps Engineer", "Infrastructure Lead"],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "Cloud Computing with AWS – Fundamentals, DevOps Essentials, or Big Data Engineering – Hadoop, Spark, Kafka Career Track.",
    },
  },
  {
    slug: "azure-cloud",
    brochureUrl: "/Old Course/Cloud Computing/Cloud Computing with Azure.pdf",
    brochureSizeMB: 12.23,
    cat: "Cloud Computing",
    title: "Cloud Computing with Azure - 45 Days Fundamentals + Projects",
    days: 45,
    duration: "45 Days",
    lectures: "45 Lectures",
    projects: "6 Projects",
    mode: "Online",
    tag: "New",
    img: unsplash("1633419461186-7d40a38105ec"),
    blurb:
      "Deploy, manage, and secure cloud applications on Microsoft Azure prepping for the AZ-900 certification.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "To equip learners with the knowledge and hands-on skills to confidently use Azure cloud services, including VMs, storage, networking, databases, and identity management following Microsoft's cloud computing best practices. Whether you're planning to build your own cloud project, pursue certification, or land a cloud support/admin/dev job, this course sets you up right.",
      ],
      eligibility: [
        "Beginners with basic computer or IT knowledge",
        "Students, developers, or system admins exploring cloud",
        "Professionals preparing for AZ-900 certification",
        "Anyone switching from on-prem IT to cloud-based roles",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments hands-on labs and projects to get familiar with Azure services",
        },
        {
          n: "02",
          title:
            "Quizzes quiz after each module to test your understanding of cloud concepts",
        },
        {
          n: "03",
          title:
            "Live Sessions interactive sessions with Azure experts to help you master the platform",
        },
        {
          n: "04",
          title:
            "Projects work on real-world cloud projects such as deploying applications, configuring networks, and more",
        },
      ],
      curriculumSubtitle: "6 modules · 45 lectures · 6 projects",
      modules: [
        {
          title: "Introduction to Cloud & Azure Architecture",
          meta: "",
          topics: [],
        },
        {
          title: "Compute Services – Virtual Machines & Containers",
          meta: "",
          topics: [],
        },
        {
          title: "Azure Storage & Databases",
          meta: "",
          topics: [],
        },
        {
          title: "Networking in Azure",
          meta: "",
          topics: [],
        },
        {
          title: "Identity, Access & Monitoring",
          meta: "",
          topics: [],
        },
        {
          title: "Final Project + AZ-900 Prep",
          meta: "",
          topics: [],
        },
      ],
      tools: [
        "Azure VMs",
        "Azure Storage",
        "Azure Networking",
        "Azure Monitor",
      ],
      careerIntro:
        "Build your own cloud project, pursue AZ-900 certification, or land a cloud support/admin/dev job.",
      roles: [
        "Azure Cloud Support Associate",
        "Cloud Administrator",
        "Cloud Developer",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "Cloud Computing with AWS – Fundamentals, Cloud Computing Architect with AWS, or DevOps Essentials.",
    },
  },
  {
    slug: "cloudops-pro",
    brochureUrl: "/Old Course/Cloud Computing/CloudOps Pro.pdf",
    brochureSizeMB: 8.74,
    cat: "Cloud Computing",
    title: "CloudOps Pro – DevOps + Cloud Engineering Training (AWS + Azure)",
    days: 90,
    duration: "90 Days",
    lectures: "60 Lectures",
    projects: "7 Projects",
    mode: "Online",
    tag: "New",
    img: unsplash("1607743386760-88ac62b89b8a"),
    blurb:
      "Infrastructure provisioning, containerization, automation and production deployments on both AWS and Azure.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "This course is designed to equip you with end-to-end DevOps and cloud engineering skills. You'll learn how to provision cloud infrastructure, containerize applications, automate CI/CD pipelines, and deploy systems on both AWS and Azure. Whether you're transitioning into a DevOps role or upgrading your cloud skills, this course prepares you for high-demand positions in the industry.",
      ],
      eligibility: [
        "IT professionals with basic Linux or scripting experience",
        "Developers transitioning into DevOps/cloud roles",
        "Cloud beginners looking to upskill in automation",
        "Tech graduates preparing for high-demand DevOps jobs",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments hands-on labs and projects to practice DevOps automation and cloud provisioning",
        },
        {
          n: "02",
          title: "Quizzes test your knowledge with quizzes after each module",
        },
        {
          n: "03",
          title:
            "Live Sessions live training sessions with instructors to address doubts and clarify concepts",
        },
        {
          n: "04",
          title:
            "Projects work on real-world DevOps and cloud engineering projects to demonstrate your skills",
        },
      ],
      curriculumSubtitle: "7 modules · 60 lectures · 7 projects",
      modules: [
        {
          title: "DevOps Fundamentals + Linux Mastery",
          meta: "",
          topics: [],
        },
        {
          title: "AWS Cloud Services for DevOps",
          meta: "",
          topics: [],
        },
        {
          title: "CI/CD with Jenkins & GitHub Actions",
          meta: "",
          topics: [],
        },
        {
          title: "Docker & Kubernetes (AWS + Local)",
          meta: "",
          topics: [],
        },
        {
          title: "Infrastructure as Code (Terraform + CloudFormation)",
          meta: "",
          topics: [],
        },
        {
          title: "DevOps on Azure (Pipelines, Boards, Repos)",
          meta: "",
          topics: [],
        },
        {
          title: "Monitoring, Logging, & Security",
          meta: "",
          topics: [],
        },
      ],
      tools: [
        "Jenkins",
        "GitHub Actions",
        "Docker",
        "Kubernetes",
        "Terraform",
        "CloudFormation",
      ],
      careerIntro:
        "Get ready for DevOps, SRE, Cloud Engineer, and Platform Engineer roles.",
      roles: [
        "DevOps Engineer",
        "Site Reliability Engineer",
        "Cloud Engineer",
        "Platform Engineer",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "DevOps Essentials, Cloud Computing Architect with AWS, or Big Data Engineering – Hadoop, Spark, Kafka Career Track.",
    },
  },

  //Devops
  {
    slug: "devops",
    brochureUrl: "/Old Course/Devops/DevOps for Beginners.pdf",
    brochureSizeMB: 13.01,
    cat: "DevOps",
    title: "DevOps for Beginners – Foundation Track",
    days: 30,
    duration: "30 Days",
    lectures: "30 Lectures",
    projects: "5 Projects",
    mode: "Online",
    tag: "",
    img: unsplash("1573497491208-6b1acb260507"),
    blurb:
      "CI/CD, Docker, Kubernetes and infrastructure-as-code the modern delivery pipeline.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "In this foundational DevOps course, you'll learn the core concepts, tools, and methodologies that form the backbone of the DevOps ecosystem. From understanding the DevOps lifecycle to mastering essential tools like Linux, Git, and Bash scripting, you'll gain the confidence and skills to move forward into more advanced tools like Docker, Jenkins, AWS, and Kubernetes.",
      ],
      eligibility: [
        "Freshers and students (no tech background needed)",
        "System Admins, Developers, or Testers upskilling for DevOps",
        "Tech enthusiasts, freelancers, or job-switchers",
        "Anyone curious about automation, pipelines, and modern IT workflows",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments hands-on labs and exercises to practice DevOps essentials",
        },
        {
          n: "02",
          title:
            "Quizzes test your understanding of core DevOps concepts after each module",
        },
        {
          n: "03",
          title:
            "Live Sessions interactive sessions with instructors to clarify concepts and address questions",
        },
        {
          n: "04",
          title:
            "Projects work on practical projects that demonstrate your newly acquired skills",
        },
      ],
      curriculumSubtitle: "5 modules · 30 lectures · 5 projects",
      modules: [
        {
          title: "What is DevOps?",
          meta: "",
          topics: [],
        },
        {
          title: "Linux Essentials for DevOps",
          meta: "",
          topics: [],
        },
        {
          title: "Git & GitHub Version Control",
          meta: "",
          topics: [],
        },
        {
          title: "Shell Scripting for Automation",
          meta: "",
          topics: [],
        },
        {
          title: "DevOps Toolchain Overview",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Linux", "Git", "GitHub", "Bash"],
      careerIntro:
        "Move forward into more advanced tools like Docker, Jenkins, AWS, and Kubernetes.",
      roles: [
        "Junior DevOps Engineer",
        "Build & Release Engineer",
        "IT Automation Associate",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "CloudOps Pro – DevOps + Cloud Engineering Training (AWS + Azure), Shell Scripting, or Linux Pro – Advanced Server Admin & Automation (RHCE Focused).",
    },
  },
  {
    slug: "devops-mastery-advanced",
    brochureUrl: "/Old Course/Devops/DevOps Mastery.pdf",
    brochureSizeMB: 9.09,
    cat: "DevOps",
    title: "DevOps Mastery – 90 Days Advanced Career Track",
    days: 90,
    duration: "90 Days",
    lectures: "60 Lectures",
    projects: "7 Projects",
    mode: "Online",
    tag: "New",
    img: unsplash("1605745341112-85968b19335b"),
    blurb:
      "CI/CD, containerization, Kubernetes, Jenkins, and Terraform deploy applications across AWS, Azure, and GCP.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "Designed for learners with foundational DevOps knowledge, this course covers advanced concepts like infrastructure automation, container orchestration with Kubernetes, cloud deployment, and monitoring. The practical approach ensures you're not just learning tools, but becoming a production-ready DevOps pro capable of managing real-world DevOps workflows and cloud environments.",
      ],
      eligibility: [
        'Graduates of Eduden\'s "DevOps for Beginners" or equivalent',
        "IT professionals, developers, sysadmins looking to upskill",
        "Cloud practitioners moving into automation roles",
        "Anyone preparing for DevOps job roles, interviews or certifications",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments hands-on labs to practice automation, deployment, and cloud-based infrastructure management",
        },
        {
          n: "02",
          title:
            "Quizzes test your knowledge and skills with quizzes after each module",
        },
        {
          n: "03",
          title:
            "Live Sessions interactive instructor-led sessions for problem-solving and in-depth understanding",
        },
        {
          n: "04",
          title:
            "Projects work on real-world projects that demonstrate your advanced DevOps skills",
        },
      ],
      curriculumSubtitle: "8 modules · 60 lectures · 7 projects",
      modules: [
        {
          title: "DevOps Pipeline Architecture Deep Dive",
          meta: "",
          topics: [],
        },
        {
          title: "Docker & Containers – Pro Level",
          meta: "",
          topics: [],
        },
        {
          title: "Kubernetes (K8s) for Production",
          meta: "",
          topics: [],
        },
        {
          title: "Jenkins + GitHub Actions CI/CD Automation",
          meta: "",
          topics: [],
        },
        {
          title: "Infrastructure as Code with Terraform",
          meta: "",
          topics: [],
        },
        {
          title: "Configuration Management with Ansible",
          meta: "",
          topics: [],
        },
        {
          title: "Cloud Platforms (AWS Focus + Azure Intro)",
          meta: "",
          topics: [],
        },
        {
          title: "Monitoring, Logging & Security",
          meta: "",
          topics: [],
        },
      ],
      tools: [
        "Docker",
        "Kubernetes",
        "Jenkins",
        "GitHub Actions",
        "Terraform",
        "Ansible",
      ],
      careerIntro:
        "Prepare for roles such as DevOps Engineer, Cloud DevOps Specialist, or Site Reliability Engineer (SRE).",
      roles: [
        "DevOps Engineer",
        "Cloud DevOps Specialist",
        "Site Reliability Engineer",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "CloudOps Pro – DevOps + Cloud Engineering Training (AWS + Azure), Cloud Computing Architect with AWS, or Linux Pro – Advanced Server Admin & Automation (RHCE Focused).",
    },
  },

  //Application Development
  {
    slug: "flutter-app-development",
    brochureUrl: "/Old Course/App Development/Flutter App Development.pdf",
    brochureSizeMB: 5.94,
    cat: "Application Development",
    title: "Flutter App Development - 60 days Hands-On Training",
    days: 60,
    duration: "60 Days",
    lectures: "30 Lectures",
    projects: "5 Projects",
    mode: "Hybrid",
    tag: "New",
    img: unsplash("1622979135225-d2ba269cf1ac"),
    blurb:
      "Build, deploy, and publish cross-platform mobile apps on Android, iOS, and Web with Flutter and Dart.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "To teach you how to build modern, responsive, real-world mobile applications using Flutter & Dart, and deploy them on Android, iOS, and Web all with a single codebase. This is the perfect course for students, freelancers, and developers who want to enter the cross-platform mobile app market, without learning separate native languages for each OS.",
      ],
      eligibility: [
        "Beginners with no prior app development experience",
        "Web developers switching to mobile",
        "Tech enthusiasts or freelancers",
        "Anyone looking to build & publish their own apps",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments hands-on projects building real-world apps using Flutter",
        },
        {
          n: "02",
          title:
            "Quizzes short quizzes to test your understanding of concepts like Flutter widgets, APIs, Firebase, and state management",
        },
        {
          n: "03",
          title:
            "Live Sessions interactive live coding sessions with experts and Q&A to resolve your queries",
        },
        {
          n: "04",
          title:
            "Projects multiple practical projects including weather apps, blog readers, and a final capstone project",
        },
      ],
      curriculumSubtitle: "5 modules · 30 lectures · 5 projects",
      modules: [
        {
          title: "Introduction to Flutter & Dart",
          meta: "",
          topics: [],
        },
        {
          title: "UI Design & Layouts",
          meta: "",
          topics: [],
        },
        {
          title: "State Management & Forms",
          meta: "",
          topics: [],
        },
        {
          title: "Working with APIs & Firebase",
          meta: "",
          topics: [],
        },
        {
          title: "App Deployment & Final Project",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Flutter", "Dart", "Firebase"],
      careerIntro:
        "Enter the cross-platform mobile app market without learning separate native languages for each OS.",
      roles: [
        "Flutter Developer",
        "Mobile App Developer",
        "Cross-Platform App Developer",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "Students who complete all assignments, projects, and pass the final exam with a minimum 80% will receive a certification of completion.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "With the purchase of the course, you gain lifetime access to all the course material and can review it whenever you need to refresh your knowledge.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "JavaScript, React & Next.js Mastery, Backend Development with Node.js, or Web Development Basics.",
    },
  },
  {
    slug: "react-native-app-development",
    brochureUrl: "/Old Course/App Development/Mobile App Development with React Native.pdf",
    brochureSizeMB: 10.34,
    cat: "Application Development",
    title:
      "Mobile App Development with React Native - 60 days Hands-On Training",
    days: 60,
    duration: "60 Days",
    lectures: "30 Lectures",
    projects: "5 Projects",
    mode: "Hybrid",
    tag: "New",
    img: unsplash("1592609931095-54a2168ae893"),
    blurb:
      "Build smooth, real-world apps with JavaScript + React, and deploy them on Android and iOS with one codebase.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "To help you master cross-platform mobile app development using React Native one of the most in-demand frameworks globally. You'll learn to build smooth, beautiful, and real-world apps using JavaScript + React, and deploy them on Android and iOS devices all with one codebase. This is a practical, portfolio-ready program that prepares you for real jobs, freelance gigs, or launching your own mobile app.",
      ],
      eligibility: [
        "Anyone with basic knowledge of JavaScript or React",
        "Frontend developers transitioning to mobile",
        "Freelancers, students, or job-seekers",
        "Tech entrepreneurs or startup enthusiasts",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments real-world app development challenges with hands-on exercises",
        },
        {
          n: "02",
          title:
            "Quizzes short quizzes after each module to test your understanding",
        },
        {
          n: "03",
          title:
            "Live Sessions interactive live coding sessions and Q&A with experts",
        },
        {
          n: "04",
          title:
            "Projects 5 hands-on projects that will form the foundation of your portfolio",
        },
      ],
      curriculumSubtitle: "5 modules · 30 lectures · 5 projects",
      modules: [
        {
          title: "Getting Started with React Native & Expo",
          meta: "",
          topics: [],
        },
        {
          title: "Core Components & Navigation",
          meta: "",
          topics: [],
        },
        {
          title: "State Management & Forms",
          meta: "",
          topics: [],
        },
        {
          title: "APIs & Async Data",
          meta: "",
          topics: [],
        },
        {
          title: "Advanced Features + Final Project",
          meta: "",
          topics: [],
        },
      ],
      tools: ["React Native", "Expo", "JavaScript"],
      careerIntro:
        "A practical, portfolio-ready program that prepares you for real jobs, freelance gigs, or launching your own mobile app.",
      roles: [
        "React Native Developer",
        "Mobile App Developer",
        "Frontend Developer",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "Students who complete all assignments, projects, and pass the final exam with a minimum of 80% will receive a certification of completion.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Upon enrollment, you will have lifetime access to all the course material and can revisit it at any time to refresh your knowledge.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "Flutter App Development, JavaScript, React & Next.js Mastery, or Backend Development with Node.js.",
    },
  },
  {
    slug: "ios-app-development-swift",
    brochureUrl: "/Old Course/App Development/iOS App Development with Swift.pdf",
    brochureSizeMB: 5.53,
    cat: "Application Development",
    title: "iOS App Development with Swift - 60 days Hands-On Training",
    days: 60,
    duration: "60 Days",
    lectures: "30 Lectures",
    projects: "4 Projects",
    mode: "Hybrid",
    tag: "New",
    img: unsplash("1621839673705-6617adf9e890"),
    blurb:
      "Build beautiful, responsive iOS apps with Swift and Xcode from your first line of code to the App Store.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "To equip you with the skills and tools to design, develop, and publish beautiful, responsive, and functional iOS applications using Swift and Xcode. From writing your first line of Swift code to submitting your app on the App Store, we cover everything hands-on. This is perfect for students, developers, or entrepreneurs who want to tap into Apple's growing mobile market with confidence.",
      ],
      eligibility: [
        "Beginners with no prior app development experience",
        "Students, freelancers, or anyone interested in the Apple ecosystem",
        "Android developers or frontend devs looking to go cross-platform",
        "Tech enthusiasts ready to explore Swift & iOS",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments code-focused assignments after each module to sharpen your skills",
        },
        {
          n: "02",
          title:
            "Quizzes quick quizzes to help you retain key Swift and iOS concepts",
        },
        {
          n: "03",
          title:
            "Live Sessions instructor-led live coding and walkthrough sessions",
        },
        {
          n: "04",
          title:
            "Projects 4 guided projects that showcase your real-world iOS development skills",
        },
      ],
      curriculumSubtitle: "4 modules · 30 lectures · 4 projects",
      modules: [
        {
          title: "Introduction to iOS & Swift",
          meta: "",
          topics: [],
        },
        {
          title: "iOS App Structure & UI Design (UIKit)",
          meta: "",
          topics: [],
        },
        {
          title: "Working with Data & APIs",
          meta: "",
          topics: [],
        },
        {
          title: "Advanced Features + Final Project",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Swift", "Xcode", "UIKit"],
      careerIntro:
        "Tap into Apple's growing mobile market with confidence, whether as an employee, freelancer, or founder.",
      roles: ["iOS Developer", "Mobile App Developer", "Swift Engineer"],
      benefits: [
        {
          title: "Course Certificate",
          body: "Students who complete all modules, assignments, and projects with a passing score of 80% or above will receive a Certification of Completion.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Upon enrolling, you'll get lifetime access to all course materials and projects, allowing you to revisit and upskill anytime you need.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "Mobile App Development with React Native, Flutter App Development, or JavaScript, React & Next.js Mastery.",
    },
  },
  {
    slug: "fullstack-mobile-flutter-django",
    brochureUrl: "/Old Course/App Development/Full Stack Mobile App Development.pdf",
    brochureSizeMB: 8.37,
    cat: "Application Development",
    title:
      "Full Stack Mobile App Development – Flutter + Django (90 Days Hands-On Training)",
    days: 90,
    duration: "90 Days",
    lectures: "45 Lectures",
    projects: "6 Projects",
    mode: "Hybrid",
    tag: "New",
    img: unsplash("1607252650355-f7fd0460ccdb"),
    blurb:
      "Flutter for frontend, Django for REST APIs become a job-ready full stack mobile app developer.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "This hands-on course is aimed at helping you master full stack mobile app development using Flutter and Django. You'll create dynamic cross-platform mobile apps and connect them with robust backend services. From UI building to securing APIs, this training gives you everything to become a job-ready full stack mobile app developer.",
      ],
      eligibility: [
        "Beginners with basic programming knowledge",
        "Python or Flutter learners who want to go full stack",
        "Freelancers or entrepreneurs building cross-platform apps",
        "Students and job seekers in mobile or backend development",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments weekly real-world challenges across frontend and backend",
        },
        {
          n: "02",
          title:
            "Quizzes assessments after each module to test both Flutter and Django knowledge",
        },
        {
          n: "03",
          title:
            "Live Sessions instructor-led coding, debugging, and project support",
        },
        {
          n: "04",
          title:
            "Projects 6 hands-on projects including a final full stack app deployment",
        },
      ],
      curriculumSubtitle: "5 modules · 45 lectures · 6 projects",
      modules: [
        {
          title: "Dart & Flutter Fundamentals",
          meta: "",
          topics: [],
        },
        {
          title: "Flutter UI & State Management",
          meta: "",
          topics: [],
        },
        {
          title: "Django Backend & API Development",
          meta: "",
          topics: [],
        },
        {
          title: "Connecting Flutter to Django REST API",
          meta: "",
          topics: [],
        },
        {
          title: "Final Capstone & Deployment",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Flutter", "Dart", "Django", "Django REST Framework"],
      careerIntro:
        "Launch your own apps, freelance, or pursue full stack developer roles with both frontend and backend skills.",
      roles: [
        "Full Stack Mobile Developer",
        "Flutter Developer",
        "Django Backend Developer",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "Students who complete all modules, hands-on projects, and the final capstone project will receive an industry-recognized certification of completion.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Once enrolled, you'll get lifetime access to all training resources, recordings, and course materials through our learning platform.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "Flutter App Development, Backend Development with Django, or Mobile App Development with React Native.",
    },
  },

  //Big data
  {
    slug: "big-data-engineering",
    brochureUrl: "/Old Course/Big Data/Big Data Engineering.pdf",
    brochureSizeMB: 13.49,
    cat: "Big Data",
    title: "Big Data Engineering – Hadoop, Spark, Kafka Career Track",
    days: 90,
    duration: "90 Days",
    lectures: "80+ Lectures",
    projects: "9 Projects",
    mode: "Online",
    tag: "New",
    img: unsplash("1487014679447-9f8336841d58"),
    blurb:
      "Manage massive datasets with Hadoop, Spark, Kafka and Airflow build batch and real-time data pipelines.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "To give learners the knowledge, tools, and real-world experience to work with large-scale datasets, build ETL pipelines, process real-time data streams, and prepare for roles like Big Data Engineer, Data Pipeline Developer, or DataOps Specialist. You'll go from foundational data concepts to building real pipelines with Hadoop, Spark, Kafka, and Airflow all with hands-on projects, cloud integration, and GitHub-ready portfolio building.",
      ],
      eligibility: [
        "Beginners with basic Python or SQL knowledge",
        "Computer science students or recent graduates",
        "Developers and system engineers transitioning to data",
        "Professionals aiming for roles in data engineering, analytics, or ML ops",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments build ETL workflows, stream data from Kafka, and manage tasks with Airflow",
        },
        {
          n: "02",
          title:
            "Quizzes concept checks on Hadoop, Spark internals, real-time streaming, and orchestration",
        },
        {
          n: "03",
          title:
            "Live Sessions walkthroughs of distributed processing, cluster management, and real-world pipeline building",
        },
        {
          n: "04",
          title:
            "Projects deploy end-to-end data pipelines from ingestion to transformation and cloud deployment",
        },
      ],
      curriculumSubtitle: "8+ modules · 80+ lectures · 9 projects",
      modules: [
        {
          title: "Big Data Foundations & Ecosystem Overview",
          meta: "",
          topics: [],
        },
        {
          title: "Hadoop & HDFS",
          meta: "",
          topics: [],
        },
        {
          title: "Apache Hive, Pig & MapReduce",
          meta: "",
          topics: [],
        },
        {
          title: "Apache Spark – Batch & Real-Time Processing",
          meta: "",
          topics: [],
        },
        {
          title: "Apache Kafka – Real-Time Data Streaming",
          meta: "",
          topics: [],
        },
        {
          title: "Orchestration with Apache Airflow",
          meta: "",
          topics: [],
        },
        {
          title: "NoSQL & File Formats for Big Data",
          meta: "",
          topics: [],
        },
        {
          title: "Cloud-Based Big Data Tools (AWS Focus)",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Hadoop", "Apache Spark", "Apache Kafka", "Apache Airflow"],
      careerIntro:
        "Prepare for roles like Big Data Engineer, Data Pipeline Developer, or DataOps Specialist.",
      roles: [
        "Big Data Engineer",
        "Data Pipeline Developer",
        "DataOps Specialist",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "Cloud Computing with AWS, DevOps Essentials, or Data Science & Analytics with Python + Power BI.",
    },
  },

  //Linux
  {
    slug: "linux-admin",
    brochureUrl: "/Old Course/Linux/Linux Essentials.pdf",
    brochureSizeMB: 5.97,
    cat: "Linux",
    title: "Linux Essentials – RHCE-Based Fundamentals",
    days: 30,
    duration: "30 Days",
    lectures: "40 Lectures",
    projects: "4 Projects",
    mode: "Classroom",
    tag: "",
    img: unsplash("1580927752452-89d86da3fa0a"),
    blurb:
      "Command line to server hardening the foundation every tech career is built on.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "Perfect for beginners, this course provides a comprehensive dive into Linux essentials. Learn terminal commands, manage users and services, configure basic networking, and get introduced to shell scripting all through hands-on labs that prepare you for Red Hat certification and a Linux-based career path.",
      ],
      eligibility: [
        "Students and freshers with no prior Linux experience",
        "DevOps, cloud, and cybersecurity aspirants",
        "Junior system administrators & support engineers",
        "Professionals preparing for RHCSA or RHCE",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments practice essential Linux commands and system tasks through guided assignments tailored to RHCE fundamentals",
        },
        {
          n: "02",
          title:
            "Quizzes reinforce your understanding of Linux concepts and system operations with end-of-module quizzes",
        },
        {
          n: "03",
          title:
            "Live Sessions interactive mentorship sessions to discuss RHCE topics, troubleshoot issues, and clarify technical concepts",
        },
        {
          n: "04",
          title:
            "Projects build and configure real-world Linux environments through practical capstone projects aligned with RHCE standards",
        },
      ],
      curriculumSubtitle: "6 modules · 40 lectures · 4 projects",
      modules: [
        {
          title: "Introduction to Linux",
          meta: "",
          topics: [],
        },
        {
          title: "Command Line Mastery",
          meta: "",
          topics: [],
        },
        {
          title: "User & Group Management",
          meta: "",
          topics: [],
        },
        {
          title: "Package Management & System Services",
          meta: "",
          topics: [],
        },
        {
          title: "Networking & Firewalls (RHCSA Scope)",
          meta: "",
          topics: [],
        },
        {
          title: "Shell Scripting Basics + Final Project",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Red Hat Linux", "Shell Scripting"],
      careerIntro:
        "Prepare for Red Hat certification (RHCSA/RHCE) and a Linux-based career path.",
      roles: [
        "Linux System Administrator",
        "Junior Support Engineer",
        "DevOps Aspirant",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "Shell Scripting, DevOps Essentials, or Cloud Computing with AWS – Fundamentals.",
    },
  },
  {
    slug: "linux-pro-advanced-server-admin",
    brochureUrl: "/Old Course/Linux/Linux Pro.pdf",
    brochureSizeMB: 7.62,
    cat: "Linux",
    title: "Linux Pro – Advanced Server Admin & Automation (RHCE Focused)",
    days: 60,
    duration: "60 Days",
    lectures: "50 Lectures",
    projects: "6 Projects",
    mode: "Online",
    tag: "New",
    img: unsplash("1541560052-5e137f229371"),
    blurb:
      "Configure, secure, automate, and manage Linux servers in production process management, LVM, services, Bash and Ansible.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "This hands-on course is for those ready to move beyond the basics. You'll simulate real infrastructure, automate system tasks, secure networks, and prepare for RHCE certification. Ideal for system admins and DevOps engineers seeking mastery in Linux-based server environments.",
      ],
      eligibility: [
        "RHCSA certified learners or equivalent experience",
        "Linux users looking to level up into sysadmin roles",
        "DevOps/cloud engineers seeking stronger server knowledge",
        "Professionals aiming for RHCE, Ansible, or hybrid automation jobs",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments deep-dive tasks focused on system management, user permissions, service configurations, and networking",
        },
        {
          n: "02",
          title:
            "Quizzes test your grasp of RHCE-level topics like systemd, SELinux, and firewalld with challenging module-end quizzes",
        },
        {
          n: "03",
          title:
            "Live Sessions expert-led mentorship sessions to review advanced Linux concepts, troubleshoot labs, and discuss real-world use cases",
        },
        {
          n: "04",
          title:
            "Projects real-time automation and server administration projects using bash scripting and Ansible",
        },
      ],
      curriculumSubtitle: "7 modules · 50 lectures · 6 projects",
      modules: [
        {
          title: "System Management & Process Control",
          meta: "",
          topics: [],
        },
        {
          title: "Advanced Users, Groups & Permissions",
          meta: "",
          topics: [],
        },
        {
          title: "Storage & LVM Management",
          meta: "",
          topics: [],
        },
        {
          title: "Networking & Firewalls (Advanced)",
          meta: "",
          topics: [],
        },
        {
          title: "Shell Scripting & Automation",
          meta: "",
          topics: [],
        },
        {
          title: "System Services & Server Configuration",
          meta: "",
          topics: [],
        },
        {
          title: "Introduction to Ansible for RHCE",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Bash", "Ansible", "LVM", "SELinux", "firewalld"],
      careerIntro:
        "Prepare for RHCE certification and Linux-based server automation roles.",
      roles: [
        "Senior Linux Administrator",
        "DevOps Engineer",
        "Automation Engineer",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "Linux Essentials – RHCE-Based Fundamentals, DevOps Essentials, or CloudOps Pro – DevOps + Cloud Engineering Training (AWS + Azure).",
    },
  },

  //Graphichs Design
  {
    slug: "graphics",
    brochureUrl: "/Old Course/Graphic Design/Graphic Designing and Visual Communication.pdf",
    brochureSizeMB: 22.73,
    cat: "Graphics Design",
    title: "Graphic Designing and Visual Communication",
    days: 90,
    duration: "3 Month",
    lectures: "30 Lectures",
    projects: "5 Projects",
    mode: "Hybrid",
    tag: "",
    img: unsplash("1580894732444-8ecded7900cd"),
    blurb:
      "Branding, layout and visual systems with real client-style briefs and portfolio reviews.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "This is a fully practical, tool-driven course designed to take beginners into the world of graphic design and digital branding. Participants will learn how to use Adobe Illustrator like a pro, with a solid understanding of design principles, typography, composition, and color theory. Basic image editing with Photoshop is also covered to help students clean up, enhance, and prepare visual assets for real-world projects.",
      ],
      eligibility: [
        "No prior design experience required",
        "Anyone wanting to freelance, build their own brand, or get into creative roles",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "12 Assignments assignment solutions will be posted on GitHub or Slack after the course for self-practice",
        },
        {
          n: "02",
          title:
            "30+ Quizzes quick quizzes after each topic to test your understanding (and give you bragging rights)",
        },
        {
          n: "03",
          title:
            "Live Sessions weekly live classes with interactive project reviews, tool deep-dives, and 1:1 mentor time",
        },
        {
          n: "04",
          title:
            "9 Projects you'll work on 5 core projects that build your portfolio and prove your skills",
        },
      ],
      curriculumSubtitle: "7 modules · 30 lectures · 5 projects",
      modules: [
        {
          title: "Introduction to Graphic Design",
          meta: "",
          topics: [],
        },
        {
          title: "Color Psychology & Typography",
          meta: "",
          topics: [],
        },
        {
          title: "Adobe Illustrator Mastery",
          meta: "",
          topics: [],
        },
        {
          title: "Logo Design & Branding",
          meta: "",
          topics: [],
        },
        {
          title: "Social Media & Poster Design",
          meta: "",
          topics: [],
        },
        {
          title: "Photoshop Basics for Designers",
          meta: "",
          topics: [],
        },
        {
          title: "Final Project & Portfolio",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Adobe Illustrator", "Adobe Photoshop"],
      careerIntro:
        "Positions in Data Science and Machine Learning are in high demand in today's competitive job market. As a Data Analyst, Machine Learning Engineer etc.",
      roles: ["Graphic Designer", "Brand Designer", "Freelance Designer"],
      benefits: [
        {
          title: "Course Certificate",
          body: "Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
        },
        {
          title: "Ready for interviews",
          body: "Positions in Data Science and Machine Learning are in high demand in today's competitive job market. As a Data Analyst, Machine Learning Engineer etc. The increased confidence gained through mastering these concepts will help you navigate interviews with ease!",
        },
      ],
      nextStep:
        "Digital Marketing Launchpad, Web Development Basics, or WordPress Mastery: Build, Design & Sell.",
    },
  },
  {
    slug: "ui-ux-design",
    brochureUrl: "/Old Course/Graphic Design/UI UX Design Industry Ready Hands On Course.pdf",
    brochureSizeMB: 14.2,
    cat: "Graphics Design",
    title: "UI/UX Design – Industry-Ready Hands-On Course",
    days: 90,
    duration: "90 Days",
    lectures: "48 Lectures",
    projects: "6 Projects",
    mode: "Hybrid",
    tag: "New",
    img: unsplash("1559028006-448665bd7c7f"),
    blurb:
      "Research, wireframe, design, prototype and test interfaces build a portfolio that gets you hired.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "This course is a complete journey into user interface and user experience design made practical, hands-on, and beginner-friendly. You will learn how to research, wireframe, design, prototype, and test interfaces across mobile apps and websites. We'll train you on tools like Figma, Adobe XD, Whimsical, and Notion, and guide you through real-life design challenges that simulate startup or freelance projects.",
        'Each module is project-driven, focused on design thinking, usability, aesthetics, and interaction. By the end, you will have a portfolio that screams "hire me", and the confidence to walk into interviews or pitch to freelance clients like a pro.',
      ],
      eligibility: [
        "No prior design experience required",
        "Anyone aiming for a design job, planning to freelance, or wanting to design their own app someday",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "15+ Assignments exercises ranging from wireframes to hi-fi UI designs and feedback iterations",
        },
        {
          n: "02",
          title:
            "20+ Quizzes topic-based mini challenges to reinforce concepts (no boring theory exams here)",
        },
        {
          n: "03",
          title:
            "Live Sessions weekly mentor-led design critiques, portfolio reviews, and tool walkthroughs",
        },
        {
          n: "04",
          title: "Projects you'll work on 6 portfolio-worthy projects",
        },
      ],
      curriculumSubtitle: "7 modules · 48 lectures · 6 projects",
      modules: [
        {
          title: "UI vs UX – The Big Picture",
          meta: "",
          topics: [],
        },
        {
          title: "Research & User Personas",
          meta: "",
          topics: [],
        },
        {
          title: "Wireframing & Structure",
          meta: "",
          topics: [],
        },
        {
          title: "UI Design in Figma",
          meta: "",
          topics: [],
        },
        {
          title: "Design Systems & Prototyping",
          meta: "",
          topics: [],
        },
        {
          title: "Usability Testing & Iteration",
          meta: "",
          topics: [],
        },
        {
          title: "Case Study & Portfolio Building",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Figma", "Adobe XD", "Whimsical", "Notion"],
      careerIntro:
        "Positions in Data Science and Machine Learning are in high demand in today's competitive job market. As a Data Analyst, Machine Learning Engineer etc.",
      roles: ["UI/UX Designer", "Product Designer", "Freelance Designer"],
      benefits: [
        {
          title: "Course Certificate",
          body: "Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
        },
        {
          title: "Ready for interviews",
          body: "Positions in Data Science and Machine Learning are in high demand in today's competitive job market. As a Data Analyst, Machine Learning Engineer etc. The increased confidence gained through mastering these concepts will help you navigate interviews with ease!",
        },
      ],
      nextStep:
        "Graphic Designing and Visual Communication, Product Management and Digital Business with AI, or Web Development Basics.",
    },
  },

  //Digital Marketing
  {
    slug: "marketing",
    cat: "Digital Marketing",
    title: "Advanced Digital Marketing 6 Months Hands-On Training",
    days: 180,
    duration: "6 Months",
    lectures: "48 Lectures",
    projects: "5 Projects",
    mode: "Hybrid",
    tag: "",
    img: unsplash("1553729459-efe14ef6055d"),
    blurb:
      "SEO, ads, analytics and content strategy run real campaigns, measure real results.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "Fast, practical, and beginner-friendly this course will give you a complete understanding of advanced digital marketing platforms, strategies, and tools. You'll practice SEO, SMM, Email Marketing, and Ads setup through real-life use cases. Perfect for learners aiming to freelance, grow their personal brand, or land marketing roles.",
      ],
      eligibility: [
        "No experience required",
        "Ideal for students, creators, freelancers, or entrepreneurs",
        "Great for people launching their first business or brand",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments practice campaigns, blog optimization, email drafts, and more",
        },
        {
          n: "02",
          title: "Quizzes topic-wise quizzes to reinforce marketing concepts",
        },
        {
          n: "03",
          title:
            "Live Sessions interactive sessions with digital marketing experts",
        },
        {
          n: "04",
          title:
            "Projects hands-on ad campaign creation, post scheduling, and analytics",
        },
      ],
      curriculumSubtitle: "6 modules · 48 lectures · 5 projects",
      modules: [
        {
          title: "Introduction to Digital Marketing",
          meta: "",
          topics: [],
        },
        {
          title: "Search Engine Optimization (SEO)",
          meta: "",
          topics: [],
        },
        {
          title: "Social Media Marketing (SMM)",
          meta: "",
          topics: [],
        },
        {
          title: "Google Ads & Facebook Ads (Intro)",
          meta: "",
          topics: [],
        },
        {
          title: "Email Marketing & Automation",
          meta: "",
          topics: [],
        },
        {
          title: "Analytics, Reporting & Strategy",
          meta: "",
          topics: [],
        },
      ],
      tools: [
        "SEO Tools",
        "Google Ads",
        "Facebook Ads",
        "Email Marketing Platforms",
      ],
      careerIntro:
        "Freelance, grow your personal brand, or land marketing roles with real campaign experience.",
      roles: [
        "Digital Marketing Executive",
        "SEO Specialist",
        "Social Media Marketer",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "Students who complete all training modules, hands-on assignments, and mock campaigns will receive a digital certificate of completion from Eduden.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "You'll have full access to session recordings, templates, resources, and assignments for lifetime through our learning dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "Graphic Designing and Visual Communication, WordPress Mastery: Build, Design & Sell, or Product Management and Digital Business with AI.",
    },
  },
  {
    slug: "seo-mastery",
    brochureUrl: "/Old Course/Digital Marketing/SEO Mastery – 30 Days Hands-On Training.pdf",
    brochureSizeMB: 16.34,
    cat: "Digital Marketing",
    title: "SEO Mastery - 30 Days Hands-On Training",
    days: 30,
    duration: "30 Days",
    lectures: "30 Lectures",
    projects: "6 Projects",
    mode: "Hybrid",
    tag: "New",
    img: unsplash("1562577309-4932fdd64cd1"),
    blurb:
      "Ethical, high-impact SEO strategies how Google ranks content and how to optimize for visibility, traffic and conversions.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "To give you a complete, practical understanding of how SEO works, how Google ranks content, and how to optimize websites for visibility, traffic, and conversions using ethical, long-term strategies that actually work. This course is ideal for anyone who wants to grow organically whether you're working for clients, managing your own site, or looking to build a career in digital marketing.",
      ],
      eligibility: [
        "No prior experience required",
        "Perfect for bloggers, business owners, students, or freelancers",
        "Web developers who want to add SEO to their skillset",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments work on keyword mapping, on-page SEO, and audits",
        },
        {
          n: "02",
          title: "Quizzes validate your SEO knowledge after each module",
        },
        {
          n: "03",
          title: "Live Sessions weekly live classes with SEO professionals",
        },
        {
          n: "04",
          title:
            "Projects hands-on backlink strategy, website audits, and optimization tasks",
        },
      ],
      curriculumSubtitle: "6 modules · 30 lectures · 6 projects",
      modules: [
        {
          title: "Introduction to SEO & Google's Algorithm",
          meta: "",
          topics: [],
        },
        {
          title: "Keyword Research & Strategy",
          meta: "",
          topics: [],
        },
        {
          title: "On-Page SEO",
          meta: "",
          topics: [],
        },
        {
          title: "Off-Page SEO & Link Building",
          meta: "",
          topics: [],
        },
        {
          title: "Technical SEO & Site Audits",
          meta: "",
          topics: [],
        },
        {
          title: "Reporting, Trends & Strategy",
          meta: "",
          topics: [],
        },
      ],
      tools: [
        "Keyword Research Tools",
        "Site Audit Tools",
        "Backlink Analysis Tools",
      ],
      careerIntro:
        "Grow organically whether you're working for clients, managing your own site, or building a career in digital marketing.",
      roles: [
        "SEO Specialist",
        "Content Strategist",
        "Digital Marketing Executive",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "You'll receive a digital certificate of completion from Eduden after completing all modules and submitting the final SEO site audit project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to class recordings, downloadable SEO templates, audit sheets, and tool tutorials via our Eduden learning dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "Advanced Digital Marketing, WordPress Mastery: Build, Design & Sell, or Product Management and Digital Business with AI.",
    },
  },
  {
    slug: "advanced-digital-marketing-seo",
    brochureUrl: "/Old Course/Digital Marketing/Advanced Digital Marketing + SEO – 90 Days Hands-On Training.pdf",
    brochureSizeMB: 10.49,
    cat: "Digital Marketing",
    title: "Advanced Digital Marketing + SEO - 90 Days Hands-On Training",
    days: 90,
    duration: "90 Days",
    lectures: "50 Lectures",
    projects: "10 Projects",
    mode: "Hybrid",
    tag: "New",
    img: unsplash("1533750349088-cd871a92f312"),
    blurb:
      "Rank, scale, convert, and track ROI across multiple channels advanced SEO and performance marketing combined.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "To transform you into a digital marketing strategist someone who not only understands how to post content or run ads, but knows how to rank, scale, convert, and track ROI across multiple channels. By the end of this course, you'll be ready to handle real-world campaigns, freelance confidently, apply for job roles like Digital Marketing Executive, SEO Analyst, Performance Marketer, or even start your own agency.",
      ],
      eligibility: [
        "Marketing students or freelancers looking to go pro",
        "Small business owners building in-house marketing skills",
        "Job seekers targeting SEO or PPC roles",
        "Basic digital marketing or SEO knowledge is helpful (but not mandatory)",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments comprehensive digital marketing strategies, SEO audits, and ad campaigns",
        },
        {
          n: "02",
          title:
            "Quizzes test your knowledge on advanced SEO and performance marketing concepts",
        },
        {
          n: "03",
          title:
            "Live Sessions interactive classes with real-world insights and strategies from professionals",
        },
        {
          n: "04",
          title:
            "Projects hands-on experience with campaigns, performance tracking, and marketing tools",
        },
      ],
      curriculumSubtitle: "7 modules · 50 lectures · 10 projects",
      modules: [
        {
          title: "Core Marketing & Strategy Foundations",
          meta: "",
          topics: [],
        },
        {
          title: "Advanced SEO (On-Page, Off-Page, Technical)",
          meta: "",
          topics: [],
        },
        {
          title: "Content Strategy + Blogging for SEO",
          meta: "",
          topics: [],
        },
        {
          title: "Google Ads + Performance Marketing",
          meta: "",
          topics: [],
        },
        {
          title: "Social Media Marketing (Organic + Paid)",
          meta: "",
          topics: [],
        },
        {
          title: "Email Marketing + Funnels",
          meta: "",
          topics: [],
        },
        {
          title: "Analytics, Reporting & Real-World Campaigns",
          meta: "",
          topics: [],
        },
      ],
      tools: [
        "Google Ads",
        "SEO Tools",
        "Email Marketing Platforms",
        "Analytics Tools",
      ],
      careerIntro:
        "Apply for job roles like Digital Marketing Executive, SEO Analyst, Performance Marketer, or start your own agency.",
      roles: [
        "Digital Marketing Executive",
        "SEO Analyst",
        "Performance Marketer",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, templates, marketing tools, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "SEO Mastery, Advanced Digital Marketing, or Product Management and Digital Business with AI.",
    },
  },
  {
    slug: "ai-powered-digital-marketing",
    brochureUrl: "/Old Course/Digital Marketing/AI-Powered Digital Marketing – Hands-On in 60 Days.pdf",
    brochureSizeMB: 13.24,
    cat: "Digital Marketing",
    title: "AI-Powered Digital Marketing - On in 60 Days",
    days: 60,
    duration: "60 Days",
    lectures: "60+ Lectures",
    projects: "7 Projects",
    mode: "Hybrid",
    tag: "New",
    img: unsplash("1611926653458-09294b3142bf"),
    blurb:
      "Launch high-performing campaigns with AI AI-generated content, ad and SEO optimization, and automated workflows.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "To equip learners with the latest skills in performance marketing and automation, using AI-powered tools to create content, optimize ads, plan campaigns, analyze performance, and scale results faster than traditional methods. You'll walk away with live campaign experience, a real marketing portfolio, and the confidence to run campaigns that convert whether for your clients, startup, or side hustle.",
      ],
      eligibility: [
        "Students, freelancers & job seekers exploring digital marketing",
        "Small business owners & content creators",
        "Traditional marketers upgrading to automation",
        "Influencers and startup founders scaling their brand",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments create ad copy, email funnels, landing pages, and full campaigns using AI tools",
        },
        {
          n: "02",
          title:
            "Quizzes assess understanding of SEO, ad strategy, email workflows, and AI integrations",
        },
        {
          n: "03",
          title:
            "Live Sessions weekly strategy workshops, ad campaign walkthroughs, and tool mastery sprints",
        },
        {
          n: "04",
          title:
            "Projects launch real ads, build automation, generate SEO content, and complete a capstone campaign",
        },
      ],
      curriculumSubtitle: "7 modules · 60+ lectures · 7 projects",
      modules: [
        {
          title: "Digital Marketing Fundamentals + AI Integration",
          meta: "",
          topics: [],
        },
        {
          title: "AI Content Creation & SEO",
          meta: "",
          topics: [],
        },
        {
          title: "Meta & Google Ads with AI-Powered Copywriting",
          meta: "",
          topics: [],
        },
        {
          title: "AI Design & Video Tools",
          meta: "",
          topics: [],
        },
        {
          title: "Email Marketing & Automation Workflows",
          meta: "",
          topics: [],
        },
        {
          title: "Analytics, Reporting & Automation",
          meta: "",
          topics: [],
        },
        {
          title: "Capstone Project & Portfolio Building",
          meta: "",
          topics: [],
        },
      ],
      tools: [
        "AI Content Tools",
        "Meta Ads",
        "Google Ads",
        "AI Design & Video Tools",
      ],
      careerIntro:
        "Run campaigns that convert whether for clients, your own startup, or a side hustle.",
      roles: [
        "Digital Marketing Executive",
        "Performance Marketer",
        "Marketing Automation Specialist",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "Advanced Digital Marketing + SEO, SEO Mastery, or Generative AI & Prompt Engineering.",
    },
  },

  //BlockChain
  {
    slug: "blockchain",
    brochureUrl: "/Old Course/Blockchain/Blockchain.pdf",
    brochureSizeMB: 6.6,
    cat: "Blockchain",
    title: "Blockchain Essentials – Learn & Build Decentralized Systems",
    days: 45,
    duration: "45 Days",
    lectures: "50+ Lectures",
    projects: "6 Projects",
    mode: "Online",
    tag: "",
    img: unsplash("1620121692029-d088224ddc74"),
    blurb:
      "Smart contracts, wallets and dApps understand the tech behind the hype.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "To help learners understand the core concepts of blockchain technology, the Ethereum ecosystem, and how to build decentralized applications (dApps) using Solidity and smart contracts. By the end of this course, you'll build and deploy your own smart contract, interact with the blockchain using web3.js or ethers.js, and have a solid foundation in the decentralized future.",
      ],
      eligibility: [
        "Developers, computer science students, or tech enthusiasts",
        "Beginners with interest in crypto, NFTs, Web3, or DeFi",
        "Entrepreneurs looking to build Web3 startups",
        "Freelancers and engineers entering the blockchain space",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments code smart contracts, simulate transactions, and integrate dApps with a frontend",
        },
        {
          n: "02",
          title:
            "Quizzes test understanding of cryptographic principles, Solidity syntax, and Web3 logic",
        },
        {
          n: "03",
          title:
            "Live Sessions mentorship on Solidity, smart contract security, and dApp walkthroughs",
        },
        {
          n: "04",
          title:
            "Projects deploy smart contracts, integrate MetaMask, and build real Web3 applications",
        },
      ],
      curriculumSubtitle: "6 modules · 50+ lectures · 6 projects",
      modules: [
        {
          title: "Blockchain Fundamentals & Cryptography Basics",
          meta: "",
          topics: [],
        },
        {
          title: "Ethereum & Smart Contract Basics",
          meta: "",
          topics: [],
        },
        {
          title: "Solidity Programming & dApp Development",
          meta: "",
          topics: [],
        },
        {
          title: "Web3 Integration & Blockchain Frontend",
          meta: "",
          topics: [],
        },
        {
          title: "Real-World Blockchain Use Cases & Projects",
          meta: "",
          topics: [],
        },
        {
          title: "Final Project + Certification Prep",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Solidity", "web3.js", "ethers.js", "MetaMask"],
      careerIntro:
        "Build and deploy your own smart contracts, and get a solid foundation in the decentralized future.",
      roles: [
        "Blockchain Developer",
        "Web3 Entrepreneur",
        "Smart Contract Developer",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "Web3 & dApp Development – Full Stack Blockchain, JavaScript, React & Next.js Mastery, or Backend Development with Node.js.",
    },
  },

  //Iot
  {
    slug: "iot",
    brochureUrl: "/Old Course/IOT/IoT Foundations.pdf",
    brochureSizeMB: 19.5,
    cat: "IoT",
    title: "IoT Foundations - 30 Days Hands-On Learning Training",
    days: 30,
    duration: "30 Days",
    lectures: "40 Lectures",
    projects: "5 Projects",
    mode: "Classroom",
    tag: "",
    img: unsplash("1518770660439-4636190af475"),
    blurb:
      "Build connected devices from scratch sensors, boards, and cloud dashboards.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "Whether you're a student, maker, or aspiring robotics engineer, this course gives you the foundational skills to build smart systems using microcontrollers, sensors, and cloud-based tools. Ideal for breaking into IoT, automation, or embedded systems.",
      ],
      eligibility: [
        "Students (no coding/electronics background needed)",
        "Makers, inventors, and tech hobbyists",
        "Future robotics, electronics, or embedded engineers",
        "Professionals switching to IoT or automation domains",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments hands-on tasks like connecting sensors, setting up microcontrollers, and configuring networks for IoT solutions",
        },
        {
          n: "02",
          title:
            "Quizzes test your understanding of IoT concepts such as cloud communication, networking protocols, and sensor integration after each module",
        },
        {
          n: "03",
          title:
            "Live Sessions live, interactive sessions with experts to discuss IoT concepts, troubleshoot hardware issues, and enhance your projects",
        },
        {
          n: "04",
          title:
            "Projects work on real-world IoT projects, building a complete system that connects sensors to the cloud and visualizes data on mobile dashboards",
        },
      ],
      curriculumSubtitle: "6 modules · 40 lectures · 5 projects",
      modules: [
        {
          title: "Introduction to IoT & Ecosystem Overview",
          meta: "",
          topics: [],
        },
        {
          title: "Microcontrollers & Programming (Arduino/ESP)",
          meta: "",
          topics: [],
        },
        {
          title: "Sensors & Actuators in IoT",
          meta: "",
          topics: [],
        },
        {
          title: "Connectivity & Networking",
          meta: "",
          topics: [],
        },
        {
          title: "IoT & the Cloud",
          meta: "",
          topics: [],
        },
        {
          title: "Final Project + Real-World Applications",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Arduino", "ESP Boards", "Cloud Dashboards"],
      careerIntro:
        "Build the foundational skills to break into IoT, automation, or embedded systems.",
      roles: [
        "IoT Engineer",
        "Embedded Systems Engineer",
        "Automation Engineer",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "Networking Fundamentals, Linux Administration, or Deep Learning & Neural Networks with TensorFlow & Keras.",
    },
  },

  //Networking
  {
    slug: "networking",
    brochureUrl: "/Old Course/Networking/Networking Zero – Foundation Course (Based on CCNA Syllabus).pdf",
    brochureSizeMB: 14.09,
    cat: "Networking",
    title: "Networking Zero – Foundation Course (Based on CCNA Syllabus)",
    days: 90,
    duration: "90 Days",
    lectures: "50 Lectures",
    projects: "10 Projects",
    mode: "Hybrid",
    tag: "",
    img: unsplash("1544256718-3bcf237f3974"),
    blurb:
      "TCP/IP, routing, and packet analysis the plumbing of the internet, demystified.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "To give students a strong foundation in computer networking, aligned with the CCNA syllabus, while focusing on hands-on configuration, troubleshooting, and network design. From routers and IP addresses to VLANs and security this course turns complete beginners into confident network technicians or support engineers.",
      ],
      eligibility: [
        "Beginners with no prior networking experience",
        "Students in tech, computer science, or BCA/MCA programs",
        "Professionals looking to get into IT infrastructure roles",
        "Anyone preparing for Cisco certifications (CCNA 200-301)",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments hands-on labs and practical tasks on network configuration and troubleshooting",
        },
        {
          n: "02",
          title:
            "Quizzes test your networking knowledge with periodic assessments",
        },
        {
          n: "03",
          title:
            "Live Sessions interactive sessions with instructors to clarify concepts and practice real-world scenarios",
        },
        {
          n: "04",
          title:
            "Projects work on a full network setup, including IP addressing, routing, and security configurations",
        },
      ],
      curriculumSubtitle: "6 modules · 50 lectures · 10 projects",
      modules: [
        {
          title: "Introduction to Networking & Network Devices",
          meta: "",
          topics: [],
        },
        {
          title: "IP Addressing & Subnetting",
          meta: "",
          topics: [],
        },
        {
          title: "Routing & Switching Basics",
          meta: "",
          topics: [],
        },
        {
          title: "Network Configuration & CLI Skills",
          meta: "",
          topics: [],
        },
        {
          title: "Network Security & Troubleshooting",
          meta: "",
          topics: [],
        },
        {
          title: "Real-World Scenarios & Final Simulation",
          meta: "",
          topics: [],
        },
      ],
      tools: ["Cisco IOS", "Packet Tracer", "CCNA 200-301 Syllabus"],
      careerIntro:
        "Turn complete beginners into confident network technicians or support engineers prepared for CCNA certification.",
      roles: [
        "Network Technician",
        "IT Support Engineer",
        "Network Administrator",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "Linux Essentials – RHCE-Based Fundamentals, Cloud Computing with AWS – Fundamentals, or DevOps for Beginners – Foundation Track.",
    },
  },
  {
    slug: "networking-advanced-routing-mastery",
    brochureUrl: "/Old Course/Networking/Networking Advanced – Routing Mastery (CCNP + CCIE Syllabus Based).pdf",
    brochureSizeMB: 10.35,
    cat: "Networking",
    title: "Networking Advanced – Routing Mastery (CCNP + CCIE Syllabus Based)",
    days: 90,
    duration: "90 Days",
    lectures: "70 Lectures",
    projects: "12 Projects",
    mode: "Hybrid",
    tag: "New",
    img: unsplash("1580584126903-c17d41830450"),
    blurb:
      "Enterprise-level routing protocols EIGRP, OSPF, BGP and more aligned to CCNP ENCOR and CCIE Routing & Services.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "To equip you with the skills, configs, and real-world logic to master advanced routing concepts used in large-scale enterprise and service provider environments following the official CCNP ENCOR + CCIE Routing & Services syllabus. This course is practical, exam-relevant, and field-proven.",
      ],
      eligibility: [
        "CCNA-certified professionals or those with equivalent knowledge",
        "Network support engineers ready to level up",
        "IT professionals targeting CCNP / CCIE R&S certification",
        "Freelancers or consultants managing large networks",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments hands-on labs and practical tasks focusing on advanced routing configurations",
        },
        {
          n: "02",
          title:
            "Quizzes assess your knowledge and understanding of advanced routing concepts",
        },
        {
          n: "03",
          title:
            "Live Sessions interactive sessions with instructors for real-world network scenarios",
        },
        {
          n: "04",
          title:
            "Projects work on large-scale network configurations, including advanced routing protocols",
        },
      ],
      curriculumSubtitle: "7 modules · 70 lectures · 12 projects",
      modules: [
        {
          title: "Advanced IP Routing Concepts",
          meta: "",
          topics: [],
        },
        {
          title: "EIGRP – Enhanced Interior Gateway Routing Protocol",
          meta: "",
          topics: [],
        },
        {
          title: "OSPFv2 & OSPFv3 (Single & Multi Area)",
          meta: "",
          topics: [],
        },
        {
          title: "BGP – Border Gateway Protocol (Intro to Advanced)",
          meta: "",
          topics: [],
        },
        {
          title: "Route Redistribution & Policy Control",
          meta: "",
          topics: [],
        },
        {
          title: "High Availability & Enterprise Design",
          meta: "",
          topics: [],
        },
        {
          title: "Bonus Module: Exam & Interview Prep (Optional Add-On)",
          meta: "",
          topics: [],
        },
      ],
      tools: ["EIGRP", "OSPF", "BGP", "Cisco IOS"],
      careerIntro:
        "Prepare for CCNP ENCOR and CCIE Routing & Services certification with practical, exam-relevant, field-proven training.",
      roles: [
        "Network Engineer",
        "Senior Network Administrator",
        "Network Consultant",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "Networking Zero – Foundation Course (Based on CCNA Syllabus), CloudOps Pro – DevOps + Cloud Engineering Training (AWS + Azure), or Linux Pro – Advanced Server Admin & Automation (RHCE Focused).",
    },
  },
  {
    slug: "networking-advanced-switching-mastery",
    brochureUrl: "/Old Course/Networking/Networking Advanced – Switching Mastery (CCNP-CCIE Based).pdf",
    brochureSizeMB: 12.83,
    cat: "Networking",
    title: "Networking Advanced – Switching Mastery (CCNP/CCIE Based)",
    days: 90,
    duration: "90 Days",
    lectures: "80 Lectures",
    projects: "12 Projects",
    mode: "Hybrid",
    tag: "New",
    img: unsplash("1601132359864-c974e79890ac"),
    blurb:
      "Configure, troubleshoot, and optimize enterprise switching infrastructure Layer 2 and Layer 3, aligned to CCNP and CCIE.",
    detail: {
      overviewHeadline: "Course Overview",
      overviewParagraphs: [
        "To give learners the practical and theoretical knowledge required to configure, troubleshoot, and optimize enterprise switching infrastructure from access to distribution layers, covering all critical Layer 2 and Layer 3 switching topics aligned with Cisco CCNP & CCIE EI certifications. You'll build skills that directly map to real-world job roles and Cisco's most elite certifications.",
      ],
      eligibility: [
        "CCNA-certified professionals or those with solid networking fundamentals",
        "Network engineers or IT infrastructure pros looking to level up",
        "Candidates preparing for CCNP ENCOR or CCIE Enterprise Infrastructure",
        "Professionals managing corporate or campus networks",
      ],
      projectsHeadline: "What's inside the course.",
      projects: [
        {
          n: "01",
          title:
            "Assignments hands-on labs and practical tasks focusing on Layer 2 and Layer 3 switching configurations",
        },
        {
          n: "02",
          title:
            "Quizzes assess your knowledge on advanced switching topics, VLANs, and network security",
        },
        {
          n: "03",
          title:
            "Live Sessions interactive sessions with instructors covering complex switching scenarios and troubleshooting techniques",
        },
        {
          n: "04",
          title:
            "Projects work on real-world network switching configurations, including VLANs, EtherChannel, and advanced security",
        },
      ],
      curriculumSubtitle: "7 modules · 80 lectures · 12 projects",
      modules: [
        {
          title: "Switching Fundamentals Review",
          meta: "",
          topics: [],
        },
        {
          title: "VLANs & Trunking",
          meta: "",
          topics: [],
        },
        {
          title: "Inter-VLAN Routing & SVIs",
          meta: "",
          topics: [],
        },
        {
          title: "Spanning Tree Protocol (STP)",
          meta: "",
          topics: [],
        },
        {
          title: "EtherChannel (L2 & L3)",
          meta: "",
          topics: [],
        },
        {
          title: "Advanced Switching Security",
          meta: "",
          topics: [],
        },
        {
          title: "High Availability & Campus Design",
          meta: "",
          topics: [],
        },
      ],
      tools: ["VLANs", "EtherChannel", "STP", "Cisco IOS"],
      careerIntro:
        "Build skills that directly map to real-world job roles and Cisco's most elite certifications.",
      roles: [
        "Network Engineer",
        "Campus Network Administrator",
        "Network Security Specialist",
      ],
      benefits: [
        {
          title: "Course Certificate",
          body: "A digital certificate of completion from Eduden after completing all modules and submitting your final project.",
        },
        {
          title: "100% Access on Purchase Period",
          body: "Lifetime access to recorded sessions, hands-on lab assignments, and downloadable resources through the Eduden dashboard.",
        },
        {
          title: "Ready for interviews",
          body: "Upon completion of the course, students will always be interviewed to assess their skills and readiness for practical applications.",
        },
      ],
      nextStep:
        "Networking Advanced – Routing Mastery (CCNP + CCIE Syllabus Based), Networking Zero – Foundation Course (Based on CCNA Syllabus), or Linux Pro – Advanced Server Admin & Automation (RHCE Focused).",
    },
  },
];
