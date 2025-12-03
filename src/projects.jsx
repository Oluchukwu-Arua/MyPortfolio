import amazonProjectVideo from "./media/Amazon-Project.webm";
import amazonHomePageScreenshot from "./media/amazo- home-page screenshot.jpg";
import amazonCheckoutScreenshot from "./media/amazon-checkout-screenshot.jpg";
import amazonOrdersScreenshot from "./media/amazon-orders-screenshot.jpg";
import amazonProjectHome from "./media/Amazon-home.jpg";

import bibleStudyWebpageVideo from "./media/Bible-Study webpage-video.webm";
import bibleStudyImg from "./media/bible-studyimg.jpg";
import bibleStudyImgg from "./media/bible-studyimg-1.jpg";
import bibleStudyImggg from "./media/bible-study-3.jpg";


import divineGraceUnecVideo from "./media/divine-grace-unec-video.webm";
import dgHomePage from "./media/DG-home-page.jpg";
import dgHomePage2 from "./media/DG-home-page-2.jpg";
import dgHomePage3 from "./media/DG-home-page-3.jpg";
import dgLoginPageScreenshot from "./media/DG-login-page-screenshot.jpg";
import dgSubmitRequest from "./media/DG-submit-request.jpg";
import welcomePageScreenshot1 from "./media/welcome-page-screenshot-1.jpg";
import welcomePageScreenshot2 from "./media/welcome-page-screenshot-2.jpg";
import unecLogin from "./media/unec-login.jpg";
import welcomePageScreenshot3 from "./media/welcome-page-screenshot-3.jpg";

import googleScreenshot from "./media/google-screenshot.jpg";
import googleScreenshot1 from "./media/google-2.jpg";
import googleScreenshot2 from "./media/google-2.jpg";

import softmediaScreenshot from "./media/softmedia-screenshot.jpg";
import softmediaVideo from "./media/Softmedia-video.webm";
import softmediaScreenshot2 from "./media/softmedia-screenshot-2.jpg";


import RockPaperScissorsVideo from "./media/Rock-Paper-Scissors-video.webm";
import RockPaperScissorsimg from "./media/rock-papper-scissorsimg.jpg";
import RockPaperScissorsimgg from "./media/reock-paper-scissors-img.jpg";


import divineGraceUnnVideo from "./media/divine-grace-unn-video.webm";
import unnLoginImage from "./media/unn-login-image.jpg";
import unnMessageImage from "./media/unn-message-mage.jpg";
import unnContactUsImage from "./media/unn-contact-us-image.jpg";
import unnContactUsImage1 from "./media/unn-contact-us-image-1.jpg";
import unnHomepageImage1 from "./media/unn-homepage-iamge-1.jpg";
import unnHomepageImage2 from "./media/unn-homepage-image-2.jpg";

import youtubeVideo from "./media/youtube-video.webm";
import youtubeProjectScreenshot from "./media/youtube-project-screenshot.jpg";
import youtubeScreenshot from "./media/youtube-screenshot.jpg";
import youtubeScreenshott from "./media/youtubeag.jpg";

const generateId = (() => {
  let count = 0;
  return () => `${Date.now()}-${++count}`;
})();

export const projectData = [
  {
    id: generateId(),
    title: "Divine Grace UNEC Church Website",
    description: `A spiritual website built for Divine Grace UNEC using HTML, CSS & JS.
    It highlights the church’s mission, activities, and outreach with engaging visuals.`,
    images: [unecLogin, dgHomePage,
            dgHomePage2, dgHomePage3,
            dgLoginPageScreenshot,
            dgSubmitRequest, welcomePageScreenshot1,
            welcomePageScreenshot2, welcomePageScreenshot3],
    video: divineGraceUnecVideo,
    size: "tall",
    tags: ["HTML", "CSS", "JavaScript", "Church"],
  },
  {
    id: generateId(),
    title: "Divine Grace UNN Church Platform",
    description: `A web platform for Divine Grace UNN that supports sermons, messages, and online fellowship.`,
    images: [unnHomepageImage1, unnHomepageImage2, unnLoginImage, unnMessageImage, unnContactUsImage, unnContactUsImage1],
    video: divineGraceUnnVideo,
    size: "tall",
    tags: ["React", "Church", "Community"],
  },
  {
    id: generateId(),
    title: "Amazon Clone",
    description: `A frontend clone of Amazon’s interface, featuring product browsing and checkout simulation.`,
    images: [amazonHomePageScreenshot, amazonCheckoutScreenshot, amazonOrdersScreenshot, amazonProjectHome],
    video: amazonProjectVideo,
    size: "wide",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: generateId(),
    title: "Bible Study Webpage",
    description: `An engaging webpage built for an online Bible Study initiative with embedded videos.`,
    images: [bibleStudyImg, bibleStudyImgg, bibleStudyImggg],
    video: bibleStudyWebpageVideo,
    size: "small",
    tags: ["Faith", "Video", "HTML"],
  },
  {
    id: generateId(),
    title: "SoftMedia website",
    description: `A minimal front-end design showcasing my design proficiency usng HTML and Css .`,
    images: [softmediaScreenshot, softmediaScreenshot2],
    video: softmediaVideo,
    size: "small",
    tags: ["React", "Tailwind", "Portfolio"],
  },
  {
    id: generateId(),
    title: "YouTube Clone",
    description: `A minimal front-end recreation of YouTube’s interface layout.`,
    images: [youtubeProjectScreenshot, youtubeScreenshot],
    video: youtubeVideo,
    size: "wide",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: generateId(),
    title: "Google Homepage Clone",
    description: `A pixel-perfect clone of Google’s homepage layout for responsive design practice.`,
    images: [googleScreenshot, googleScreenshot1, googleScreenshot2],
    video: null,
    size: "small",
    tags: ["HTML", "CSS"],
    },
    {
     id: generateId(),
     title: "Rock Paper Scissors Game",
     description: "A simple website simulating the rock-paper-scissors game demostarting my proficiency in javascript and cretaive thinking",
     images: [RockPaperScissorsimg, RockPaperScissorsimgg],
     video: RockPaperScissorsVideo,
     size: "small",
     tags: ["HTML","CSS","JavaScript"],
      
  }
 
];

export const recentProjects = projectData.slice(-4);

export default projectData;
