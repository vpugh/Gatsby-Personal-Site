import React from 'react';
import { Link } from 'gatsby'
import Image from 'gatsby-image';
import kebabCase from "lodash/kebabCase"
import './home-blog.scss';

const HomeBlog = ({ slug, image, title, date, tags, timeToRead, fluidImage }) => {
  return (
    <div className="blog--posts">
      <Link to={slug}>
        {image !== null && (
          <Image fluid={fluidImage} />
        )}
        <div className="blog--text">
          <h2 className="blog--title">
            {title}
          </h2>{" "}
          <p className="blog--subtitle">
            {date} | {timeToRead} {timeToRead > 1 ? 'Minutes' : 'Minute'}
          </p>
        </div>
      </Link>
      <div className="blog--tags">
        {tags.map(tag => <Link to={`/tags/${kebabCase(tag)}`} className="blog--tag" key={tag}>{tag}</Link>)}
      </div>
    </div>
  )
};

export default HomeBlog;