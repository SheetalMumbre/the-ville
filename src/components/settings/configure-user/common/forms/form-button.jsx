import React from 'react';
import { Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "@emotion/styled";
import { useFormikContext } from "formik";
import { applicationResources } from '../../../../application/logic/application.const';
import { resource } from "../../../../string-resources/string-resources";

export const FormButton = ({ className, autoFocus, fetching, fullWidth, type, children, color, variant, onClick, endIcon, href, name, disabled, size, disableElevation = false }) => (

    <Button
        // color={color || (variant == "outlined" ? "default" : "primary")}
        autoFocus={autoFocus}
        className={className}
        variant={variant || "contained"}
        onClick={onClick}
        disabled={fetching || disabled}
        type={type || "button"}
        endIcon={endIcon}
        href={href}
        fullWidth={fullWidth}
        name={name}
        size={size}
        disableElevation={disableElevation}
    >
        {children}
        {fetching && <Fetching size={16} color="primary" />}
    </Button>

);

export const SubmitButton = ({ fetching, fullWidth, children, endIcon, name, alwaysEnabled, type = "submit", onClick, showNoChangesText = true, disabled = false }) => {
    const { dirty, values } = useFormikContext();
    const noChanges = !dirty && !!values?.id && !fetching && !alwaysEnabled;

    return (
        <ButtonContainer>
            <PartialBorderWrapper>
                <FormButton
                    disabled={fetching || noChanges || disabled}
                    endIcon={endIcon}
                    type={type}
                    name={name}
                    fullWidth={fullWidth}
                    onClick={onClick}
                    fetching={fetching}
                >
                    {
                        noChanges && showNoChangesText
                            ? resource(applicationResources.forms.allSaved)
                            : children
                    }
                </FormButton>
            </PartialBorderWrapper>
        </ButtonContainer>
    );
};

export const CancelButton = ({ fetching, children, onClick }) => {
    return (
        <ButtonContainer>
            <PartialBorderWrapper>
                <Button onClick={onClick}>
                    {children}
                    {fetching && <Fetching size={16} color="primary" />}
                </Button>
            </PartialBorderWrapper>
        </ButtonContainer>
    );
};

export const OkButton = ({ children, onClick }) => {
    return (
        <ButtonContainer>
            <PartialBorderWrapper>
                <Button onClick={onClick}>
                    {children}
                </Button>
            </PartialBorderWrapper>
        </ButtonContainer>
    );
};

export const CloseButton = ({ children, onClick }) => {
    return (
        <ButtonContainer>
            <Button onClick={onClick}>
                {children}
            </Button>
        </ButtonContainer>
    );
};


const Fetching = styled(CircularProgress)`
  position: absolute;
`
const ButtonContainer = styled.div`
  padding: 20px 0;
  margin-right: 20px;
  cursor:pointer;
`;

const PartialBorderWrapper = styled.div`
  position: relative;
  height: 20px;
  width: 50px;
  border-top: 2px solid ${(props) => props.theme.palette.primary.main};
  border-left: 2px solid ${(props) => props.theme.palette.primary.main};
  border-top-left-radius: 6px;
  margin-right: 4rem;
  margin-top: 1rem;
`;

const StyledButton = styled.div`
  background: #fff;
  color: red;
  border: 2px solid red;
  outline: none;
  height: 30px;
  font-size: 13px;
  border-radius: 4px;
  width: 110px;
  box-shadow: 5px 5px 0px 0px #0a2240;
  margin: 2px;

  &:active {
    background: red;
  }
`;