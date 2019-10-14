import styled from 'styled-components';

export const BlogContainer = styled.section`
  @media (max-width: 480px) {
    padding: 40px 0 0 0;
  }

  @media (min-width: 768px) {
    padding: 80px 0 40px 0;
  }

  .title {
    font-size: 1.4rem;
    margin-bottom: 20px;
    
    @media (min-width: 768px) {
      margin-bottom: 60px;
      font-size: 3.125rem;
      line-height: 1.2;
      padding: 10px 0;
    }
  }
`;

export const BlogHome = styled.div`
  grid-template: auto/repeat(2, 1fr);
  grid-gap: 30px;

  @media (min-width: 768px) {
    display: grid;
  }

  @media (max-width: 480px) {
    grid-template: auto/auto;
    padding-bottom: 0;
  }
`;