import jobbyImage from "../assets/Projects Images/Jobby.png";
import NxtTrends from "../assets/Projects Images/Nxt Trends.png";
import TastyKitches from "../assets/Projects Images/Tasty Kitches.png";
import Sync from "../assets/Projects Images/sync.png";

const ProjectsList = [
  {
    name: "Sync Chat-App",
    image: Sync,
    description:
      "Developed a full-stack chat application with real-time messaging using Socket.IO, secure authentication with JWT, and profile picture uploads via Cloudinary, styled with Tailwind CSS and DaisyUI for a responsive and customizable user experience.",
    tools: [
      "Real-Time Communication",
      "User Authentication",
      "Secure Application",
    ],
    liveUrl: "https://sync-mern-chat.onrender.com",
    repoUrl: "https://github.com/PranayBollempelli/Sync-mern-chat",
  },
  {
    name: "Tasty Kitchens",
    image: TastyKitches,
    description:
      "Implemented a responsive Online Food Ordering System like Swiggy/Zomato where users can see popular restaurants with sort by rating, specific restaurant details, adding or removing food items to cart, and payments section.",
    tools: ["React", "React Router", "REST API"],
    liveUrl: "https://pranayjobbyapp0.ccbp.tech",
    repoUrl: "https://github.com/PranayBollempelli/tastyKitchensApp.git",
  },
  {
    name: "Nxt Trends",
    image: NxtTrends,
    description:
      "Developed a cutting-edge e-commerce platform inspired by Amazon and Flipkart.",
    tools: ["React", "JWT Authentication", "REST API"],
    liveUrl: "https://pranaynxttrend0.ccbp.tech/",
    repoUrl: "https://github.com/PranayBollempelli/nxtTrendZ.git",
  },
  {
    name: "Jobby",
    image: jobbyImage,
    description: "Constructed an all-in-one job searching platform, Jobby App.",
    tools: ["React", "JWT Authentication", "REST API"],
    liveUrl: "https://pranayjobbyapp0.ccbp.tech/",
    repoUrl: "https://github.com/PranayBollempelli/jobbyApp.git",
  },
];

export default ProjectsList;
