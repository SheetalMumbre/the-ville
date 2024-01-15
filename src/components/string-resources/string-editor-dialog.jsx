import React, { useCallback, useMemo, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { Form, Formik } from "formik";
import * as Validator from "yup";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { FormButton } from "../common/forms/form-button";
import { FormTextField } from "../common/forms/form-text-field";
import { get, post } from "../../utils/http";
//import { get, post } from "../../utils/api-client";
import { isStringResourcesEditMode, updateResources } from "./string-resources";
import { prepareStringResourcesEditMode } from "./logic/string-resources.action";
import { useMount } from "../../utils/hooks";

export const StringsEditorDialog = ({ stringKey, close }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState();

  const formSchema = useMemo(() => Validator.object({
    key: Validator.string().required(),
  }), []);

  const [languageCodes, setLanguageCodes] = useState([]);

  const currentLanguageCode = "en";

  useMount(() => {
    const getData = async () => {
      const response = await get(`/api/stringResources/get/${encodeURI(stringKey)}`);
      const translations = response.translations;

      setLanguageCodes(translations.map(t => ({ languageCode: t.languageCode, name: t.name })));

      const translationFields = translations.reduce((prev, current) => ({
        ...prev,
        [`value_${current.languageCode}`]: current.value
      }), {});

      const fields = {
        key: stringKey,
        ...translationFields
      }

      setForm(fields);
    }

    getData();
  })

  const handleSubmit = useCallback(async (values) => {
    const dto = {
      key: values.key,
      translations: languageCodes.map(lang => ({
        languageCode: lang.languageCode,
        value: values[`value_${lang.languageCode}`]
      }))
    };

    await post("/api/stringResources/save", dto);

    updateResources({
      [values.key]: values[`value_${currentLanguageCode}`]
    });

    dispatch(prepareStringResourcesEditMode(isStringResourcesEditMode()))
  }, [dispatch, currentLanguageCode, languageCodes]);

  const handleKeyDown = (e) => {
    e.stopPropagation();

    if (e.key === "Escape") {
      close();
    }
  }

  if (!form) {
    return null;
  }

  return (
    <Dialog open={true} onClose={close} onClick={e => e.stopPropagation()} onKeyDown={handleKeyDown} style={{ zIndex: 2000 }}>
      <DialogTitle id="form-dialog-title">Edit string resource</DialogTitle>
      <DialogContent style={{ width: 500 }}>
        <Formik initialValues={form} validationSchema={formSchema} onSubmit={handleSubmit} validateOnChange={false}>
          <Form>
            {!form && "Loading..."}
            {form && (
              <Grid container spacing={3}>
                <FormTextField xs={12} label="Key" name="key" />

                {languageCodes.map((lang, index) => (
                  <FormTextField
                    xs={12} key={`lang_${lang.languageCode}`}
                    autoFocus={index === 0}
                    label={lang.name}
                    name={`value_${lang.languageCode}`}
                  />
                ))}

                <Grid item xs={12}>
                  <ButtonsPanel>
                    <Button onClick={close} color="primary" variant="outlined">
                      Cancel
                    </Button>
                    <FormButton type="submit">
                      Save
                    </FormButton>
                  </ButtonsPanel>
                </Grid>
              </Grid>
            )}
          </Form>
        </Formik>
        <br />
      </DialogContent>
    </Dialog>
  );
}

const ButtonsPanel = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 10px;
  }
`
