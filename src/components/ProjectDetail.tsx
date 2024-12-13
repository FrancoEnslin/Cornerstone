// import React, { useState } from "react";

// interface ProjectDetailProps {
//     project: {
//         id: number;
//         title: string;
//         description: string;
//         category: string;
//         createdBy: string;
//         createdAt: string,
//         idea: string;
//         timeline: string;
//         techStack: string;
//         clientType: string;
//         notes: string;
//         status: string;
//     };
//     onClose: () => void;
//     setProjects: React.Dispatch<React.SetStateAction<Project[]>>; // Include setProjects
// }

// interface Project {
//     id: number;
//     title: string;
//     description: string;
//     category: string;
//     createdBy: string;
//     createdAt: string;
//     idea: string;
//     timeline: string;
//     techStack: string;
//     clientType: string;
//     notes: string;
//     status: string
// }

// const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose, setProjects }) => {

//     const [status, setStatus] = useState(project.status);

//     const handleStatusChange = (id: number, newStatus: Project["status"]) => {
//         setProjects((prevProjects) =>
//             prevProjects.map((p) =>
//                 p.id === id ? { ...p, status: newStatus } : p
//             )
//         );
//         setStatus(newStatus); // Update local state for immediate UI feedback
//     };


//     return (
//         <div className="min-h-[90vh] p-6 bg-gray-100">
//             <button
//                 onClick={onClose}
//                 className="mb-4 px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
//             >
//                 Back to Projects
//             </button>
//             <div className="p-6 bg-white shadow-md rounded-lg">
//                 <h2 className="text-3xl text-gray-700 font-bold mb-4">{project.title}</h2>
//                 <p className="mb-6 text-lg text-gray-700">{project.description}</p>
//                 <p className="text-sm text-gray-500">
//                     <strong>Category:</strong> {project.category}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                     <strong>Created By:</strong> {project.createdBy}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                     <strong>Created At:</strong> {project.createdAt}
//                 </p>
//                 <div className="mt-4">
//                     <h3 className="text-lg font-bold text-gray-700">Status</h3>
//                     <select
//                         className="border rounded text-sm px-2 py-1 mt-2"
//                         value={status}
//                         onChange={(e) => setStatus(e.target.value as Project["status"])}
//                     >
//                         <option value="Under Review">Under Review</option>
//                         <option value="Waiting">Waiting</option>
//                         <option value="Approved">Approved</option>
//                         <option value="Declined">Declined</option>
//                     </select>
//                     <button
//                         onClick={handleStatusChange}
//                         className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                     >
//                         Update Status
//                     </button>
//                 </div>

//                 <hr className="my-4" />

//                 {/* New Fields */}
//                 <div className="mb-4">
//                     <h3 className="text-lg font-bold text-gray-700">Idea Description</h3>
//                     <p className="text-gray-600">{project.idea}</p>
//                 </div>
//                 <div className="mb-4">
//                     <h3 className="text-lg font-bold text-gray-700">Timeline</h3>
//                     <p className="text-gray-600">{project.timeline}</p>
//                 </div>
//                 <div className="mb-4">
//                     <h3 className="text-lg font-bold text-gray-700">Tech Stack</h3>
//                     <p className="text-gray-600">{project.techStack}</p>
//                 </div>
//                 <div className="mb-4">
//                     <h3 className="text-lg font-bold text-gray-700">Client Type</h3>
//                     <p className="text-gray-600">{project.clientType}</p>
//                 </div>
//                 <div className="mb-4">
//                     <h3 className="text-lg font-bold text-gray-700">Additional Notes</h3>
//                     <p className="text-gray-600">{project.notes}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProjectDetail;



import React, { useState } from "react";

interface ProjectDetailProps {
    project: {
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
        status: string;
    };
    onClose: () => void;
    setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

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
    status: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose, setProjects }) => {
    const [status, setStatus] = useState(project.status);

    const handleStatusChange = (id: number, newStatus: Project["status"]) => {
        setProjects((prevProjects) =>
            prevProjects.map((p) =>
                p.id === id ? { ...p, status: newStatus } : p
            )
        );
        setStatus(newStatus); // Update local state for immediate UI feedback
    };

    return (
        <div className="min-h-[90vh] p-6 bg-gray-100">
            <button
                onClick={onClose}
                className="mb-4 px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
            >
                Back to Projects
            </button>
            <div className="p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-3xl text-gray-700 font-bold mb-4">{project.title}</h2>
                <p className="mb-6 text-lg text-gray-700">{project.description}</p>
                <p className="text-sm text-gray-500">
                    <strong>Category:</strong> {project.category}
                </p>
                <p className="text-sm text-gray-500">
                    <strong>Created By:</strong> {project.createdBy}
                </p>
                <p className="text-sm text-gray-500">
                    <strong>Created At:</strong> {project.createdAt}
                </p>
                <div className="mt-4">
                    <h3 className="text-lg font-bold text-gray-700">Status</h3>
                    <select
                        className="border rounded text-sm px-2 py-1 mt-2"
                        value={status}
                        onChange={(e) => setStatus(e.target.value as Project["status"])}
                    >
                        <option value="Under Review">Under Review</option>
                        <option value="Waiting">Waiting</option>
                        <option value="Approved">Approved</option>
                        <option value="Declined">Declined</option>
                    </select>
                    <button
                        onClick={() => handleStatusChange(project.id, status)} // Corrected here
                        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Update Status
                    </button>
                </div>

                <hr className="my-4" />

                {/* New Fields */}
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-700">Idea Description</h3>
                    <p className="text-gray-600">{project.idea}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-700">Timeline</h3>
                    <p className="text-gray-600">{project.timeline}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-700">Tech Stack</h3>
                    <p className="text-gray-600">{project.techStack}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-700">Client Type</h3>
                    <p className="text-gray-600">{project.clientType}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-700">Additional Notes</h3>
                    <p className="text-gray-600">{project.notes}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
