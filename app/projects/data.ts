export interface ProjectEntry {
    name: string;
    period: string;
    description: string;
    technologies?: string[];
    repoUrl: string;
}

export const projects: ProjectEntry[] = [
    {
        name: "FintechX Chatbot",
        period: "2023 - Present",
        description:
            "Production-ready chatbot for FinTech inquiries using LangChain, OpenAI, and Pinecone. Demonstrates advanced RAG architecture, embeddings pipeline, and modern full-stack development with Docker deployment. Blueprint for implementing AI generative solutions with context engineering.",
        technologies: ["Next.js 14", "React", "Ant Design", "Tailwind CSS", "LangChain", "Pinecone", "OpenAI", "Docker", "TypeScript"],
        repoUrl: "https://github.com/thamys/fintechx-chatbot",
    },
    {
        name: "Next.js Base Layout",
        period: "2023 - Present",
        description:
            "Professional boilerplate with scalable frontend architecture, design system, and Storybook documentation. Demonstrates atomic design patterns, theme configuration, and standardization best practices. Accelerates project setup and ensures code quality consistency.",
        technologies: ["Next.js", "Material UI", "Storybook", "Design System", "TypeScript", "ESLint", "Prettier"],
        repoUrl: "https://github.com/thamys/nextjs-baselayout",
    },
    {
        name: "Writing with AI",
        period: "2024",
        description:
            "Multi-user platform for AI-powered writing and content generation. Shows product thinking beyond code, with intelligent flows and real-world AI integration. Practical example of building production-ready AI features.",
        technologies: ["Next.js", "TypeScript", "AI APIs", "React", "Multi-tenant Architecture"],
        repoUrl: "https://github.com/thamys/writing-with-ia",
    },
    {
        name: "Smart Contracts Webhooks",
        period: "2023",
        description:
            "Integration layer between blockchain and traditional systems. Listens to smart contract events and triggers webhooks for real-time automation. Bridges Web2 and Web3, demonstrating distributed systems and event-driven architecture.",
        technologies: ["Node.js", "Web3", "Ethereum", "Webhooks", "TypeScript", "Event-Driven Architecture"],
        repoUrl: "https://github.com/thamys/smart-contracts-webhooks",
    },
    {
        name: "Portfolio Website",
        period: "2023 - Present",
        description:
            "Personal portfolio with responsive design, dark mode, and optimized performance. Showcases modern frontend development practices, accessibility, and SEO optimization. Open source reference for building professional developer portfolios.",
        technologies: ["Next.js", "TypeScript", "Ant Design", "Tailwind CSS", "SEO", "Responsive Design"],
        repoUrl: "https://github.com/thamys/thamysg",
    },
];
