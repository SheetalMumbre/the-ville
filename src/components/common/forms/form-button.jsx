import React from 'react';
import { Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "@emotion/styled";
import { useFormikContext } from "formik";

import { applicationResources } from "../../application/logic/application.const";
import { resource } from "../../string-resources/string-resources";

export const FormButton = ({ className, autoFocus, fetching, fullWidth, type, children, color, variant, onClick, endIcon, href, name, disabled, size, disableElevation = false }) => (
    <Button
        color={color || (variant == "outlined" ? "default" : "primary")}
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
        {fetching && <Fetching size={16} />}
    </Button>
);

export const SubmitButton = ({ fetching, fullWidth, children, endIcon, name, alwaysEnabled, type = "submit", onClick, showNoChangesText = true }) => {
    const { dirty, values } = useFormikContext();
    const noChanges = !dirty && !!values?.id && !fetching && !alwaysEnabled;

    return (
        <ButtonContainer>
            <PartialBorderWrapper>
                <FormButton
                    disabled={fetching || noChanges}
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

export const CancelButton = ({ children, onClick }) => {
    return (
        <Button onClick={onClick}>
            {children}
        </Button>
    );
};

const Fetching = styled(CircularProgress)`
  position: absolute;
`
const ButtonContainer = styled.div`
  padding: 20px 0;
`;

const PartialBorderWrapper = styled.div`
  position: relative;
  height: 20px;
  width: 50px;
  border-top: 2px solid #eeeeee;
  border-left: 2px solid #eeeeee;
  border-top-left-radius: 6px;
  margin-right: 4rem;
  margin-top: 1rem;
`;