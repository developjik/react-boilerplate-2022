/* eslint-disable import/prefer-default-export */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 0.9em;
`;

const BodyContainer = styled.div`
  padding-top: 5vh;
`;

export { StyledLink, BodyContainer };
