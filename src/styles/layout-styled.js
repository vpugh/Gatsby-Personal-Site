import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: ${props => (props.responsiveCollapse ? null : "0 20px")};
  @media (min-width: 768px) {
    padding: 0 80px;
  }
`
