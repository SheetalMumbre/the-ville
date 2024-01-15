import { delay } from "../../../utils/promise";
import { handle } from "../../../store/redux-flow";
import { setApplicationReadyState } from "../../application/logic/application.actions";
import { setStringResourcesEditMode } from "../string-resources";
import { PREPARE_STRING_RESOURCES_EDIT_MODE } from "./string-resources.consts";

export const stringResourcesFlows = [
  handle(PREPARE_STRING_RESOURCES_EDIT_MODE, handlePrepareStringResourcesEditMode)
];

async function handlePrepareStringResourcesEditMode({ isEnabled }, dispatch) {
  dispatch(setApplicationReadyState(false));
  setStringResourcesEditMode(isEnabled);
  await delay(100);
  dispatch(setApplicationReadyState(true));
}
