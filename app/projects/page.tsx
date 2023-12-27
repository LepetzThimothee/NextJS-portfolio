import ProjectCard from "@/components/ProjectCard";
import { projects } from "../myProjects";

export default function Projects() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8">Mes Projets</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};