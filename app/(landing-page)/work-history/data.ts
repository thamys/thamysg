interface Role {
  title: string;
  period: string;
  location: string;
  responsibilities: string[];
  skills: string[];
}

export interface WorkHistoryEntry {
  company: string;
  logoUrl?: string;
  companyUrl?: string;
  companyDescription?: string;
  roles: Role[];
}

export interface WorkHistoryByRoleEntry extends Role {
  company: string;
  logoUrl?: string;
  companyUrl?: string;
  companyDescription?: string;
} 

export const workHistory: WorkHistoryEntry[] = [
  {
    company: "Lumx",
    logoUrl: "https://example.com/path-to-lumx-logo.png",
    companyUrl: "https://www.lumx.com",
    companyDescription:
      "A cutting-edge tech company focused on blockchain solutions, enhancing digital identity security and innovation.",
    roles: [
      {
        title: "Front-End Developer | Tech Lead | Innovation | Blockchain",
        period: "October 2023 - Present",
        location: "São Paulo, Brazil",
        responsibilities: [
          "Create innovative projects using blockchain as core technologies, such as Digital Decentralized Identity with Polygon ID.",
        ],
        skills: ["Blockchain", "Digital Identity", "Innovation"],
      },
      {
        title: "Front-End Developer | Tech Lead | Innovation",
        period: "March 2023 - November 2023",
        location: "São Paulo, Brazil",
        responsibilities: [
          "Developed web apps compatible with multiple browsers and connected to WEB3.",
          "Coded using React.JS (with and without Next.JS) and UI frameworks (Ant Design, Tailwind).",
          "Contributed to projects within Scrum project management environments.",
        ],
        skills: [
          "React.js",
          "Next.js",
          "Ant Design",
          "Tailwind",
          "WEB3",
          "Scrum",
        ],
      },
    ],
  },
  {
    company: "DaX - Digital Assets",
    logoUrl: "https://example.com/path-to-dax-logo.png",
    companyUrl: "https://www.daxdigitalassets.com",
    companyDescription:
      "A pioneer in digital assets and WEB3 technologies, DaX is committed to transforming the financial landscape through innovation.",
    roles: [
      {
        title: "Front-End Developer | Tech Lead",
        period: "January 2023 - April 2023",
        location: "São Paulo, Brazil",
        responsibilities: [
          "Gained experience with WEB3 technologies and applied new techniques.",
          "Solved everyday problems, made decisions with confidence and autonomy.",
          "Architected systems, developed and supported legacy systems.",
          "Distributed tasks according to the team's capacity.",
        ],
        skills: [
          "WEB3",
          "Systems Architecture",
          "Problem Solving",
          "Team Management",
        ],
      },
    ],
  },
  {
    company: "Sistema VERI",
    logoUrl: "https://example.com/path-to-veri-logo.png",
    companyUrl: "https://www.sistemaveri.com",
    companyDescription:
      "Specializing in software solutions for project management, VERI is at the forefront of deploying agile methodologies to optimize product development.",
    roles: [
      {
        title: "Project Development Manager",
        period: "July 2022 - December 2022",
        location: "São Paulo, Brazil",
        responsibilities: [
          "Managed the new product development team from conception to delivery.",
          "Prioritized features, defined software architecture, and managed people and processes.",
        ],
        skills: [
          "Project Management",
          "Software Architecture",
          "Agile",
          "Team Leadership",
        ],
      },
    ],
  },
  {
    company: "App Masters",
    logoUrl: "https://example.com/path-to-app-masters-logo.png",
    companyUrl: "https://www.appmasters.io",
    companyDescription:
      "App Masters is a software house that creates and maintains diverse products, merging cutting-edge technologies with innovative designs.",
    roles: [
      {
        title: "Full-stack Developer",
        period: "August 2020 - July 2022",
        location: "Juiz de Fora, Minas Gerais, Brazil",
        responsibilities: [
          "Participated in the creation and maintenance of various products in different areas.",
          "Worked as a front-end and mobile developer to create apps and web apps.",
          "Collaborated with back-end developers to design APIs.",
        ],
        skills: ["Full-stack Development", "Mobile Development", "API Design"],
      },
    ],
  },
  {
    company: "Yunikon",
    logoUrl: "https://example.com/path-to-yunikon-logo.png",
    companyUrl: "https://www.yunikon.com",
    companyDescription:
      "Yunikon focuses on developing new products tailored for young entrepreneurs, aiming to innovate and lead in the entrepreneurial market.",
    roles: [
      {
        title: "CEO/Founder",
        period: "June 2019 - July 2022",
        location: "Juiz de Fora e Região, Brazil",
        responsibilities: [
          "Founded and led the company, focusing on the young entrepreneur market.",
          "Developed key operational initiatives for business growth.",
        ],
        skills: [
          "Entrepreneurship",
          "Business Development",
          "Leadership",
          "Marketing",
        ],
      },
    ],
  },
  {
    company: "eMiolo.com Solucoes Internet Ltda.",
    logoUrl: "https://example.com/path-to-emiolo-logo.png",
    companyUrl: "https://www.emiolo.com",
    companyDescription:
      "eMiolo.com specializes in innovative web solutions, including UI/UX design and full-stack development, employing modern architectures and technologies.",
    roles: [
      {
        title: "UI / UX | Full-Stack Developer",
        period: "August 2015 - April 2019",
        location: "Juiz de Fora e Região, Brazil",
        responsibilities: [
          "Reviewed code, debugged problems, and corrected issues.",
          "Developed and maintained microservices architectures using Docker, Kubernetes, and OpenShift.",
        ],
        skills: [
          "UI/UX Design",
          "Full-Stack Development",
          "Microservices",
          "Docker",
          "Kubernetes",
          "OpenShift",
        ],
      },
    ],
  },
  {
    company: "BrasilCenter",
    logoUrl: "https://example.com/path-to-brasilcenter-logo.png",
    companyUrl: "https://www.brasilcenter.com.br",
    companyDescription:
      "BrasilCenter is renowned for its extensive support services, specializing in IT infrastructure and internal systems development.",
    roles: [
      {
        title: "Técnico em Infraestrutura",
        period: "February 2014 - August 2015",
        location: "Juiz de Fora e Região, Brazil",
        responsibilities: [
          "Front-End Developer for intranet systems, developed and maintained internal systems in C# and PHP.",
        ],
        skills: ["Front-End Development", "C#", "PHP", "System Maintenance"],
      },
    ],
  },
  {
    company: "Aprimorar Desenvolvimento",
    logoUrl: "https://example.com/path-to-aprimorar-logo.png",
    companyUrl: "https://www.aprimorardesenvolvimento.com",
    companyDescription:
      "Aprimorar Desenvolvimento is a web design company that focuses on creating innovative user interfaces and delivering high-quality websites.",
    roles: [
      {
        title: "Web Designer",
        period: "August 2011 - October 2014",
        location: "Juiz de Fora e Região, Brazil",
        responsibilities: [
          "Designed user interfaces to meet client specifications.",
          "Developed features using HTML, CSS, and JavaScript for both mobile and desktop platforms.",
        ],
        skills: ["Web Design", "HTML", "CSS", "JavaScript", "User Experience"],
      },
    ],
  },
  {
    company: "CAEd - Centro de Políticas Públicas e Avaliação da Educação",
    logoUrl: "https://example.com/path-to-caed-logo.png",
    companyUrl: "https://www.caed.ufjf.br",
    companyDescription:
      "CAEd focuses on public policy evaluation and education assessment, providing technical support and developing educational software.",
    roles: [
      {
        title: "Atendente de Suporte",
        period: "June 2009 - August 2011",
        location: "Juiz de Fora e Região, Brazil",
        responsibilities: [
          "Provided technical support for the SIMADE software.",
        ],
        skills: ["Technical Support"],
      },
    ],
  },
];

export const workHistoryByRole: WorkHistoryByRoleEntry[] = workHistory.flatMap(
  (entry) =>
    entry.roles.map((role) => ({
      ...role,
      company: entry.company,
      logoUrl: entry.logoUrl,
      companyUrl: entry.companyUrl,
      companyDescription: entry.companyDescription,
    }))
);
