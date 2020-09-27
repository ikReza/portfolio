// ML
import trafficSign from "../assets/traffic-sign.gif";

// fullstack
import crwn from "../assets/crwn.gif";
import amazona from "../assets/amazona.jpg";
import addToCart from "../assets/p-1.jpg";
import chatApp from "../assets/p-4.PNG";

// frontend
import corona from "../assets/corona.JPG";
import studio from "../assets/studio.JPG";
import weather1 from "../assets/weather-1.JPG";
import weather2 from "../assets/weather-2.JPG";

export const MACHINE = [
  {
    name: "Object Detection",
    url: "https://youtu.be/mgmHRLrhbmc",
    desc:
      "This is a simple project using computer vision with YOLOv3. YOLOv3 is an algorithm that uses deep convolutional neural networks to perform object detection. I used YOLOv3-416 model and COCO dataset. The mAP (mean Average Precision) of this model is 55.3.",
  },
  {
    name: "Vehicle Counting",
    url: "https://youtu.be/Dr_Ic6tZVjw",
    desc:
      "This model can count vehicles on the road. Although it is quite accurate to count the vehicles, the efficiency can be improved by adjusting some parameters. It works in a manner that - if the center of the detected vehicles' bounding box crosses the defined line, the model counts it.",
  },
];

export const MLProjects = [
  {
    id: 0,
    name: "Traffic Sign Classification",
    image: trafficSign,
    short_desc: "Tensorflow, OpenCV, Streamlit",
    gitLink: "https://github.com/ikReza/traffic-sign-classification",
    webLink: "https://ikr-traffic-signclassification.herokuapp.com/",
  },
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const WEB = [
  {
    id: 0,
    name: "CRWN Clothing",
    description: "React + Redux + Firebase",
    image: crwn,
    gitLink: "https://github.com/ikReza/crwn-clothing",
    webLink: "https://ikr-crwn-live.netlify.app/",
  },
  {
    id: 1,
    name: "E-commerce",
    description: "MERN Stack + Redux",
    image: amazona,
    gitLink: "https://github.com/ikReza/ecommerce2-with-redux",
    webLink: "https://ikr-amazona.netlify.app/",
  },
  {
    id: 2,
    name: "Online Shop",
    description: "MERN Stack",
    image: addToCart,
    gitLink: "https://github.com/ikReza/Add-To-Cart-Place-Order",
    webLink: "https://sharp-minsky-a909d8.netlify.app/",
  },
  {
    id: 3,
    name: "Chat Application",
    description: "ReactJS, NodeJS",
    image: chatApp,
    gitLink: "https://github.com/ikReza/SimpleChatApp",
    webLink: "https://vigorous-ritchie-6baaee.netlify.app",
  },
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const FRONTEND = [
  {
    id: 0,
    name: "Cronavirus Tracker",
    short_desc: "ReactJs, Material-UI",
    image: corona,
    gitLink: "https://github.com/ikReza/coronavirus-tracker",
    webLink: "https://ikr-coronavirus-tracker.netlify.app/",
  },
  {
    id: 1,
    name: "Company Studio",
    short_desc: "ReactJs, SASS, Reactstrap",
    image: studio,
    gitLink: "https://github.com/ikReza/office-studio",
    webLink: "https://spa1-studio.netlify.app/",
  },
  {
    id: 2,
    name: "Weather App",
    short_desc: "ReactJs, Material-UI",
    image: weather1,
    gitLink: "https://github.com/ikReza/weather-app1",
    webLink: "https://ikr-weather1.netlify.app/",
  },
  {
    id: 3,
    name: "PWA Weather App",
    short_desc: "ReactJs, Material-UI",
    image: weather2,
    gitLink: "https://github.com/ikReza/pwa-weather-app2",
    webLink: "https://ikr-weather2.netlify.app/",
  },
];
