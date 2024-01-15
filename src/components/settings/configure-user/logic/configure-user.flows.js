import { handle } from "../../../../store/redux-flow";
import { GET_USERS, SAVE_CONFIGURE_USER } from "./configure-user.const";
import {
  saveInLocalStorage,
  readFromLocalStorage,
} from "../../../../utils/storage";

export const configureUserFlows = [
  handle(SAVE_CONFIGURE_USER.INVOKE, handleSaveConfigureUser),
  handle(GET_USERS.INVOKE, handleGetUsers),
];

async function handleSaveConfigureUser({ form }, dispatch) {
  debugger;
  dispatch(SAVE_CONFIGURE_USER.request({}));

  try {
    debugger;
    saveInLocalStorage("formData", form);
    dispatch(SAVE_CONFIGURE_USER.success({ data: form }));
    // dispatch(GET_USERS.invoke());
  } catch (error) {
    debugger;
    dispatch(SAVE_CONFIGURE_USER.failure({ error }));
  }
}

async function handleGetUsers({ pageNumber }, dispatch, state) {
  const filter = "";
  //dispatch(GET_USERS.request({ filter }));
  debugger;

  try {
    // Hard coded response
    const response = {
      items: [
        {
          id: 1,
          name: "abc",
          userEmail: "abc@gmail.com",
          office: 0,
          customer: "ABC",
          role: "Administrator",
        },
        {
          id: 2,
          name: "xyz",
          userEmail: "xyz@gmail.com",
          office: 4,
          customer: "AS",
          role: "Customer",
        },
        {
          id: 3,
          name: "bcd",
          userEmail: "bcd@gmail.com",
          office: 0,
          customer: "BCD",
          role: "Operations",
        },
        {
          id: 4,
          name: "test",
          userEmail: "test@gmail.com",
          office: 3,
          customer: "Test",
          role: "Customer",
        },
        {
          id: 5,
          name: "abcd",
          userEmail: "abcd@gmail.com",
          office: 0,
          customer: "ABCD",
          role: "Operations",
        },
      ],
      pageNumber: 1,
      pageSize: 25,
      totalCount: 5,
    };
    debugger;
    // Removed the call to post() and the debugger statement.
    dispatch(GET_USERS.success({ data: response.items }));
  } catch (error) {
    dispatch(GET_USERS.failure({ error }));
  }
}