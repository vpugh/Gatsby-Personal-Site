import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { BlogPosts, BlogText } from "../styles/home-blog-styled"

const HomeBlog = ({ slug, image, title, date, timeToRead, fluidImage }) => {
  return (
    <BlogPosts>
      <Link to={slug}>
        {image !== null && <Image fluid={fluidImage} />}
        <BlogText>
          <h2 className="blog--title">{title}</h2>{" "}
          <p className="blog--subtitle">
            {date} | {timeToRead} {timeToRead > 1 ? "Minutes" : "Minute"}
          </p>
        </BlogText>
      </Link>
    </BlogPosts>
  )
}

export default HomeBlog
