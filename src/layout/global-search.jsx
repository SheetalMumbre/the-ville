import React from "react";
import { Formik, Form } from "formik";
import { FormTextField } from "../components/common/forms/form-text-field";
import styled from "@emotion/styled";
import { InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const GlobalSearch = () => {
  return (
    <>
      <Formik
        initialValues={{
          search: "",
        }}
      >
        {(formik) => (
          <div>
            <Form className="p-2">
              <FormTextField
                placeholder="Your Shipment Id Number"
                name="search"
                type="text"
                className="header-search"
                faicon="fa-search header-search-icon"
                startAdornment={
                  <InputAdornment position="end">
                    <Search color="primary" style={SearchIconStyle} />
                  </InputAdornment>
                }
              />
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};
export default GlobalSearch;

const SearchIconStyle = { padding: "3px 0px 1px" };
