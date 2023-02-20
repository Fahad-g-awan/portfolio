import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import "./about.scss";

const abouts = [
  { title: "Web Developer", description: "I am a good wbe developer", imgUrl: images.about01 },
  { title: "Web Design", description: "I am a good wbe Design", imgUrl: images.about02 },
  { title: "Ui/Ux", description: "I am a good web developer", imgUrl: images.about03 },
  { title: "Web Animations", description: "I am a good wbe developer", imgUrl: images.about04 },
];

const about = () => {
  return (
    <div className="app__about">
      <h2 className="head-text">
        I know that <span>Good Apps</span>
        <br />
        means <span>good business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default about;
