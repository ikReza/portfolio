import React from "react";
import {
  Book,
  AssignmentInd,
  Apps,
  ContactMail,
  AccountCircle,
} from "@material-ui/icons";

export const menuItems = [
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    link: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    link: "/portfolio",
  },
  {
    listIcon: <Book />,
    listText: "Blog",
    link: "/blog",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    link: "/contact",
  },
  {
    listIcon: <AccountCircle />,
    listText: "About Me",
    link: "/about",
  },
];
