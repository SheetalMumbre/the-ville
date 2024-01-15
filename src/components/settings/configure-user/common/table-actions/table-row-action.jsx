import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
// import { ConfirmationAction } from "../confirmation-action/confirmation-action";
import styled from "@emotion/styled";

export const TableRowAction = ({ user, icon, roles, onClick, tooltip, isFetching, confirmationText, role }) => {
    const handleClick = (e) => {
        e.stopPropagation();
        onClick();
    };

    const notAuthorized = roles && roles.length && !roles.some(neededRole => user.roles.some(userRole => userRole === neededRole));
    if (notAuthorized) {
        return null;
    }

    if (confirmationText) {
        return (
            <div title={tooltip}>
                {/* <ConfirmationAction confirmationText={confirmationText} onClick={onClick} role={`confirm-${role}`}>
                    <RelativeIcon role={role}>
                        {isFetching && <AbsoluteCircularProgress size={20} />}
                        <span>{icon.includes("fa-") ? <StyledIcon className={icon} /> : <StyledIcon>{icon}</StyledIcon>}</span>
                    </RelativeIcon>
                </ConfirmationAction> */}
            </div>
        );
    }

    return (
        <div title={tooltip}>
            {isFetching && <CircularProgress size={20} />}
            <RelativeIcon onClick={handleClick} role={role}>
                <span>{icon.includes("fa-") ? <StyledIcon className={icon} /> : <StyledIcon>{icon}</StyledIcon>}</span>
            </RelativeIcon>
        </div>
    );
}

const RelativeIcon = styled.div`
  position: relative;
  margin-right: 12px;
`

const AbsoluteCircularProgress = styled(CircularProgress)`
  position: absolute;
`
const StyledIcon = styled.div`
  font-size: 16px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.54);
`
