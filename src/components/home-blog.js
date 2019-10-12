import React from 'react';
import { Link } from 'gatsby'
import Image from 'gatsby-image';
import kebabCase from "lodash/kebabCase"
import './home-blog.scss';
import styled from 'styled-components';

const BlogPosts = styled.div`
  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px 0;
  }
  @media (max-width: 480px) {
    display: block;
    &:not(:last-child) {
      padding-bottom: 40px;
    }
  }
`;

const HomeBlog = ({ slug, image, title, date, tags, timeToRead, fluidImage }) => {
  return (
    <BlogPosts>
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
    </BlogPosts>
  )
};

export default HomeBlog;