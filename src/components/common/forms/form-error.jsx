import React, { useMemo } from 'react';
import styled from "@emotion/styled";
import { Collapse } from "@material-ui/core";
import { useFormikContext } from "formik";

import { resourceFormat } from "../../string-resources/string-resources";

export const FormError = ({ error }) => {
    const context = useFormikContext();
    const statusError = useMemo(() => context && context.status && context.status.error, [context]);
    const errorData = useMemo(() => error || statusError, [error, statusError]);

    const isError = !!errorData;
    const errorMessage = errorData && ((errorData.messageKey && resourceFormat(errorData.messageKey, errorData.data)) || errorData.message)

    return (
        <Collapse in={isError}>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Collapse>
    );
}

const ErrorMessage = styled.div`
  margin-bottom: 20px;
  color: #ff0000;
`
