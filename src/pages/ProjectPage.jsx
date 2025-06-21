import { useParams, Link } from "react-router-dom";
const projectImages = {
  project1: "/projects/Nookscape-scroll.png",
};

const ProjectPage = () => {
  const { projectId } = useParams();
  const imgUrl = projectImages[projectId];
  // A simple fallback if the project ID is invalid
  if (!imgUrl) {
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

  // The entire page is just a link back home and the scrollable image
  return (
    <div className="bg-white">
      <div className="p-4">
        <Link to="/" className="text-lg font-semibold hover:underline">
          &larr; Back to all projects
        </Link>
      </div>
      <div className="w-full">
        <img
          src={imgUrl}
          alt={`Project details for ${projectId}`}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ProjectPage;
