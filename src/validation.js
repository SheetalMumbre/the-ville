import * as Validator from "yup";
import { setLocale } from "yup";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import { resource, resourceFormat } from "./components/string-resources/string-resources";
import { applicationResources } from "./components/application/logic/application.const";
import { validateEmail } from "./components/common/forms/email-validation";

export const configureValidation = () => {
    setLocale({
        mixed: {
            default: () => resource(applicationResources.validation.invalid),
            required: () => resource(applicationResources.validation.required),
            notType: () => resource(applicationResources.validation.wrongType),
        },
        string: {
            email: () => resource(applicationResources.validation.email),
            min: () => resource(applicationResources.validation.string.min),
            max: context => resourceFormat(applicationResources.validation.string.max, context),
            matches: () => resource(applicationResources.validation.string.matches),
            length: context => resourceFormat(applicationResources.validation.string.length, context),
        },
        number: {
            default: () => resource(applicationResources.validation.number.must),
            min: () => resource(applicationResources.validation.number.min),
            max: () => resource(applicationResources.validation.number.max),
            positive: () => resource(applicationResources.validation.number.positive),
            integer: () => resource(applicationResources.validation.number.integer)
        },
        array: {
            min: context => resourceFormat(applicationResources.validation.array.min, context)
        }
    });

    Validator.addMethod(Validator.string, 'time', function (errorMessage) {
        return this.test(`test-time`, errorMessage, function (value) {
            const { path, createError } = this;
            return !value || /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value) || createError({ path, message: resource(applicationResources.validation.invalid) });
        });
    });

    Validator.addMethod(Validator.mixed, 'requiredCondition', function (condition) {
        return this.when((value, schema) => condition(value) ? schema.required() : schema);
    });

    Validator.addMethod(Validator.mixed, 'requiredWhen', function (requiredField) {
        return this.when(requiredField, function (requiredFieldValue, schema) {
            return requiredFieldValue === true ? schema.required() : schema;
        });
    });

    Validator.addMethod(Validator.string, 'phoneNumber', function (errorMessage) {
        function getErrorMessage(value) {
            if (!value) {
                return resource(applicationResources.validation.required);
            }

            if (value.charAt(0) !== "+") {
                return resource(applicationResources.validation.phoneNumber.internationalFormat);
            }

            const invalidPhoneResourceKey = applicationResources.validation.phoneNumber.invalid;
            try {
                const phoneNumber = parsePhoneNumber(value);
                const country = phoneNumber && phoneNumber.country;
                if (country) {
                    return resourceFormat(applicationResources.validation.phoneNumber.invalidInCountry, { country });
                }

                return resource(invalidPhoneResourceKey);
            } catch (error) {
                return resource(invalidPhoneResourceKey);
            }
        }
        return this.test(`test-phone-number`, errorMessage, function (value) {
            const { path, createError } = this;
            return !value || isValidPhoneNumber(value) || createError({ path, message: getErrorMessage(value) });
        });
    })

    Validator.addMethod(Validator.string, 'multipleEmails', function (errorMessage) {
        function getErrorMessage(value) {
            const emails = value ? value.split(/[\s;]+/) : [];
            for (const email of emails) {
                const validator = Validator.string().test(validateEmail);
                if (!validator.isValidSync(email)) {
                    return resourceFormat(applicationResources.validation.specificEmailInvalid, { email: email });
                }
            }
        }

        return this.test(`test-multiple-emails`, errorMessage, function (value) {
            const { path, createError } = this;
            const validator = Validator.string().test(validateEmail);
            const emails = value ? value.split(/[\s;]+/) : [];
            return !value || !emails.some(email => !validator.isValidSync(email)) || createError({ path, message: getErrorMessage(value) });
        });
    })

    Validator.addMethod(Validator.array, 'exactlyOne', function (args) {
        const { fieldName, predicate, message } = args
        return this.test('exactly-one', args, function (list) {
            const { path, createError } = this;
            return list.length == 0 || list.filter(predicate).length == 1 || createError({ path: `${path}.0.${fieldName}`, message: message });
        })
    })

    Validator.addMethod(Validator.array, 'atLeastOne', function (args) {
        const { predicate, message } = args
        return this.test('at-least-one', args, function (list) {
            const { path, createError } = this;
            return list.length == 0 || list.filter(predicate).length >= 1 || createError({ path: `${path}`, message: message });
        })
    })

    Validator.addMethod(Validator.array, 'dateRange', function (args) {
        return this.test('date-range', args, function (list) {
            const { path, createError } = this;
            const validator = Validator.array().of(Validator.date().required()).length(2);
            return validator.isValidSync(list) || createError({ path, message: resourceFormat(applicationResources.validation.dateRange) });
        })
    })

    // Validator.addMethod(Validator.string, 'mustBeLaterThan', function (args) {
    //     const { fieldLabel, compareToFieldName, compareToFieldLabel, resources } = args;
    //     return this.test(name, `${resource(resources[fieldLabel])} must be later than ${resource(resources[compareToFieldLabel])}`, (fieldDate, context) => {
    //         const comparisonDate = context.parent[compareToFieldName]
    //         return !comparisonDate || !fieldDate || comparisonDate.substr(0, 10) <= fieldDate.substr(0, 10)
    //     })
    // })
}
