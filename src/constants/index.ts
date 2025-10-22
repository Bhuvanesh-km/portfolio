const TERMINAL_SKILLS = [
  "React.js",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express",
  "Fastify",
  "AlloyDB",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Git",
  "Docker",
];

const EXPERIENCE_TIMELINE = [
  {
    title: "KPN Fresh",
    description:
      "Built and launched core-analytics-service with AlloyDB from scratch",
    points: [
      "Designed and developed a core analytics service with AlloyDB for processing and aggregating large-scale event data in real time.",
      "Implemented batching and caching techniques to optimize data ingestion and processing, reducing database transaction load from ~1k/sec to ~50/sec.",
      "Designed idempotent ingestion logic to ensure data consistency and eliminate duplicate event processing in concurrent processing environments.",
      "Orchestrated event delivery to third-party systems (e.g., CleverTap, Unbdx, AppsFlyer) for marketing automation, customer attribution, and behavioral analytics.",
    ],
  },
  {
    title: "IBO",
    description:
      "Worked on command-center applications involving frontend and backend development",
    points: [
      "Launched a user-friendly B2B OMS interface, streamlining order creation, invoice generation, and payment charging.",
      "Designed an intuitive documentation screen empowering super admins to manage updates, enhancing cross-team troubleshooting, and reducing tech team dependency by 50%.",
      "Developed a POS digital invoice UI integrated with SMS, enhancing customer experience through instant and accessible billing.",
      "Worked on Multiple BFF/Backend services of Next.js and Fastify to streamline frontend-backend communication, authentication, improving data retrieval efficiency by 30%.",
      "Built the event integration layer between internal Pub/Sub events and CleverTap, enabling the marketing team to leverage real-time user events for targeted campaigns and personalized user journeys.",
    ],
  },
  {
    title: "Evry India",
    description:
      "Deployed multiple new enterprise dashboards features for real-time data",
    points: [
      "Developed high-performance user-facing components using React.js, enhancing responsiveness and user experience.",
      "Implemented data visualization components using libraries like Recharts to display key business metrics.",
      "Engineered scalable REST APIs using Node.js and Express to power data-driven features.",
      "Develop ETL pipelines using IICS and Snowflake to aggregate and process large volumes of data.",
      "Collaborated with cross-functional teams to define and implement data-driven solutions.",
      "Developed jobs and workflows automate data processing and calculate elapsed time metrics.",
    ],
  },
];
const TERMINAL_WELCOME_MESSAGE =
  "Welcome to my interactive portfolio terminal! Type 'help' to see a list of commands.";

export { TERMINAL_SKILLS, TERMINAL_WELCOME_MESSAGE, EXPERIENCE_TIMELINE };
