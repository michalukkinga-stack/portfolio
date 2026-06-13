export interface Bullet {
  text: string;
  boldPrefix?: string;
}

export interface SlideSection {
  label?: string;
  text?: string;
  boldPhrases?: string[];
  bullets?: Bullet[];
  tags?: string[];
}

export interface Persona {
  name: string;
  bullets: string[];
  image?: string;
}

export interface ProcessPhase {
  name: string;
  activities: string[];
}

export interface Concept {
  title: string;
  pros: string[];
  cons: string[];
  image?: string;
}

export interface Slide {
  title?: string;
  subtitle?: string;
  layout?: "two-col" | "default" | "personas" | "cover" | "process" | "concepts" | "client" | "fullimage";
  sections: SlideSection[];
  image?: string;
  images?: string[];
  personas?: Persona[];
  footerTags?: string[];
  phases?: ProcessPhase[];
  concepts?: Concept[];
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  tags: string[];
  description: string;
  images: string[];
  client?: string;
  slides?: Slide[];
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Human Centered Evaluator",
    subtitle: "A unified platform for evaluating and governing AI systems.",
    tags: ["UX Research", "User Interviews", "Personas", "Jobs to be done", "Prototyping", "Usability testing"],
    description: "",
    images: ["/images/hce-cover.png"],
    client: "PwC",
    slides: [
      {
        layout: "cover",
        title: "Human Centered Evaluator",
        subtitle: "A unified platform for evaluating and governing AI systems.",
        sections: [],
        images: ["/images/hce-use-cases.png", "/images/hce-cover.png"],
        footerTags: ["UX Research", "User Interviews", "Personas", "Jobs to be done", "Prototyping", "Usability testing"],
      },
      {
        layout: "client",
        image: "/images/pwc-logo.png",
        sections: [
          {
            label: "Client",
            text: "PwC Consulting Factory",
          },
          {
            text: "Consulting Factory is an internal initiative platform in PwC focused on building and scaling AI and GenAI solutions for Consulting practices.",
          },
        ],
      },
      {
        title: "Design process",
        layout: "process",
        sections: [],
        phases: [
          {
            name: "Discover",
            activities: ["POC application UX audit", "User research", "User journey mapping"],
          },
          {
            name: "Define",
            activities: ["Personas", "Jobs to be done", "User Flow mapping"],
          },
          {
            name: "Develop",
            activities: ["Lo-fi Wireframing", "Preparing design concepts", "User testing"],
          },
          {
            name: "Deliver",
            activities: ["HiFi mock-ups of the final solution", "Prototyping", "Development support"],
          },
        ],
      },
      {
        title: "How I started?",
        layout: "two-col",
        image: "/images/hce-analysis.png",
        sections: [
          {
            text: "The product was initially handed over to me as a tool that required only a visual redesign. It was created as a POC, solely by developers, without the involvement of a UX designer.",
          },
          {
            text: "After conducting a quick audit and spending a short time using it, it became clear to me that a surface-level update would not be sufficient. I found the interface unintuitive, struggled with gaps in the logic and I had problems with understanding both application and underlying processes.",
          },
          {
            text: "I started by mapping the existing application flow and defining the jobs to be done. This process helped us step back and critically assess what the application was actually meant to achieve. My role was to identify logical gaps and redesign the application from the ground up, improving and structuring the process flow to make it coherent and user-centered.",
            boldPhrases: ["jobs to be done", "process flow", "user-centered."],
          },
        ],
        footerTags: ["UX Audit", "User Flow", "User-Centered Design"],
      },
      {
        title: "Jobs to be done",
        layout: "personas",
        sections: [],
        personas: [
          {
            name: "Group Admin",
            image: "/images/persona-3.png",
            bullets: [
              "Use Case creation",
              "Control over granting access to Use Cases for Use Case Admins",
              "Langfuse configuration",
            ],
          },
          {
            name: "Use Case Admin",
            image: "/images/persona-2.png",
            bullets: [
              "Use Cases preparation",
              "Datasets Creation",
              "Adding SMEs to the Use Cases",
              "Supervision over evaluation results performed by SMEs",
              "Monitoring the performance of LLM applications",
            ],
          },
          {
            name: "Subject Matter Expert (SME)",
            image: "/images/persona-1.png",
            bullets: [
              "Running evaluations",
              "LLM applications quality assessment",
              "Evaluation review (Human Feedback Form)",
              "Results calibration",
            ],
          },
        ],
        footerTags: ["UX Research", "User Interviews", "Personas"],
      },
      {
        title: "Key challenges",
        image: "/images/hce-process-flow.png",
        sections: [
          {
            bullets: [
              {
                text: "The application flow is distributed across multiple user roles, each with distinct permissions, access levels, and responsibilities within the system. At the same time, their work is highly interdependent. The core issue was the lack of clearly defined role responsibilities, along with insufficient clarity around how these responsibilities overlapped and interacted. Additionally, the roles were not effectively managed.",
              },
            ],
            tags: ["UX Research", "User Interviews"],
          },
          {
            bullets: [
              {
                text: "The application also required integration with an external tool, Langfuse, which involved technical coordination and a solid understanding of the tool itself.",
              },
            ],
            tags: ["System analysis", "Technical research", "Technical discovery"],
          },
          {
            text: "All of these challenges required the creation of a detailed process flow, clearly mapping user roles and their actions both within the application and in external systems (such as Langfuse).",
          },
        ],
        footerTags: ["User flow"],
      },
      {
        title: "UI challenges",
        sections: [
          {
            bullets: [
              {
                boldPrefix: "The key UI challenge — and at the same time the most critical module of the application — was the Human Feedback Form.",
                text: " The goal was to design a clear and intuitive interface that users could easily navigate, despite the large number of questions, inputs, outputs, and evaluation metrics. This section required dedicated usability exploration.",
              },
            ],
          },
          {
            text: "The main difficulty was that users needed to go through dozens of questions, often involving lengthy input, output, and expected output content, while evaluating each metric individually. The goal was to design a form that minimizes the number of clicks and reduces friction, preventing additional user frustration.",
          },
        ],
        footerTags: ["UI Design", "Visual Design", "User testing", "A/B testing", "Lo-fi wireframes", "Quick usability testing", "Quick insights"],
      },
      {
        layout: "concepts",
        sections: [],
        concepts: [
          {
            title: "Concept 1",
            image: "/images/concept-1.png",
            pros: ["Side panel is a convenient solution for users"],
            cons: ["Typing scores by keyboard and moving between pages using navigation is really time-consuming"],
          },
          {
            title: "Concept 2",
            image: "/images/concept-2.png",
            pros: ["Scrolling through questions is a very convenient solution", "Radio buttons are a fairly quick way to provide ratings"],
            cons: ["Users may be confused about which question is being rated", "The bottom position of the panel doesn't feel natural for users"],
          },
          {
            title: "Concept 3",
            image: "/images/concept-3.png",
            pros: ["Scrolling through questions is a very convenient solution"],
            cons: ["Users may be confused about which question is being rated"],
          },
        ],
        footerTags: ["UI Design", "Visual Design", "User testing", "A/B testing", "Lo-fi wireframes", "Quick usability testing", "Quick insights"],
      },
      {
        layout: "fullimage",
        title: "Human Feedback Form — final UI concept",
        image: "/images/hce-hff-final.png",
        sections: [],
        footerTags: [],
      },
      {
        title: "User Tests",
        sections: [
          {
            text: "The whole user flow was tested with few CF members. They were asked to go through the prototype and make few tasks:",
            bullets: [
              { text: "Prepare the dataset" },
              { text: "Review the Evaluation (using human feedback module)" },
              { text: "Download and compare reports before and after calibration" },
            ],
          },
          {
            text: "Users handled all tasks very well; however, during the tests I observed that it takes a significant amount of time from logging into the application to reaching the report they are looking for. Additionally, users need to use sorting to find the report they are searching for, because the names of use cases and evaluations can be difficult to remember and are created by other people.",
          },
        ],
        footerTags: ["Task-Based Testing", "Prototype testing", "Moderated Usability Testing", "Qualitative research"],
      },
      {
        layout: "two-col",
        image: "/images/hce-reports.png",
        sections: [
          {
            label: "Problem:",
            text: "Difficult access to the final evaluation documents - the Reports.",
          },
          {
            label: "Solutions:",
            bullets: [
              {
                boldPrefix: "A separate landing dashboard",
                text: " for each user group (to be implemented in the next application release)",
              },
              {
                boldPrefix: "An additional tab with all reports generated",
                text: " - this was a quick win, as the frontend cost was minimal",
              },
            ],
          },
        ],
        footerTags: ["Key findings", "Problem solving", "Quick win"],
      },
    ],
  },
  {
    id: "project-2",
    title: "",
    tags: [],
    description: "",
    images: [],
  },
  {
    id: "project-3",
    title: "",
    tags: [],
    description: "",
    images: [],
  },
];

export const contact = {
  name: "Kinga Kowalska",
  phone: "+48 000 000 000",
  email: "kinga@example.com",
};
