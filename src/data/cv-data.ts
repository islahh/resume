export interface CVData {
  header: {
    name: string;
    title: string;
    contact: {
      phone: string;
      email: string;
      location: string;
      linkedin: string;
      github: string;
    };
  };
  sections: {
    summary: string;
    experience: Array<{
      title: string;
      company: string;
      date: string;
      points: string[];
    }>;
    education: Array<{
      degree: string;
      institution: string;
      date: string;
      cgpa: string;
    }>;
    skills: string[];
    certifications: Array<{
      name: string;
      issuer: string;
      date: string;
      verification?: string;
    }>;
    awards: Array<{
      title: string;
      issuer: string;
      date: string;
    }>;
  };
}

export const cvData: CVData = {
  header: {
    name: "Islah Mohammad Musleh",
    title: "Senior Backend Software Engineer",
    contact: {
      phone: "+60132225295",
      email: "Islah.musleh@gmail.com",
      location: "Selangor, Malaysia",
      linkedin: "https://www.linkedin.com/in/islah-musleh",
      github: "",
    },
  },
  sections: {
    summary:
      "Senior Backend Software Engineer with 6+ years of experience architecting and delivering high-performance, cloud-native microservices using Node.js, TypeScript, and NestJS. Proven track record of leading cross-functional engineering teams, driving a 20% reduction in bug reports and a 40% lift in user engagement through data-driven feature delivery. Adept at modernising monolithic systems into scalable microservice architectures, enforcing SOLID principles and CI/CD best practices, and mentoring engineers to produce world-class software. Currently contributing to cutting-edge R&D projects at Telekom Malaysia.",
    experience: [
      {
        title: "Researcher & Software Engineer",
        company: "TM Research and Development",
        date: "Jan 2024 – Present",
        points: [
          "Independently designed end-to-end system architecture for multiple R&D microservices, reducing project delivery time by accelerating team onboarding and API integration cycles.",
          "Led creation and deployment of new microservices covering database design, API development, and documentation, resulting in faster time-to-production across 3+ concurrent projects.",
          "Refactored legacy APIs to eliminate code duplication, improving maintainability and cutting technical debt by an estimated 30%.",
          "Introduced pre-commit hooks enforcing commit message standards and linting rules, reducing CI pipeline failures and improving overall code quality.",
          "Implemented SOLID and clean code principles across new services, achieving a 20% reduction in bug reports and a 15% increase in development efficiency.",
          "Mentored junior engineers on software best practices, clean architecture, and code review standards, elevating the team's output quality.",
        ],
      },
      {
        title: "Senior Backend Software Engineer",
        company: "Forest Interactive",
        date: "Jan 2023 – Dec 2023",
        points: [
          "Planned and executed 100+ production deployments with a 99% success rate by implementing structured release processes and rollback strategies.",
          "Designed and shipped a daily rewards feature that increased user engagement by 40%, directly impacting retention KPIs.",
          "Optimised critical SQL queries, delivering a 30% performance improvement in high-traffic system flows.",
          "Migrated monolithic services to a microservices architecture, improving deployment independence, system resilience, and horizontal scalability.",
          "Authored comprehensive technical documentation for all microservices, reducing onboarding time for new engineers.",
          "Mentored junior developers on backend best practices, code reviews, and testing standards, improving team-wide code quality.",
        ],
      },
      {
        title: "Backend Software Engineer",
        company: "Forest Interactive",
        date: "Jan 2022 – Dec 2022",
        points: [
          "Architected and implemented secure, scalable RESTful APIs aligned to SRS specifications and UI designs, supporting 5+ product lines.",
          "Integrated data pipelines across multiple back-end microservices and databases, ensuring seamless inter-service communication and zero-downtime deployments.",
          "Designed relational and NoSQL database schemas, improving query performance and data integrity across services.",
          "Led rigorous code reviews, enforcing standards that reduced post-release defects by an estimated 25%.",
          "Generated detailed API documentation via Swagger and guided front-end teams on integration, reducing cross-team friction.",
          "Managed deployments using Docker and CI/CD pipelines, cutting manual deployment effort and improving release consistency.",
        ],
      },
      {
        title: "Web Developer",
        company: "Forest Interactive",
        date: "Jan 2019 – Dec 2021",
        points: [
          "Built and maintained scalable RESTful backend services using PHP/Laravel and Node.js, supporting key business verticals.",
          "Integrated 10+ third-party APIs to extend platform functionality, enabling new product features without internal re-engineering.",
          "Developed dynamic, interactive front-end interfaces using JavaScript to improve user engagement and experience.",
          "Delivered production-quality software consistently while simultaneously completing a Master's degree, demonstrating strong time management and self-discipline.",
        ],
      },
      {
        title: "Software Engineering Intern",
        company: "Forest Interactive",
        date: "Jul 2018 – Dec 2018",
        points: [
          "Participated in all stages of the web application development lifecycle, contributing to frontend and backend tasks under senior engineer guidance.",
        ],
      },
    ],
    education: [
      {
        degree: "Master of Information Technology (Hons)",
        institution: "International Islamic University Malaysia",
        date: "Feb 2019 – Dec 2021",
        cgpa: "",
      },
      {
        degree: "Bachelor of Computer Science (Hons)",
        institution: "International Islamic University Malaysia",
        date: "Feb 2014 – Dec 2018",
        cgpa: "",
      },
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "PHP",
      "Node.js",
      "NestJS",
      "Express.js",
      "Laravel",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Firebase",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Linux",
      "Docker Swarm",
      "Docker Compose",
      "Microservices",
      "SOLID Principles",
      "REST API Design",
      "Swagger",
      "Jest",
      "Agile/Scrum",
      "Pashto (Native)",
      "English (Professional)",
      "Persian (Intermediate)",
    ],
    certifications: [],
    awards: [],
  },
};
