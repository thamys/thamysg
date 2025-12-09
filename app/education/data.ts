export interface EducationEntry {
    institution: string;
    degree: string;
    field: string;
    period: string;
    location?: string;
}

export const education: EducationEntry[] = [
    {
        institution: "Universidade Estácio de Sá",
        degree: "Analysis and Systems Development",
        field: "Computer and Information Sciences and Support Services",
        period: "2019 - 2021",
        location: "Brazil",
    },
    {
        institution: "Universidade Federal de Juiz de Fora",
        degree: "Bachelor of Exact Sciences",
        field: "Exact Sciences",
        period: "2009 - 2011",
        location: "Juiz de Fora, Brazil",
    },
];
