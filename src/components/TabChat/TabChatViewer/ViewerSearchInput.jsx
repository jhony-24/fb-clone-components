// @flow
import React from "react";
import FlexWrapper from "../../Common/FlexWrapper";
import TextLabel from "../../Common/TextLabel";
import Wrapper from "../../Common/Wrapper";
import { StyledInputSearch } from "./elements";

type ViewerSearchInputProps = {
  onKeyUp: (ev: any) => void
};

const ViewerSearchInput = ({ onKeyUp }: ViewerSearchInputProps) => {
  return (
    <Wrapper p="10px 20px 20px">
      <FlexWrapper centerBetween>
        <TextLabel textSize=".8rem">To:</TextLabel>
        <StyledInputSearch onKeyUp={onKeyUp} autoFocus />
      </FlexWrapper>
    </Wrapper>
  );
};


export default ViewerSearchInput;