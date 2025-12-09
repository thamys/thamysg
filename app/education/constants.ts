interface DataType {
  gender?: string;
  name: {
    title?: string;
    first?: string;
    last?: string;
  };
  email?: string;
  picture: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
  nat?: string;
  loading: boolean;
}

export const educationList = [
  {
    title: "Analysis and Systems Development",
    date: "2019 - 2021",
    description:
      "Computer and Information Sciences and Support Services degree focused on systems analysis, development methodologies, and software engineering principles.",
    location: "Universidade Estácio de Sá",
  },
  {
    title: "Bachelor of Exact Sciences",
    date: "2009 - 2011",
    description:
      "Foundational studies in mathematics, physics, and computational sciences, providing a strong analytical and problem-solving background.",
    location: "Universidade Federal de Juiz de Fora",
  },
];
