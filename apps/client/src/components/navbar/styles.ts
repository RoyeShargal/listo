import styled from 'styled-components';
import LinkTab from '../LinkTab/LinkTab';
import { COLORS } from '../../utils/colors';

export const StyledNavbar = styled.div`
  width: 100%;
  background-color: ${COLORS.GRAIGE};
  display: flex;
  padding: 8px;
`;

export const StyledLinkTab = styled(LinkTab)`
  background-color: black;
`;
