// Enter all your detials in this file
// Logo images
import logogradient from "./assets/portfolioLogo.png";
// Profile Image
import profile from "./assets/Raghavpic.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import nodejs from "./assets/techstack/nodejs.png";
import mongodb from "./assets/techstack/mongodb.jpg";
import expressjs from "./assets/techstack/expressjs.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
// Porject Images
import projectImage1 from "./assets/projects/toymarche1.jpg";
import projectImage2 from "./assets/projects/jcrew.jpg";
import projectImage3 from "./assets/projects/asos.jpg";
import projectImage4 from "./assets/projects/green house.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Raghav Shukla",
  tagline: "Full Stack Web Developer",
  img: profile,
  about: `Experience as a project Engineer. A developers work not only develop website, but also go through all the faces with pros and cons, that can make you best developer and develop a Full fledged website. Enthusiastic of building applications with front and back end operations.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/raghav-shukla-8b0288162/",
  github: "https://github.com/Raghav435",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Project Engineer",
    Company: `Maa Multiple Services`,
    Location: "Lucknow",
    Type: "Full Time",
    DESCRIPTION: "Manage with a team to install a wide range of cooling equipment for split and window air conditioning.",
    Duration: "March 2019 - March 2022",
  },
];


// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  nodejs: nodejs,
  expressjs: expressjs,
  mongodb: mongodb,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  github: github,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "ToyMarche_Clone",
    image: projectImage1,
    description: `Toymarche is an Indian startup that sells all kinds of toys. 
    Both buyers and sellers can use the website for their needs. The website has lots of functionality such as login, signup, homepage, add to cart, add to wishlist, delete from cart, delete from the wishlist, coupon code, purchase, address book, payment, order success, etc.`,
    techstack: "HTML, CSS, JavaScript",
    previewLink: "https://62488c87db897540a8152398--subtle-centaur-57e7a8.netlify.app/",
    githubLink: "https://github.com/Raghav435/ToyMarche_clone",
  },
  {
    title: "JCrew_Clone",
    image: projectImage2,
    description: `This project is the clone of J.Crew.com with some of its basic functionalities including Login - Sign Up - Sign Out, add to cart, Remove From cart, Save for Later features, Checkout feature, Search and Sorting functionalities.
     J.Crew Group, Inc., is an American multi-brand, multi-channel, specialty retailer`,
    techstack: "HTML, CSS, JavaScript",
    previewLink: "https://leafy-kangaroo-914e0b.netlify.app/index.html",
    githubLink: "https://github.com/Raghav435/J.Crew_Clone",
  },
  {
    title: "ASOS_Clone",
    image: projectImage3,
    description: ` ASOS Group, Inc., is an BRITISH multi-brand, multi-channel, specialty retailer.
    The company offers an assortment of women's, men's, and children's apparel and accessories, including swimwear, outerwear, lounge-wear, bags, sweaters, denim, dresses, suiting, jewelry, and shoes`,
    techstack: "HTML, CSS, JavaScript",
    previewLink: "https://bucolic-dusk-5d76e5.netlify.app/",
    githubLink: "https://github.com/Raghav435/ASOS_Clone",
  },
  {
    title: "Greenhouse_Clone",
    image: projectImage4,
    description: `This project is the clone of Greenhouse with some of its basic functionalities including Login - , add a demo, Hiring partners, Checkout feature, Search and Filter functionalities. Greenhouse Group, Inc., is an American Technology Company. The company provides a recruiting software as a service.`,
    techstack: "ReactJs, JavaScript, CSS, ChakraUI",
    previewLink: "https://greenhouse-clone.vercel.app/",
    githubLink: "https://github.com/Raghav435/Greenhouse_Clone",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "shuklaraghav435@gmail.com",
  phone: "+91 8423749570",
};
