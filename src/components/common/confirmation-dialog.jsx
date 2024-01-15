import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";

import { resource, resourceFormat } from "../string-resources/string-resources";
import { applicationResources, confirmationDialogButtons } from "../application/logic/application.const";
import { closeConfirmationDialog } from "../application/logic/application.actions";
import { FormButton } from "./forms/form-button";

export const ConfirmationDialog = () => {
  const dispatch = useDispatch();
  const open = useSelector(state => state.application.confirmationDialog.open)
  const type = useSelector(state => state.application.confirmationDialog.buttons)
  const callback = useSelector(state => state.application.confirmationDialog.callback)
  const closeCallback = useSelector(state => state.application.confirmationDialog.closeCallback)
  const denyCallback = useSelector(state => state.application.confirmationDialog.denyCallback)
  const message = useSelector(state => state.application.confirmationDialog.message)
  const header = useSelector(state => state.application.confirmationDialog.header)
  const okButtonLabelKey = useSelector(state => state.application.confirmationDialog.okButtonLabelKey)
  const handleClose = () => dispatch(closeConfirmationDialog());

  const [saving, setSaving] = useState(false);
  const [denying, setDenying] = useState(false);


  const handleSave = async () => {
    setSaving(true);
    callback && await callback();
    setSaving(false);
    handleClose();
    closeCallback && await closeCallback();
  }

  const handleDeny = async () => {
    setDenying(true);
    denyCallback && await denyCallback();
    setDenying(false);
    handleClose();
    closeCallback && await closeCallback();
  }

  const headerText = header && (header.data ? resourceFormat(header.key, header.data) : resource(header.key));
  const messageText = message && (message.data ? resourceFormat(message.key, message.data) : resource(message.key));

  const buttons = {
    ok: type === confirmationDialogButtons.OkCancel,
    cancel: type === confirmationDialogButtons.OkCancel || type === confirmationDialogButtons.YesNoCancel,
    yes: type === confirmationDialogButtons.YesNoCancel,
    no: type === confirmationDialogButtons.YesNoCancel
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{headerText ? headerText : resource(applicationResources.dialogs.confirmationDialogTitle)}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {messageText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {buttons.cancel && (
          <Button onClick={handleClose} color="primary" name="cancel">
            {resource(applicationResources.dialogs.cancel)}
          </Button>
        )}

        {buttons.no && (
          <FormButton fetching={denying} onClick={handleDeny} name="no" variant="text">
            {resource(applicationResources.dialogs.no)}
          </FormButton>
        )}

        {buttons.yes && (
          <FormButton fetching={saving} autoFocus onClick={handleSave} color="primary" name="yes">
            {resource(applicationResources.dialogs.yes)}
          </FormButton>
        )}

        {buttons.ok && (
          <FormButton fetching={saving} autoFocus onClick={handleSave} color="primary" name="ok">
            {resource(okButtonLabelKey ? okButtonLabelKey : applicationResources.dialogs.ok)}
          </FormButton>
        )}
      </DialogActions>
    </Dialog>
  );
};
