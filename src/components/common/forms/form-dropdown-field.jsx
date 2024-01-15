import React, { useEffect, useMemo, useState } from 'react';
import { FormControl, FormHelperText, Grid, Icon, IconButton, InputAdornment, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useField } from 'formik';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { useFormikContext } from "formik";

export const FormDropdownField = ({ label, options, mapOptionLabel, mapOptionId, readOnly, renderOption, renderValue, displayEmpty, onFieldChange, visibility, disabled, enableClear, disableError, title, xs, sm, md, lg, xl, inputClass, multiple = false, ...props }) => {
  const [, meta, helpers] = useField(props);
  const isError = useMemo(() => meta.touched && !!meta.error, [meta.error, meta.touched]);
  const { setValue, setError } = helpers;
  const { value } = meta;

  const mapKey = useMemo(() => mapOptionId || (option => option.key), [mapOptionId]);
  const mapLabel = useMemo(() => mapOptionLabel || (option => option.label), [mapOptionLabel]);
  const formikContext = useFormikContext();
  const [visible, setVisible] = useState(!visibility);
  useEffect(() => {
    setVisible(!visibility || visibility(formikContext.values));
  }, [setValue, formikContext.values, visibility, visible])

  const handleChange = (event) => {
    const value = event.target.value;
    setError(null);
    setValue(value === '' ? null : value);
    onFieldChange && onFieldChange(options.find(o => mapKey(o) === value), formikContext);
  };

  const handleRenderOption = (option) => {
    return renderOption
      ? renderOption
      : (<MenuItem key={mapKey(option)}
      style={{ fontSize: '13px', padding: '5px' }} 
      value={mapKey(option)}>{(mapLabel(option)) ? mapLabel(option) : <p />}</MenuItem>);
  };

  const handleClear = () => {
    setValue(null);
    onFieldChange && onFieldChange(null);
  };

  const renderEndAdornment = () => (value &&
    <InputAdornment position="start" className={selectAdornment}>
      <IconButton className={selectAdornmentButton} onClick={handleClear}>
        <Icon className={selectAdornmentIcon}>clear</Icon>
      </IconButton>
    </InputAdornment>
  );

  if (!visible) {
    return null;
  }

  return (
    <Grid item title={title} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <DropdownFormControl>
        {label && <InputLabel shrink={true} error={isError}>{label}</InputLabel>}
        <Select
          SelectDisplayProps={{ name: props.name }}
          displayEmpty={displayEmpty}
          classes={{ root: `${selectRoot} ${inputClass}`, select: selectSelect }}
          label={label}
          className={label ? "" : removedLabelClass}
          value={value == null ? '' : value}
          onChange={handleChange}
          readOnly={readOnly}
          error={isError}
          renderValue={renderValue}
          endAdornment={enableClear && renderEndAdornment()}
          disabled={disabled}
          disableUnderline={true}
          multiple={multiple}
        >
          {options.map(o => handleRenderOption(o))}
        </Select>
        {isError && !disableError && <FormHelperText error={isError}><span title={meta.error}>{meta.error}</span></FormHelperText>}
      </DropdownFormControl>
    </Grid >
  );
}

const selectAdornment = css`
  right: 20px;
  position: absolute;
  display: none;
  cursor: pointer;
`
const selectRoot = css`
  padding-top: 6px;
  padding-bottom: 3px;
`
const selectAdornmentButton = css`
  padding: 4px;
`
const selectAdornmentIcon = css`
  font-size: 14px;
`
const DropdownFormControl = styled(FormControl)`
  width: auto;
  min-width:200px;

  &:hover .${selectAdornment} {
    display: flex;
  }
`
const selectSelect = css`
  &:focus {
    background: none;
  }
  border: 1px solid #3cacac;
  border-radius: 20px;
  padding: 4px 10px;
  margin-top: 5px;
`
const removedLabelClass = css`
  margin-top: 0 !important;
`