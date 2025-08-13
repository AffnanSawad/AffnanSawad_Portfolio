import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: " Fusion-Car-Ltd. ",
    description: "Fusion-Car is a modern, fully-featured platform designed to simplify the process of buying and selling Cars.",
    image: "https://i.ibb.co.com/bjyhWVCb/photo-2025-08-12-21-25-49.jpg",
    tags: ["React", "Node JS", "MongoDB"],
    demoUrl: "https://car-fusion-ltd.web.app/",
    githubUrl: "https://github.com/AffnanSawad/Fusion-Car-Ltd.",
  },
    {
    id: 2,
    title: "E-commerce Platform",
    description:
    "eShop provides a seamless user experience for browsing, filtering, and purchasing products with a clean and intuitive UI.",
    image: "https://i.ibb.co.com/KcFfydvB/photo-2025-08-12-21-34-22.jpg",
    tags: ["React", "Tailwind CSS", "Redux"],
    demoUrl: "https://e-shop-bd-25.netlify.app/",
    githubUrl: "https://github.com/AffnanSawad/eShop",
  },
  {
    id: 3,
    title: "Royal-Enfield-Bangladesh",
    description:
      "Explore the legendary Royal Enfield collection and discover all the stunning bikes in one place. ",
    image: "https://i.ibb.co.com/xSvF19w3/photo-2025-08-12-21-27-48.jpg",
    tags: ["React", "Node JS", "Express JS"],
    demoUrl: "https://royal-enfield-a59da.web.app/",
    githubUrl: "https://github.com/AffnanSawad/Royal-Enfield-Bangladesh",
  },
  {
    id: 4,
    title: "Bistro Restaurent",
    description:
      "Bistro Boss is a full-featured restaurant website where users can explore the restaurant’s menu, place orders,  manage their cart and make online payments via Stripe. ",
    image: "https://i.ibb.co.com/Q3FBMmch/photo-2025-08-13-11-25-56.jpg",
    tags: ["React",  "Node Js" , "Stripe" ],
    demoUrl: "https://bistro-boss-restaurent-2e929.web.app/",
    githubUrl: "https://github.com/AffnanSawad/Bistro-Restaurent",
  },



];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center font-bold text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-primary mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm font-semibold mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={25} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={25} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/AffnanSawad"
          >
           Explore all my projects on my GitHub profile. <ArrowRight size={38} />
          </a>
        </div>
      </div>
    </section>
  );
};
