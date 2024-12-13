interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    createdBy: string;
    createdAt: string;
    idea: string;
    timeline: string;
    techStack: string;
    clientType: string;
    notes: string;
    status: string; // Add status field
}

interface ProjectCardsProps {
    projects: Project[];
    onCardClick: (project: Project) => void;
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>; // Include setProjects
}

export const ProjectCards: React.FC<ProjectCardsProps> = ({ projects, onCardClick, setProjects }) => {


    const handleStatusChange = (id: number, newStatus: Project["status"]) => {
        const updatedProjects = projects.map((project) =>
            project.id === id ? { ...project, status: newStatus } : project
        );
        setProjects(updatedProjects); // Update projects in the parent state
    };


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <div
                    key={project.id}
                    onClick={() => onCardClick(project)}
                    className="p-4 bg-white shadow-md rounded-lg border border-gray-200 cursor-pointer hover:shadow-lg flex flex-col"
                >
                    <h3 className="text-lg text-gray-600 font-semibold">{project.title}</h3>
                    <p className="text-gray-600 flex-1">{project.description}</p>
                    <div className="mt-10">
                        <span className="block text-sm text-gray-500">Category: {project.category}</span>
                        <span className="block text-sm text-gray-600">User: {project.createdBy}</span>
                    </div>

                    <div className="mt-4">
                        <span className={`inline-block px-2 py-1 rounded text-xs ${project.status === "Approved"
                            ? "bg-green-100 text-green-700"
                            : project.status === "Declined"
                                ? "bg-red-100 text-red-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}>
                            {project.status}
                        </span>
                    </div>
                    {/* <div className="mt-2">
                        <select
                            className="border rounded text-sm px-2 py-1"
                            value={project.status}
                            onChange={(e) =>
                                handleStatusChange(project.id, e.target.value as Project["status"])
                            }
                        >
                            <option value="Under Review">Under Review</option>
                            <option value="Waiting">Waiting</option>
                            <option value="Approved">Approved</option>
                            <option value="Declined">Declined</option>
                        </select>
                    </div> */}

                </div>
            ))}
        </div>
    );
};

