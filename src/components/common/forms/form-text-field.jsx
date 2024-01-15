import { Grid, TextField } from "@mui/material";
import React, { useEffect, useMemo, useState } from 'react';
import { useField, useFormikContext } from 'formik';
import { css } from "@emotion/css";
import { Tooltip } from "../../common/tooltip";
import styled from "@emotion/styled";

export const FormTextField = ({ label, placeholder, multiline, rows, autoFocus, endAdornment, readOnly, disabled, autoComplete, displayMode, onFieldBlur, onFieldChange, visibility, disableError, title, xs, sm, md, lg, xl, alert, alertMessage, maxLength = undefined, startAdornment, ...props }) => {
  const [field, meta, helpers] = useField(props.name);
  const { setValue } = helpers;
  const isError = meta.touched && !!meta.error;
  const { values, setFieldValue } = useFormikContext();
  const [visible, setVisible] = useState(!visibility);

  useEffect(() => {
    setVisible(!visibility || visibility(values));
  }, [setValue, values, visibility, visible])

  const handleBlur = (event) => {
    onFieldBlur && onFieldBlur(event.target.value, values, setFieldValue);
  };

  const displayRender = useMemo(() => (
    <Grid item title={title} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <Tooltip tooltip={alert && alertMessage}>
        <div className={displayModeClass}>{field.value || ""}</div>
      </Tooltip>
    </Grid>
  ), [field.value, alert, alertMessage, lg, md, sm, title, xl, xs]);

  if (!visible) {
    return null;
  }

  if (displayMode) {
    return displayRender;
  }

  return (
    <Grid item title={title} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <Tooltip tooltip={alert && alertMessage}>
        <TextWrapper>
          <TextField
            {...props}
            error={isError}
            helperText={(isError && !disableError) ? <span title={meta.error}>{meta.error}</span> : null}
            title={(!label && isError) ? meta.error : undefined}
            label={label}
            multiline={multiline}
            variant="standard"
            rows={rows}
            autoFocus={autoFocus}
            fullWidth
            placeholder={placeholder}
            disabled={disabled}
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              ...field,
              value: field.value || "",
              spellCheck: false,
              readOnly: readOnly,
              maxLength: maxLength
            }}
            InputProps={{
              ...props.InputProps,
              endAdornment: endAdornment,
              startAdornment: startAdornment,
              classes: {
                formControl: !label && noLabelCss,
                root: `${alert && alertCss}`,
              },
              disableUnderline: true,
            }}
            autoComplete={autoComplete || "off"}
            onBlur={handleBlur}
            onChange={e => onFieldChange && onFieldChange(e.target.value, { values, setFieldValue })}
          />
        </TextWrapper>
      </Tooltip>
    </Grid>
  );
};

const TextWrapper = styled.div`
padding-bottom: 8px;

input {
  border: 1px solid #3cacac;
  border-radius: 20px;
  padding: 2px 10px;
  width:auto;
}
input:read-Only {
color: #828282;
}
`;

const displayModeClass = css`
  padding: 4px 0;
  line-height: 1rem;
  word-break: break-word;
  white-space: break-spaces;
`;

const noLabelCss = css`
  margin-top: unset !important;
`;

const alertCss = css`
  background-color: #F4EA96;
  border-color: #FFE50C;
`;
