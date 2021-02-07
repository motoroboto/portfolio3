import FsLightbox from "fslightbox-react";
import React, { useState } from "react";
import * as Icon from "react-feather";
import ProgressiveImage from 'react-progressive-image';

function Portfolio(props) {
  const [toggler, setToggler] = useState(false);
  const { title, subtitle, imageUrl, githubUrl, url } = props.content;

  const handleToggler = (value) => {
    setToggler(value);
  }

  return (
    <div className="mi-portfolio mi-portfolio-visible">
      <div className="mi-portfolio-image">
        {/* <img src={imageUrl} alt={title} /> */}
        <ProgressiveImage
          src={imageUrl}
          placeholder="/images/portfolio-image-placeholder.png"
        >
          {src => <img src={src} alt={title} height="250px" width="550px" />}
        </ProgressiveImage>
        <ul>
          {url ? <li>
            <a rel="noopener noreferrer" target="_blank" href={githubUrl}>
              <Icon.GitHub />
            </a>
          </li> : null}
          {url ? <li>
            <a rel="noopener noreferrer" target="_blank" href={url}>
              <Icon.Link />
            </a>
          </li> : null}
        </ul>
      </div>
      {!url ? <h5>{title}</h5> : <h5>
        <a rel="noopener noreferrer" target="_blank" href={url}>
          {title}
        </a>
      </h5>}
      {subtitle ? <h6>{subtitle}</h6> : null}
      {!githubUrl ? null : <FsLightbox
        toggler={toggler}
        sources={githubUrl}
      />
      }
    </div>
  );
}

export default Portfolio;
