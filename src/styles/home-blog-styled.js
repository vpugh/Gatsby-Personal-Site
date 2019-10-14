import styled from 'styled-components';

export const BlogPosts = styled.div`
@media (min-width: 480px) {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px 0;
}

@media (max-width: 480px) {
  display: block;
  &:not(:last-child) {
    padding-bottom: 20px;
  }
}

.gatsby-image-wrapper {
  max-height: 265px;
}
`;

export const BlogText = styled.div`
  padding-top: 1rem;

  .blog--title {
    font-weight: bold;
    margin-bottom: .5rem;
    @media (min-width: 768px) {
      font-size: 24px;
      margin: 0 0 .25rem 0;
      color: #262626;
    }
  }

  .blog--subtitle {
    font-style: italic;
    margin-bottom: .5rem;
    @media (min-width: 768px) {
      margin: 0 0 .125rem 0;
      font-size: 16px;
      color: #7d7d7d;
    }
  }
`;

export const BlogTags = styled.div`
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }

    .blog--tag {
      color: #424242;
      border-bottom: 1px solid #ddd;
      margin-right: 12px;
      font-size: .65rem;
      text-transform: uppercase;
    }
`;