import styled from "styled-components"

export const AboutPadding = styled.section`
  background: #fff;
  padding: 30px;
  margin-top: 30px;
  @media (min-width: 768px) {
    padding: 30px 50px;
    margin-top: 40px;
  }
`

export const AboutContainer = styled.div`
  font-size: 1.2rem;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .text-container {
    width: 100%;
    @media (min-width: 768px) {
      width: 60%;
    }
    @media (max-width: 450px) {
      p {
        font-size: 1.2rem;
        line-height: 1.3;
      }
    }
  }

  .sidebar {
    width: 100%;
    background: #fff;
    padding: 0 30px 30px;
    color: #707070;
    @media (max-width: 425px) {
      padding: 0;
    }
    @media (min-width: 768px) {
      width: 35%;
    }
  }
`

export const Quote = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  line-height: 1.4;
  font-weight: 400;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media (max-width: 450px) {
    font-size: 1.3rem;
  }

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.9rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  &:after {
    content: "";
    margin: 40px auto 60px;
    width: 30%;
    height: 3px;
    background-color: #bbb;
    display: block;

    @media (min-width: 768px) {
      margin: 40px auto 100px;
    }

    .orange & {
      background: #ffb64d;
    }

    .green & {
      background: #aed87c;
    }

    .blue & {
      background: #4dd8ff;
    }
  }
`

export const AvatarContainer = styled.div`
  display: block;
  width: 100%;
  padding-bottom: 2rem;

  .avatar--grid {
    // position: relative;
    // display: inline-block;
    display: flex;
    margin-bottom: 2rem;
  }

  .avatar--img {
    &:before {
      content: "";
      background-image: url("../images/pic.jpg");
      display: block;
      background-size: cover;
      background-position: 50% 70%;
      border-radius: 50%;
    }

    @media (max-width: 480px) {
      text-align: center;
      &:before {
        width: 200px;
        height: 200px;
        display: inline-block;
      }
    }

    @media (min-width: 768px) {
      // float: left;
      &:before {
        width: 100px;
        height: 100px;
      }
    }
  }

  .avatar--text {
    // float: left;
    margin-left: 25px;
    align-self: center;
    margin-bottom: 0;
    // margin: 25px 0 0 25px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .about--title {
    line-height: 1.5;
    font-size: 1.6rem;
    font-weight: 700;

    @media (max-width: 480px) {
      text-align: center;
      line-height: 1.3;
    }

    @media (min-width: 768px) {
      font-size: 2.6rem;
      line-height: 1.333;
      letter-spacing: 1px;
      padding-bottom: 2vh;
    }

    @media (min-width: 1024px) {
      font-size: 2.825rem;
      width: 90%;
      line-height: 1.2;
    }
  }

  .btn {
    text-align: center;
    @media (max-width: 480px) {
      width: 100%;
    }
  }
`
