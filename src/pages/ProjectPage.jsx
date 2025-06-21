import { useParams, Link } from "react-router-dom";
const projectsData = [
  {
    id: "project1",
    title: "Nookscape",
    description:
      "Shaping a warm, nature-inspired brand identity for furniture and interiors studio Nookscape. Helping the brand connect with its audience through soft minimalism and thoughtful design rooted in natural textures and calm living.",
    services: ["Branding", "Digital", "Print"],
    imageUrl: "/projects/Nookscape-scroll.png",
  },
  {
    id: "project2",
    title: "Love Now Never Later",
    description: "A different description for the second project.",
    services: ["Web Design", "Development"],
    imageUrl: "/projects/project2-long-image.png",
  },
  // Add all your other projects here in the same format
];

const ProjectPage = () => {
  const { projectId } = useParams();
  // Find the entire project object now, not just the image URL
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <Link
          to="/"
          className="text-blue-500 hover:underline mt-8 inline-block"
        >
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* === Sticky Header Section === */}
      {/* 'sticky top-0' makes it stick to the top of the viewport when scrolling */}
      {/* 'bg-white' prevents the main image from showing through */}
      {/* 'z-10' ensures it stays on top of other content */}
      {/* 'border-b' creates the thin underline effect */}
      <header className="sticky top-0 bg-white z-10 border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
        {/* Flexbox to position content left and right */}
        <div className="flex justify-between max-w-7xl mx-auto">
          {/* Left Column: Title, Description, Services */}
          <div className="max-w-3xl">
            <h1 className="text-2xl font-semibold text-black">
              {project.title}
            </h1>
            <p className="mt-2 text-xl font-semibold text-gray-300">
              {project.description}
            </p>
            <div className="mt-4 flex items-center text-xl font-semibold text-gray-300">
              <span className="mr-2">&rarr;</span>
              {/* Join the services array into a single string */}
              <p>{project.services.join(", ")}</p>
            </div>
          </div>
          {/* Right Column: Back Link */}
          <div className="mt-34">
            <Link to="/" className="text-2xl font-semibold text-black">
              [Back]
            </Link>
          </div>
        </div>
      </header>

      {/* === Main Image Section === */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full mt-8">
          <img
            src={project.imageUrl}
            alt={`Project details for ${project.title}`}
            className="w-full h-auto"
          />
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;
