import Button from "@/components/Button";
import { ThemeType } from "@/styles/theme";
// import SvgIcons, { IconsMap } from "@/components/SvgIcon/SvgIcons";
import testData from "@/testData";
import styled from "styled-components";

const FormCreateEvent: React.FC = () => {
  const { createEventFormData } = testData.heroSectionData;
  return (
    <StyledFormCreateEvent>
      <Wrapper>
        <InputsWrapper>
          <InputText
            placeholder={createEventFormData.eventInputPlaceholder}
            name={createEventFormData.eventInputName}
          />

          <InputTime
            placeholder={createEventFormData.timeInputPlaceholder}
            name={createEventFormData.timeInputName}
          />
        </InputsWrapper>

        <Button variant="filled" style={{ width: "100%" }}>
          <ButtonName>{createEventFormData.submitButtonName}</ButtonName>

          {/* <SvgIcons icon={IconsMap.arrowRight} size="16px" /> */}
        </Button>
      </Wrapper>

      <FormNoteText>{createEventFormData.note}</FormNoteText>
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
  width: 100%;

  gap: 10px;

  overflow: hidden;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr min-content;
    gap: 3px;
  }
`;

const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;

  align-items: center;
  overflow: hidden;
`;

const InputText = styled.input`
  display: flex;
  align-items: flex-end;

  border-radius: 8px 0 0 8px;

  width: 100%;
  height: 58px;

  padding: 19px 21px;

  border: 1px solid ${({ theme }: { theme: ThemeType }) => theme.brownLight};

  &:hover {
  }
  &:focus {
  }
  &:placeholder-shown {
    background-color: ${({ theme }: { theme: ThemeType }) =>
      theme.inputEmptyBackground};
  }
  &::placeholder {
    font-weight: 450;
    font-size: 15px;
    line-height: 1.33px;

    vertical-align: bottom;

    color: #86888b;
  }
`;
const InputTime = styled.input`
  display: flex;
  align-items: flex-end;

  border-radius: 0 8px 8px 0;
  width: 120px;
  min-width: 120px;
  height: 58px;

  padding: 19px 48px 19px 21px;

  border-width: 1px 1px 1px 0;
  border-style: solid;
  border-color: ${({ theme }: { theme: ThemeType }) => theme.brownLight};

  &:hover {
  }
  &:focus {
  }
  &:placeholder-shown {
    background-color: ${({ theme }: { theme: ThemeType }) =>
      theme.inputEmptyBackground};
  }
  &::placeholder {
    font-weight: 450;
    font-size: 15px;
    line-height: 1.33px;

    color: #86888b;
  }
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

  color: ${({ theme }: { theme: ThemeType }) => theme.brownPrime};

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export default FormCreateEvent;
