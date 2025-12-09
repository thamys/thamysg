export interface ArticleEntry {
    title: string;
    description: string;
    url: string;
    date?: string;
    language: "en" | "pt";
}

export const articles: ArticleEntry[] = [
    {
        title: "How to Deliver Complex Web Projects in Record Time: My Approach to Front-End Development",
        description:
            "Learn to speed up web development using React.js, Next.js, Tailwind CSS, and Ant Design, delivering complex projects quickly while maintaining quality.",
        url: "https://www.linkedin.com/pulse/how-deliver-complex-web-projects-record-time-my-approach-guedes-jkvaf/",
        language: "en",
    },
    {
        title: "Explorando o Polygon ID na Web3: Uma visão técnica",
        description:
            "O que é o Polygon ID? Na busca por soluções descentralizadas na Web3, o Polygon ID emergiu como um serviço self-hosted baseado em smart contracts, focado na geração e gestão de Identidades Digitais Descentralizadas (DID) e credenciais digitais.",
        url: "https://www.linkedin.com/pulse/explorando-o-polygon-id-na-web3-uma-vis%C3%A3o-t%C3%A9cnica-thamyres-guedes-a6uxf/",
        language: "pt",
    },
    {
        title: "Quanto custa um aplicativo?",
        description:
            "Durante toda a minha carreira de desenvolvedora eu me deparei com pessoas pedindo orçamentos ou me propondo parcerias do tipo: Eu entro com a ideia e você com a mão de obra. Mas muitas vezes essas pessoas desconhecem o que existe por trás do desenvolvimento de um aplicativo.",
        url: "https://www.linkedin.com/pulse/quanto-custa-um-aplicativo-thamyres-guedes/",
        language: "pt",
    },
];
