import React from "react";

import "./Footer.css";

let title = "Why You Should Read Manga Online at MangaCradle.com ?";
let text =
  "There are many reasons you should read Manga online, and if you are a fan of this unique storytelling style then learning about them is a must. One of the biggest reasons why you should read Manga online is the money it can save you. While there's nothing like actually holding a book in your hands, there's also no denying that the cost of those books can add up quickly. So why not join the digital age and read Manga online? Another big reason to read Manga online is the huge amount of material that is available. When you go to a comic store or other book store their shelves are limited by the space that they have. When you go to an online site to read Manga those limitations don't exist. So if you want the best selection and you also want to save money then reading Manga online should be an obvious choice for you.";

export default () => (
  <div className="footer">
    <p className="footer__title">{title}</p>
    <p className="footer__text">{text}</p>
    <p className="footer__copy">
      &copy; 2018 MangaCradle.com. All rights reserved.
    </p>
  </div>
);
