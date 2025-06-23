import { useParams, Link } from "react-router-dom";
import { useState } from "react";
const projectsData = [
  {
    id: "project1",
    title: "Nookscape",
    description:
      "Shaping a warm, nature-inspired brand identity for furniture and interiors studio Nookscape. Helping the brand connect with its audience through soft minimalism and thoughtful design rooted in natural textures and calm living.",
    services: ["Branding", "Digital", "Print"],
    imageUrl: ["/projects/Nookscape-scroll.png"],
  },
  {
    id: "project2",
    title: "Glow Assesmbly",
    description:
      "Designing sustainable, user-centered packaging for skincare brand. Promoting environmental responsibility through eco-friendly materials, refillable solutions and introducing a stackable system that redefines beauty packaging — streamlining multi-product purchases, reducing waste and boosting brand value.",
    services: ["Packaging", "3D Modelling", "Print"],
    imageUrl: ["/projects/Glow-scroll.png"],
  },
  {
    id: "project3",
    title: "Love Now Never Later",
    description:
      "Branding an immersive exhibition through emotional storytelling and bold visuals. Helping connect with Gen Z by exploring love, regret, and forgiveness, with a visual identity and promo suite that encourages reflection and engagement.",
    services: ["Branding", "Digital", "Print", "Concept Development"],
    imageUrl: ["/projects/Love-scroll.png"],
  },
  {
    id: "project4",
    title: "Melopidity",
    description:
      "Prototyping a music streaming platform that challenges algorithm-driven listening with bold, user-first design. Helping break the filter bubble and connect Gen Z music lovers to diverse sounds through intuitive discovery and culturally rich exploration.",
    services: ["UX/UI", "Illustration", "Prototyping"],
    imageUrl: ["/projects/Melopidity-scroll.png"],
  },
  {
    id: "project5",
    title: "Spring Garden",
    description:
      "Bringing a seasonal collaboration to life through vibrant branding and visual storytelling. Helping a partnership between Rosie Finch and Sweet Lady Jane celebrate spring with a limited-edition menu and floral experience for trend-savvy dessert and flower lovers.",
    services: ["Branding", "Packaging", "Concept Development"],
    imageUrl: ["/projects/Spring-scroll.png"],
  },
  {
    id: "project6",
    title: "Serenism",
    description:
      "Creating an experiential brand identity for a public art project by the City of Melbourne. Helping Serenism draw people back to the city with an outdoor labyrinth and visual storytelling that reconnects young adults and art lovers with inner calm in a fast-paced urban world.",
    services: ["Branding", "Print", "Prototyping", "Concept Development"],
    imageUrl: ["/projects/Serenism-scroll.png"],
  },
  {
    id: "archive1",
    services: [],
    title: "Graphics",
    imageUrl: ["/projects/Archive1-Scroll.png"],
  },
  {
    id: "archive2",
    services: [],
    title: "Illustration",
    imageUrl: ["/projects/Archive2-Scroll.png"],
  },
  {
    id: "archive3",
    title: "Motion",
    services: ["[Click on text to watch]"],
    imageUrl: [
      "/projects/app.png",
      "/projects/katchup.png",
      "/projects/footscray.png",
      "/projects/plat.png",
    ],
    embededCodes: [
      '<iframe class="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/HjLIlTd3Ty0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      '<iframe class="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/qi_wJOLUEWI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      '<iframe class="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/MGiykEpLD-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      '<iframe class="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/h_VQnaRmDsk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    ],
  },
  {
    id: "archive4",
    title: "Xynergy Realty",
    services: [],
    imageUrl: ["/projects/Archive4-Scroll.png"],
  },
];

const ProjectPage = () => {
  const { projectId } = useParams();
  // Find the entire project object now, not just the image URL
  const project = projectsData.find((p) => p.id === projectId);

  //State for video modal manage
  const [selectedEmbed, setSelectedEmbed] = useState(null);

  //Determine the correct "Back" URL based on the project ID
  const backUrl = project.id.startsWith("archive") ? "/?section=archives" : "/";

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

  //Helper function to handle image click
  const handleImageClick = (index) => {
    //only open modal if project is archive3
    if (project.id === "archive3" && project.embededCodes) {
      setSelectedEmbed(project.embededCodes[index]);
    }
  };

  // Enhanced vertical video detection
  const isVerticalVideo =
    selectedEmbed &&
    (selectedEmbed.includes("/shorts/") ||
      selectedEmbed.includes("shorts") ||
      selectedEmbed.includes("aspect-ratio: 9/16"));

  return (
    <div className="bg-white">
      {/* === Sticky Header Section === */}
      {/* 'sticky top-0' makes it stick to the top of the viewport when scrolling */}
      {/* 'bg-white' prevents the main image from showing through */}
      {/* 'z-10' ensures it stays on top of other content */}
      {/* 'border-b' creates the thin underline effect */}
      <header className="sticky top-0 bg-white z-10 border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
        {/* Flexbox to position content left and right */}
        {/*remove max width 7xl and mx auto */}
        <div className="flex justify-between items-start">
          {/* Left Column: Title, Description, Services */}
          <div className="max-w-4xl">
            <h1 className="text-2xl font-semibold text-black">
              {project.title}
            </h1>
            {/* 
              CONDITION 1: Only render the description if it's not empty.
              The `project.description && ...` part handles this.
            */}
            {project.description && (
              <p className="mt-2 text-lg font-semibold text-[#BEBEBE]">
                {project.description}
              </p>
            )}
            {/* 
              CONDITION 2: Only render the services if the array has content.
              `project.services.join("").length > 0` is a robust check.
            */}
            {project.services.join("").length > 0 && (
              <div className="mt-4 flex items-center text-lg font-semibold text-[#BEBEBE]">
                {/* 
                  MODIFIED: This span will now only render if the ID is NOT 'archive3'.
                */}
                {project.id !== "archive3" && (
                  <img src="/Arrow.png" alt="Arrow" className="mr-2 w-6" />
                )}
                <p>{project.services.join(", ")}</p>
              </div>
            )}
          </div>
          {/* Right Column: Back Link */}
          <div>
            <Link to={backUrl} className="text-2xl font-semibold text-black">
              [Back]
            </Link>
          </div>
        </div>
      </header>

      {/* === Main Image Section === */}
      <main className="px-4 sm:px-6 lg:px-8">
        <div className="w-full mt-8">
          {/* Check if the project has more than one image */}
          {project.imageUrl && project.imageUrl.length > 1 ? (
            // If TRUE, render a grid of multiple images
            <div className="flex flex-wrap items-end gap-4 mt-25">
              {/*when there is more item telling CSS to start new row with flex wrap */}
              {project.imageUrl.map((url, index) => (
                <div key={index} className="w-[calc(25%-0.75rem)]">
                  {/* 4 columns with gap */}
                  <button
                    onClick={() => handleImageClick(index)}
                    className="w-full h-auto cursor-pointer"
                  >
                    <img
                      src={url}
                      alt={`${project.title} - image ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <img
              src={project.imageUrl[0]}
              alt={`Project details for ${project.title}`}
              className="w-full h-auto"
            />
          )}
        </div>
      </main>

      {selectedEmbed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedEmbed(null)}
        >
          <div
            className="relative bg-white rounded-lg overflow-hidden w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEmbed(null)}
              className="absolute top-2 right-2 z-10 bg-black bg-opacity-70 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-90 text-xl font-bold"
            >
              ×
            </button>

            <div
              className={`
          relative w-full
          ${
            isVerticalVideo
              ? "aspect-[9/16] max-h-[85vh] mx-auto max-w-md"
              : "aspect-[16/9]"
          }
        `}
            >
              <div
                className="absolute inset-0"
                dangerouslySetInnerHTML={{ __html: selectedEmbed }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
