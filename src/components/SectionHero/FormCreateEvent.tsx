import Button from "@/components/atoms/Button";
import { useState } from "react";
import styled from "styled-components";
import { IconId } from "../atoms/Icon";

export type FormCreateEventProps = {
  note: string;
  eventInputPlaceholder: string;
  eventInputName: string;
  timeInputName: string;
  timeInputPlaceholder: string;
  submitButtonName: string;
  submitButtonNameMobile: string;
};

const FormCreateEvent: React.FC<FormCreateEventProps> = (props) => {
  const [errorMessage, _setErrorMessage] = useState(null);

  return (
    <StyledFormCreateEvent>
      <Wrapper>
        <Inputs>
          <InputsWrapper>
            <InputText
              placeholder={props.eventInputPlaceholder}
              name={props.eventInputName}
            />

            <InputTime
              placeholder={props.timeInputPlaceholder}
              name={props.timeInputName}
            />
          </InputsWrapper>

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Inputs>

        <Button
          variant="filled"
          type="button"
          style={{ width: "100%" }}
          iconId={IconId.arrow_right}
        >
          <ButtonName>{props.submitButtonName}</ButtonName>
        </Button>
      </Wrapper>

      <FormNoteText>{props.note}</FormNoteText>
    </StyledFormCreateEvent>
  );
};

const StyledFormCreateEvent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;

  width: max-content;

  width: 100%;

  @media screen and (min-width: 480px) {
    max-width: 622px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  align-items: start;

  width: 100%;

  gap: 10px;

  overflow: hidden;
  @media screen and (min-width: 960px) {
    grid-template-columns: 1fr min-content;
    gap: 3px;
  }
`;
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const ErrorMessage = styled.div`
  font-weight: 450;
  font-size: 13px;
  color: ${({ theme }) => theme.errorClr};
`;

const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;

  align-items: center;
  overflow: hidden;
`;

const StyledInput = styled.input`
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.bageDark};
  &:hover {
    border-color: ${({ theme }) => theme.actionOrange};
  }
  &:focus {
    outline-style: none;
  }
  &:placeholder-shown {
    background-color: ${({ theme }) => theme.inputEmptyBackground};
  }
  &::placeholder {
    font-weight: 450;
    font-size: 15px;
    line-height: 1.33px;

    vertical-align: bottom;

    color: #86888b;
  }
  &:invalid {
    outline: 1px solid ${({ theme }) => theme.errorClr};
  }
`;

const InputText = styled(StyledInput)`
  display: flex;
  align-items: flex-end;

  border-radius: 8px 0 0 8px;

  width: 100%;
  height: 58px;

  padding: 19px 21px;
`;
const InputTime = styled(StyledInput)`
  display: flex;
  align-items: flex-end;

  border-radius: 0 8px 8px 0;
  width: 120px;
  min-width: 120px;
  height: 58px;

  padding: 19px 48px 19px 21px;
`;

const ButtonName = styled.span`
  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`;

const FormNoteText = styled.span`
  font-family: "Gilroy", sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.83;

  text-align: center;

  color: ${({ theme }) => theme.brownPrime};

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export default FormCreateEvent;
