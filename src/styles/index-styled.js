import styled from 'styled-components';

export const PortfolioPreviewContainer = styled.section`
  padding: 80px 0;

  @media (max-width: 480px) {
    padding: 30px 0;
  }

  a {
    text-decoration: none;
  }
  .pp-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: .5rem;
    margin-top: .75rem;
  }
  .pp-subtitle {
    font-size: 1rem;
  }
`;

export const PortfolioPreview = styled.div`
  display: grid;
  grid-template: auto/repeat(2, 1fr);
  grid-gap: 30px;

  @media (max-width: 480px) {
    grid-template: auto/auto;
  }
`;

export const BlogContainer = styled.section`
  border-top: 2px solid #e1e1e1;
  padding: 60px 0 0;

  @media (min-width: 768px) {
    padding: 90px 0 0;
  }
`;

export const BlogPreview = styled.div`
  padding: 0 0 40px 0;
  @media (min-width: 1024px) {
    padding: 0 0 60px 0;
  }
  @media (min-width: 480px) {
    display: grid;
    grid-template: auto/repeat(2, 1fr);
    grid-gap: 30px;
  }

  .blog--posts {
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
  }
`;