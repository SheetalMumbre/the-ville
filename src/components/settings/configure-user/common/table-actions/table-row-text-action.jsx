import React from "react";
// import { ConfirmationAction } from "../confirmation-action/confirmation-action";
import { FormButton } from "../forms/form-button.jsx";

export const TableRowTextAction = ({ user, text, roles, onClick, isFetching, confirmationText, role }) => {
    const notAuthorized = roles && roles.length && !roles.some(neededRole => user.roles.some(userRole => userRole === neededRole));
    if (notAuthorized) {
        return null;
    }

    if (confirmationText) {
        return (
            // <ConfirmationAction confirmationText={confirmationText} onClick={onClick} role={`confirm-${role}`}>
                <FormButton fetching={isFetching} variant="outlined">{text}</FormButton>
            // </ConfirmationAction>
        );
    }

    return (
        <FormButton fetching={isFetching} onClick={onClick} variant="outlined">{text}</FormButton>
    );
}
