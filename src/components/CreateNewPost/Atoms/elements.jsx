import styled from "styled-components";
import defaultTheme from "../../../theme/defaultTheme";
import FlexWrapper from "../../Common/FlexWrapper";

export const StyledCreatePostWrapper = styled(FlexWrapper)`
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  flex-direction: column;
`;


export const StyledActionInputWrapper = styled(FlexWrapper)`
  border-bottom: 1px solid ${defaultTheme.colors.primaryLayoutLight};
  padding-bottom: 20px;
  margin-bottom: 20px;
`;