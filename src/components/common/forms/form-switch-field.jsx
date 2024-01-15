import React from "react";
import { useField, useFormikContext } from "formik";
import { css } from "@emotion/css";
import { FormControlLabel, Grid, FormHelperText } from "@material-ui/core";
import { useTheme } from "@emotion/react";
import { Switch } from "@mui/material";
import styled from "@emotion/styled";

export const FormSwitchField = ({
  label,
  description,
  color,
  disableTabIn,
  onFieldChange,
  readOnly,
  disabled,
  title,
  xs,
  sm,
  md,
  lg,
  xl,
  containerClassName,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;
  const context = useFormikContext();
  const isError = meta.touched && !!meta.error;

  const handleChange = (event) => {
    onFieldChange && onFieldChange(event.target.checked, context);
    setValue(event.target.checked);
  };

  const theme = useTheme();
  return (
    <Grid
      item
      title={title}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      className={containerClassName}
    >
      <FormControlLabel
        classes={{
          label: customLabelClass(theme),
          root: !label && noLabelCss,
        }}
        label={label}
        control={
          <FormSwitch
            readOnly={readOnly}
            disabled={disabled}
            key={`${field.name}${field.value}`}
            color={color}
            name={field.name}
            checked={field.value}
            onChange={handleChange}
            disableTabIn={disableTabIn}
            noLabel={!label}
          />
        }
      ></FormControlLabel>
      {description && (
        <FormSwitchDescription>{description}</FormSwitchDescription>
      )}
      {isError && (
        <FormHelperText
          error={isError}
          classes={{ root: regularPositionClass }}
        >
          <span title={meta.error}>{meta.error}</span>
        </FormHelperText>
      )}
    </Grid>
  );
};
export const FormSwitch = ({
  key,
  color,
  name,
  disableTabIn,
  noLabel,
  readOnly,
  disabled,
  ...rest
}) => (
  <Switch
    {...rest}
    size="small"
    disabled={disabled}
    readOnly={readOnly}
    key={key || `${name}_${rest.checked}`}
    color={color || "primary"}
    name={name}
    classes={{
      root: noLabel ? noLabelCss : "",
    }}
    inputProps={{ tabIndex: disableTabIn ? -1 : 0, readOnly: readOnly }}
  />
);

const customLabelClass = (theme) => css`
  font-size: 15px;
  font-weight: 500;
  margin-left: 10px;
  color: ${theme.palette.text.primary};
`;

const noLabelCss = css`
  margin-left: 0;
  margin-right: 0;
`;

const regularPositionClass = css`
  position: unset !important;
`;

const FormSwitchDescription = styled.div`
  font-weight: 400;
  font-size: 12px;
  padding-left: 47px;
`;
