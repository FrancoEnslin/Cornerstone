import { useState } from "react";
import Modal from "./components/Modal";
import Filter from "./components/Filter";
import { ProjectCards } from "./components/ProjectCards";
import ProjectDetail from "./components/ProjectDetail";
import CategoryFilter from "./components/Filter";
import UserFilter from "./components/UserFilter";

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


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "New CRM System",
      description: "A system to manage customer relations.",
      category: "Software",
      createdAt: "2024-12-10",
      createdBy: "Franco",
      idea: `
        The goal is to develop a Customer Relationship Management (CRM) system 
        that enables sales teams to efficiently track leads, manage accounts, 
        and optimize the sales pipeline. The system will include features like 
        contact management, task automation, reporting, and sales forecasting. 
        Integration with email and calendar tools is essential to streamline 
        communication. Scalability is critical to accommodate company growth 
        and additional user roles.
      `,
      timeline: "6 months",
      techStack: "React, Node.js, PostgreSQL",
      clientType: "Internal",
      notes: "Focus on integration with existing systems and ensure scalability.",
      status: "Approved"
    },
    {
      id: 2,
      title: "IoT Monitoring",
      description: "Monitor device data in real-time.",
      category: "Hardware",
      createdAt: "2024-12-08",
      createdBy: "Frans",
      idea: `
        This project aims to create an Internet of Things (IoT) monitoring 
        solution that provides real-time insights into connected device data. 
        The dashboard will feature live metrics, performance tracking, and 
        alerts for anomalies or failures. Integration with cloud services will 
        enable secure data storage and scalability. The solution will also 
        support API integration to connect with third-party systems for extended 
        functionality.
      `,
      timeline: "4 months",
      techStack: "Angular, Python, MQTT",
      clientType: "For a Client",
      notes: "Client requires detailed reports and alerts for anomalies.",
      status: "Declined"
    },
    {
      id: 3,
      title: "Inventory Management",
      description: "Track stock and supply levels.",
      category: "Web Development",
      createdAt: "2024-12-07",
      createdBy: "Matthew",
      idea: `
        The inventory management project aims to optimize warehouse operations 
        by providing a centralized system to track stock levels, incoming shipments, 
        and outgoing orders. Key features include barcode scanning, real-time 
        updates, reorder alerts, and multi-location inventory management. The 
        solution will provide analytics to forecast demand and ensure stock 
        availability for critical operations.
      `,
      timeline: "5 months",
      techStack: "Vue.js, Laravel, MySQL",
      clientType: "For a Client",
      notes: "Ensure cross-platform accessibility and implement barcode scanning.",
      status: "Under Review"
    },
    {
      id: 4,
      title: "Network Optimization",
      description: "Improve network speed and reliability.",
      category: "Network",
      createdAt: "2024-12-09",
      createdBy: "Franco",
      idea: `
        This project is focused on improving the overall performance of 
        the company’s network infrastructure. The key objectives include 
        reducing downtime, enhancing network speed, and improving security. 
        The implementation will involve upgrading existing hardware, optimizing 
        routing protocols, and deploying advanced monitoring tools to identify 
        bottlenecks. Training sessions for the IT team will ensure ongoing 
        maintenance and efficient troubleshooting.
      `,
      timeline: "3 months",
      techStack: "Cisco Networking Tools, Python",
      clientType: "Internal",
      notes: "Conduct thorough network performance audits during implementation.",
      status: "Waiting"
    },
    {
      id: 5,
      title: "Mobile App Redesign",
      description: "Redesign the mobile application for better user experience.",
      category: "Mobile Development",
      createdAt: "2024-12-11",
      createdBy: "Simone",
      idea: `
        The mobile app redesign aims to deliver a modern, intuitive user interface 
        that enhances the user experience. Improvements include simplified navigation, 
        better performance across devices, and updated branding elements. The new app 
        will feature offline functionality, improved security protocols, and seamless 
        integration with backend services. User feedback from the existing app will 
        guide the redesign process.
      `,
      timeline: "4 months",
      techStack: "Flutter, Firebase",
      clientType: "Internal",
      notes: "Incorporate user feedback from the previous version.",
      status: "Approved"
    },
    {
      id: 6,
      title: "Data Analysis Platform",
      description: "A platform to analyze business data for actionable insights.",
      category: "Process Tools",
      createdAt: "2024-12-11",
      createdBy: "Ivan",
      idea: `
        This project involves creating a centralized platform for analyzing 
        and visualizing business data. The platform will provide tools for 
        creating custom reports, identifying trends, and generating predictive 
        insights. Integration with popular business tools (e.g., Excel, Salesforce) 
        will enhance functionality. Advanced features like natural language 
        queries and AI-powered recommendations will enable better decision-making.
      `,
      timeline: "8 months",
      techStack: "Power BI, Python, AWS",
      clientType: "For a Client",
      notes: "Ensure robust security measures for sensitive data.",
      status: "Approved"
    }
  ]);

  const [newProject, setNewProject] = useState({ title: "", description: "", category: "", createdBy: "", createdAt: "", idea: "", timeline: "", techStack: "", clientType: "", notes: "", status: "", });
  const [filter, setFilter] = useState("All Categories");
  const [userFilter, setUserFilter] = useState("All Users");

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleAddProject = () => {
    console.log('Yo ')
    if (newProject.title && newProject.description && newProject.category) {

      setProjects([
        ...projects,
        {
          id: projects.length + 1,
          title: newProject.title,
          description: newProject.description,
          category: newProject.category,
          createdBy: newProject.createdBy,
          createdAt: newProject.createdAt,
          idea: newProject.idea,
          timeline: newProject.timeline,
          techStack: newProject.techStack,
          clientType: newProject.clientType,
          notes: newProject.notes,
          status: newProject.status
        },
      ]);
      setNewProject({ title: "", description: "", category: "", createdBy: "", createdAt: "", idea: "", timeline: "", techStack: "", clientType: "", notes: "", status: "Under Review", });
      toggleModal();
    }
  };

  // Combine both filters
  const filteredProjects = projects.filter(
    (project) =>
      (filter === "All Categories" || project.category === filter) &&
      (userFilter === "All Users" || project.createdBy === userFilter)
  );

  return (
    <div className="min-h-screen flex flex-col items-center align-center py-10 px-10">
      <div className="w-full max-w-4xl">
        {!selectedProject ? (
          <>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Project Ideas</h1>
              <button
                onClick={toggleModal}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add Project Idea
              </button>
            </div>

            <div className="flex justify-between items-center mb-6 space-x-4">
              {/* Category Filter */}
              <div className="flex-1">
                <CategoryFilter filter={filter} setFilter={setFilter} />
              </div>

              {/* User Filter */}
              <div className="flex-1">
                <UserFilter filter={userFilter} setFilter={setUserFilter} />
              </div>
            </div>



            {/* Project Cards */}
            <ProjectCards
              projects={filteredProjects}
              onCardClick={(project) => setSelectedProject(project)}
              setProjects={setProjects}
            />
          </>
        ) : (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            setProjects={setProjects}
          />
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <h2 className="text-xl font-bold mb-4 text-gray-700">Add New Project</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Short Description</label>
            <textarea
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              className="w-full p-2 border rounded"
              value={newProject.category}
              onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
            >
              <option value="All Categories">All Categories</option>
              <option value="Software">Software</option>
              <option value="Hardware">Hardware</option>
              <option value="Process Tools">Process Tools</option>
              <option value="Network">Network</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Office">Office</option>
            </select>

          </div>


          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Idea Description</label>
            <textarea
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              value={newProject.idea}
              onChange={(e) => setNewProject({ ...newProject, idea: e.target.value })}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Timeline</label>
            <input
              type="text"
              placeholder="e.g., Q1 2024, 6 months, etc."
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newProject.timeline}
              onChange={(e) => setNewProject({ ...newProject, timeline: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Tech Stack</label>
            <input
              type="text"
              placeholder="e.g., React, Node.js, AWS"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newProject.techStack}
              onChange={(e) => setNewProject({ ...newProject, techStack: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Client Type</label>
            <select
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newProject.clientType}
              onChange={(e) => setNewProject({ ...newProject, clientType: e.target.value })}
            >
              <option value="">Select Client Type</option>
              <option value="Internal">Internal</option>
              <option value="Client">For a Client</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
            <textarea
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Any extra information about the project"
              value={newProject.notes}
              onChange={(e) => setNewProject({ ...newProject, notes: e.target.value })}
            ></textarea>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              onClick={toggleModal}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleAddProject}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </Modal>
      )}


      {/* Modal */}
      {/* {isModalOpen && (
        <Modal onClose={toggleModal}>
          <h2 className="text-xl font-bold mb-4 text-gray-700">Add New Project</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Short Description</label>
            <textarea
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newProject.category}
              onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
            >
              <option value="">Select Category</option>
              <option value="Software">Software</option>
              <option value="Hardware">Hardware</option>
              <option value="Process Tools">Process Tools</option>
              <option value="Network">Network</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Office">Office</option>
            </select>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={toggleModal}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleAddProject}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </Modal>
      )} */}
    </div>
  );
}

export default App;







