import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    linkedin: {name:string, url:string}[];
}

export default function ProjectCard({ title, description, technologies, linkedin }: ProjectCardProps) {
    return (
        <div className="p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 border border-gray-300">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-white">{description}</p>
            <div className="mt-4">
                <p className="text-sm font-semibold">Langages utilisés:</p>
                <ul className="list-disc list-inside">
                    {technologies.map((tech, index) => (
                        <li key={index} className="text-gray-300">{tech}</li>
                    ))}
                </ul>
            </div>
            {linkedin.length > 0 && (
                <div className="mt-4">
                    <p className="text-sm font-semibold">Membres de l&apos;équipe:</p>
                    <ul className="list-disc list-inside">
                        {linkedin.map((member, index) => (
                            <li key={index}>
                                <Link href={member.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    {member.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
