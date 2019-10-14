import styled from 'styled-components';

export const SolutionsContainer = styled.div``;

export const Title = styled.h2`
@media screen and (max-width: 480px) {
  padding-bottom:20px;
  font-size: 2.2rem;
}

@media screen and (min-width: 768px) {
  font-size:2.6rem;
  line-height: 1.333;
  letter-spacing: 1px;
  padding-bottom: 6vh
}

@media screen and (min-width: 1024px) {
  font-size:3.6rem;
  line-height: 1.2;
  font-weight: 700
}
`;

export const Quote = styled.h2`
  margin-bottom: 40px;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.4;
  @media (min-width: 1024px) {
    margin-bottom: 80px;
    font-size: 2rem;
  }
`;

export const TextDivider = styled.div`
  margin-bottom: 40px;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }

  .solutions--subtitle {
    font-size: 2.3rem;
    color: #262626;
    font-weight: 800;
    @media (min-width: 1024px) {
      width: 40%;
      padding-right: 1.7rem;
    }
    &:after {
      content: "";
      display: block;
      width: 20%;
      height: 6px;
      background-color: #fff;
      margin-top: 15px;
    }
  }

  .body {
    font-size: 1.1rem;
    letter-spacing: -0.2px;
    @media (min-width: 1024px) {
      width: 60%;
      font-size: 1.3rem;
    }
  }
`;

export const Body = styled.p`
  font-size: 1.1rem;
  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;