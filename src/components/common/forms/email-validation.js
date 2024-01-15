import * as Validator from "yup";
import { applicationResources } from "../../application/logic/application.const";
import { resource, resourceFormat } from "../../string-resources/string-resources";

export const validateEmailsInput = (value, context) => {
  const emails = value ? value.split(';').map(v => v.trim()) : [];
  for (const email of emails) {
    const validator = Validator.string().required().test(validateEmail);
    const emailIsWhitespace = !email;

    if (!validator.isValidSync(email) || emailIsWhitespace) {
      const whitespaceEmailString = resource(applicationResources.validation.whitespaceEmailString);
      const errorMessage = resourceFormat(applicationResources.validation.specificEmailInvalid, { email: !emailIsWhitespace ? email : whitespaceEmailString });
      return context.createError({ message: errorMessage })
    }
  }

  return true;
};

export const validateEmail = (value, context) => {
  const validator = Validator.string().email().matches(/^([a-zA-Z0-9!#$%&'*+-\/=?^_`{|}~.-@\[\](): \"\\])*@(.)*$/);

  if (!validator.isValidSync(value)) {
    const errorMessage = resourceFormat(applicationResources.validation.specificEmailInvalid, { email: value });
    return context.createError({ message: errorMessage })
  }

  return true;
};

