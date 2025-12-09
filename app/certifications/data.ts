export interface CertificationEntry {
    name: string;
    issuer: string;
    date: string;
    credentialId?: string;
}

export const certifications: CertificationEntry[] = [
    {
        name: "Scrum Foundation Professional Certificate (SFPC)",
        issuer: "CertiProf",
        date: "Issued Jul 2022",
    },
    {
        name: "Remote Work and Virtual Collaboration Professional Certificate (RWVCPC)",
        issuer: "CertiProf",
        date: "Issued Jun 2022",
    },
    {
        name: "Lifelong Learning",
        issuer: "CertiProf",
        date: "Issued May 2022",
    },
    {
        name: "ISO/IEC 27001 Foundation",
        issuer: "CertiProf",
        date: "Issued Apr 2022",
    },
];
