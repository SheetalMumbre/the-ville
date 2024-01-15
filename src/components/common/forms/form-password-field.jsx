import React, { useCallback, useState } from "react";
import { useField } from "formik";
import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import styled from "@emotion/styled";
import { Tooltip } from "../../common/tooltip";

export const FormPasswordField = ({ label, autoFocus, autoComplete, ...props }) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);
  const isError = meta.touched && !!meta.error;

  const handleClickShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const handleMouseDownPassword = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
      <Grid item xs={props.xs} sm={props.sm} md={props.md} lg={props.lg} xl={props.xl}>
      <Tooltip>
        <PasswordWrapper>
          <TextField
                type={showPassword ? 'text' : 'password'}
            error={isError}
                helperText={isError ? <span title={meta.error}>{meta.error}</span> : null}
            label={label}
            autoFocus={autoFocus}
            multiline={props.multiline}
            rows={props.rows}
            fullWidth
            autoComplete={autoComplete}
            disabled={props.disabled}
            placeholder={props.placeholder}
            InputLabelProps={{ shrink: true }}
            inputProps={{ ...field }}
            InputProps={{
              startAdornment: props.startAdornment,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? (
                      <Visibility style={VisibilityIconStyle} />
                    ) : (
                      <VisibilityOff style={VisibilityIconStyle} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />
        </PasswordWrapper>
      </Tooltip>
    </Grid>
  );
};

const PasswordWrapper = styled.div`
  border: 1px solid #a3a2a252;
  padding: 5px 1px !important;
  background-color: ${(props) => props.theme.palette.background.input};
  outline: none;
  height: 35px;
  color: #1e1d1d !important;
  font-size: 10px !important;
  border-radius: 20px;
  width: 100%;

  input::-ms-reveal,
  input::-ms-clear {
    display: none;
  }
`;

const VisibilityIconStyle = { padding: "2px", padding: "1px 0px 5px 1px" };
