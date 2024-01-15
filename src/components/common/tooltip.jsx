import { Tooltip as CoreTooltip } from "@material-ui/core";
import React from "react";
import { css } from "@emotion/css";

import { isStringResourcesEditMode } from "../string-resources/string-resources";

export const Tooltip = ({ tooltip, children, onOpen, onClose, inline = true, ...props }) => {
    return (
        <CoreTooltip
            {...props}
            title={tooltip || ""}
            classes={{ tooltip: tooltipStringEditMode() }}
            leaveDelay={isStringResourcesEditMode() ? 10000 : 0}
            onOpen={onOpen}
            onClose={onClose}
        >
            <div className={inline && inlineClass}>{children}</div>
        </CoreTooltip>
    );
}

const tooltipStringEditMode = () => css`
  pointer-events: ${isStringResourcesEditMode() ? 'auto' : 'none'}
`;

const inlineClass = css`
  display: inline;
`;
