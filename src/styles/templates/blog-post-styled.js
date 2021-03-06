import styled from 'styled-components';

export const TextBody = styled.div`
  padding: 50px 0;

  @media (max-width: 425px) {
    padding: 30px 0 10px 0;
  }

  max-width: 730px;
    
  p {
    font-size: 1.3rem;
    line-height: 1.6;
  }
  h1 {
    font-size: 2.4rem;
    @media (max-width: 425px) {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
  }
  h2 {
    margin-bottom: 1rem;
    margin-top: 2.5rem;
  }
  blockquote {
    margin-left: -20px;
    padding-left: 23px;
    box-shadow: inset 3px 0 0 0 rgba(0, 0, 0, 0.84);
    > p {
      font-style: italic;
      color: #525252;
    }
  }
`;

export const PostTitle = styled.h1`
  margin-bottom: .75rem;
`;

export const Date = styled.p`
  margin-bottom: 0;
  @media (max-width: 425px) {
    margin: 0;
  }
`;

export const ArticleLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const ArticleLinks = styled.div`
  max-width: 25%;
  @media (max-width: 425px) {
    max-width: 100%;
    margin-top: .5rem;
  }
`;