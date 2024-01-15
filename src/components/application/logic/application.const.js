import { action } from "../../../utils/action";
import { Role } from "../../../../src/layout/authentication/logic/authentication.const";

//import { invoicesResources } from "../../invoices/logic/invoicesConsts.js";
//import { shipmentBillingsResources } from "../../shipmentBillings/logic/shipmentBillingsConsts.js";
//import { stockResources } from "../../stock/logic/stockConsts.js";

export const INITIALIZE_APPLICATION = action("INITIALIZE_APPLICATION");
export const SET_APPLICATION_READY_STATE = "SET_APPLICATION_READY_STATE";
export const OPEN_MODULE = action("OPEN_MODULE");
export const ROUTE_CHANGED = "ROUTE_CHANGED";
export const GET_COUNTRIES = action("GET_COUNTRIES");
export const GET_CURRENCIES = action("GET_CURRENCIES");
export const TOGGLE_THEME = action("TOGGLE_THEME");
export const TOGGLE_SIDE_MENU_COLLAPSED = action("TOGGLE_SIDE_MENU_COLLAPSED");
export const SHOW_CONFIRMATION_DIALOG = action("SHOW_CONFIRMATION_DIALOG");
export const CLOSE_CONFIRMATION_DIALOG = action("CLOSE_CONFIRMATION_DIALOG");
export const SET_FOCUS_STATE = action("SET_FOCUS_STATE");
export const HIDE_SERVICE_MESSAGE = action("HIDE_SERVICE_MESSAGE");
export const GET_SERVICE_MESSAGE = action("GET_SERVICE_MESSAGE");
export const OPEN_WHATS_NEW_DIALOG = action("OPEN_WHATS_NEW_DIALOG");
export const CLOSE_WHATS_NEW_DIALOG = action("CLOSE_WHATS_NEW_DIALOG");
export const SET_PAGE_TITLE_ADDITIONAL_INFO = action("SET_PAGE_TITLE_ADDITIONAL_INFO");
export const TOGGLE_USER_SETTINGS_DIALOG = action("TOGGLE_USER_SETTINGS_DIALOG");
export const GET_USER_NOTIFICATION_SETTINGS = action("GET_USER_NOTIFICATION_SETTINGS");
export const SAVE_USER_NOTIFICATION_SETTINGS = action("SAVE_USER_NOTIFICATION_SETTINGS");

export const applicationPlaceholders = {
    leftMenu: "leftMenu",
    tabMenu: "tabMenu"
};

export const confirmationDialogButtons = {
    OkCancel: "OkCancel",
    YesNoCancel: "YesNoCancel"
};

export const applicationResources = {
    http: {
        notAuthenticated: "application.http.notAuthenticated",
        unauthorized: "application.http.unauthorized",
        tooManyRequests: "application.http.tooManyRequests",
        payloadTooLarge: "application.http.payloadTooLarge",
        redirected: "application.http.redirected",
        notValid: "application.http.notValid",
        responseNotFromMostRecentRequest: "application.http.responseNotFromMostRecentRequest",
    },
    validation: {
        required: 'application.validation.required',
        wrongType: 'application.validation.wrongType',
        email: 'application.validation.email',
        string: {
            min: 'application.validation.string.min',
            max: 'application.validation.string.max',
            matches: 'application.validation.string.matches',
            length: 'application.validation.number.length'
        },
        number: {
            must: 'application.validation.number.must',
            min: 'application.validation.number.min',
            max: 'application.validation.number.max',
            positive: 'application.validation.number.positive',
            integer: 'application.validation.number.integer',
        },
        array: {
            min: 'application.validation.array.min'
        },
        specificEmailInvalid: 'application.validation.specificEmailInvalid',
        whitespaceEmailString: 'application.validation.whitespaceEmailString',
        invalid: 'application.validation.invalid',
        phoneNumber: {
            internationalFormat: 'application.validation.phoneNumber.internationalFormat',
            invalid: 'application.validation.phoneNumber.invalid',
            invalidInCountry: 'application.validation.phoneNumber.invalidInCountry'
        },
        collection: {
            minOneItemRequired: 'application.validation.collection.minOneItemRequired',
            minNumberOfAttachments: 'application.validation.collection.minNumberOfAttachments',
        },
        dateRange: 'application.validation.dateRange',
    },
    actions: {
        saveNew: 'application.actions.saveNew',
        saveChanges: 'application.actions.saveChanges',
        sendEmail: 'application.actions.sendEmail',
        generate: 'application.actions.generate',
        addFiles: 'application.actions.addFiles',
        confirmRemoval: 'application.actions.confirmRemoval',
        cancel: 'application.actions.cancel',
        clear: 'application.actions.clear',
        selectAll: 'application.actions.selectAll',
        clearSelection: 'application.actions.clearSelection',
        addInDropDown: 'application.actions.addInDropDown',
        tooltips: {
            edit: 'application.actions.tooltips.edit',
            delete: 'application.actions.tooltips.delete',
            markAsArrived: 'application.actions.tooltips.markAsArrived'
        }
    },
    filters: {
        generalPlaceholder: 'application.filters.generalPlaceholder',
        clearAllFilters: 'application.filters.clearAllFilters'
    },
    values: {
        yes: 'application.values.yes',
        no: 'application.values.no',
        none: 'application.values.none',
    },
    headers: {
        main: 'application.headers.main',
        administration: 'application.headers.administration',
        settings: 'application.headers.settings',
        contacts: 'application.headers.contacts',
        billing: 'application.headers.billing',
        stock: 'application.headers.stock',
        shipments: 'application.headers.shipments',
        quotes: 'application.headers.quotes',
        pickUps: 'application.headers.pickUps',
    },
    messages: {
        changesSaved: 'application.messages.changesSaved',
        unexpectedError: 'application.messages.unexpectedError',
        leavingWithUnsavedChanges: 'application.messages.leavingWithUnsavedChanges',
        removed: 'application.messages.removed'
    },
    roles: {
        [Role.Administrator]: 'application.role.administrator',
        [Role.Operations]: 'application.role.operations',
        [Role.Sales]: 'application.role.sales',
        [Role.Agent]: 'application.role.agent',
        [Role.Hub]: 'application.role.hub',
        [Role.Manager]: 'application.role.manager',
        [Role.Accounting]: 'application.role.accounting',
        [Role.GlobalReader]: 'application.role.globalReader',
    },
    user: {
        logout: 'applicationResources.user.logout',
        settings: 'applicationResources.user.settings',
        themeSwitch: 'applicationResources.user.themeSwitch',
        userManuals: 'applicationResources.user.userManuals',
        openOpsUserManual: 'applicationResources.user.openOpsUserManual',
        openHubUserManual: 'applicationResources.user.openHubUserManual',
        openBillingUserManual: 'applicationResources.user.openBillingUserManual',
    },
    placeholders: {
        typeHere: 'application.placeholders.typeHere',
        pleaseStartTyping: 'application.placeholders.pleaseStartTyping',
        noMatch: 'application.placeholders.noMatch',
        noOptions: 'application.placeholders.noOptions',
        hasMoreItems: 'application.placeholders.hasMoreItems',
        clickHere: 'application.placeholders.clickHere'
    },
    forms: {
        uploadFileWrongType: 'application.forms.uploadFileWrongType',
        uploadFileTooBig: 'application.forms.uploadFileTooBig',
        uploadFileTooBigWithFileName: 'application.forms.uploadFileTooBigWithFileName',
        uploadImage: 'application.forms.uploadImage',
        isDocumentInternal: 'application.forms.isDocumentInternal',
        uploadFile: 'application.forms.uploadFile',
        fileUploadedAt: 'application.forms.fileUploadedAt',
        fileName: 'application.forms.fileName',
        allSaved: 'application.forms.allSaved',
        saveToProceedDialog: {
            title: 'application.forms.saveToProceedDialog.title',
            text: 'application.forms.saveToProceedDialog.text',
            save: 'application.forms.saveToProceedDialog.save',
            cancel: 'application.forms.saveToProceedDialog.cancel'
        }
    },
    dialogs: {
        sendEmailDialogTitle: 'application.dialogs.sendEmailDialogTitle',
        sendEmailDialogEmailTemplate: 'application.dialogs.sendEmailDialogEmailTemplate',
        sendEmailDialogRecipients: 'application.dialogs.sendEmailDialogRecipients',
        sendEmailDialogCopyTo: 'application.dialogs.sendEmailDialogCopyTo',
        sendEmailDialogSubject: 'application.dialogs.sendEmailDialogSubject',
        sendEmailDialogContent: 'application.dialogs.sendEmailDialogContent',
        sendEmailDialogAttachment: 'application.dialogs.sendEmailDialogAttachment',
        addShowCommentsDialogTitle: 'application.dialogs.addShowCommentsDialogTitle',
        confirmationDialogTitle: 'application.dialogs.confirmationDialogTitle',
        ok: 'application.dialogs.ok',
        yes: 'application.dialogs.yes',
        no: 'application.dialogs.no',
        close: 'application.dialogs.close',
        cancel: 'application.dialogs.cancel',
        addFilesToEmail: 'application.dialogs.addFilesToEmail',
        noAvailableFilesToAdd: 'application.dialogs.noAvailableFilesToAdd',
        replyTo: 'application.dialogs.replyTo',
    },
    auditTrails: {
        empty: 'application.auditTrails.empty',
        changed: 'application.auditTrails.changed',
        edited: 'application.auditTrails.edited',
        removed: 'application.auditTrails.removed',
        added: 'application.auditTrails.added',
        from: 'application.auditTrails.from',
        fromAtCollection: 'application.auditTrails.fromAtCollection',
        to: 'application.auditTrails.to',
        toAtCollection: 'application.auditTrails.toAtCollection',
        True: 'application.auditTrails.selected',
        False: 'application.auditTrails.unselected',
        changeSource: {
            EseaScanGunApp: 'application.auditTrails.changeSource.EseaScanGunApp',
        },
        domainActions: {
            MissingDocumentsEmailSent: {
                header: 'application.auditTrails.domainActions.missingDocumentsEmailSent.header',
                text: 'application.auditTrails.domainActions.missingDocumentsEmailSent.text',
            },
            StockBatchAllDocumentsEmailSent: {
                header: 'application.auditTrails.domainActions.stockBatchAllDocumentsEmailSent.header',
                text: 'application.auditTrails.domainActions.stockBatchAllDocumentsEmailSent.text',
            },
            ShipmentAllDocumentsEmailSent: {
                header: 'application.auditTrails.domainActions.shipmentAllDocumentsEmailSent.header',
                text: 'application.auditTrails.domainActions.shipmentAllDocumentsEmailSent.text',
            },
            ShipmentManifestEmailSent: {
                header: 'application.auditTrails.domainActions.shipmentManifestEmailSent.header',
                text: 'application.auditTrails.domainActions.shipmentManifestEmailSent.text',
            },
            ShipmentPreAlertEmailSent: {
                header: 'application.auditTrails.domainActions.shipmentPreAlertEmailSent.header',
                text: 'application.auditTrails.domainActions.shipmentPreAlertEmailSent.text',
            },
            ShipmentPreAlertReminderSent: {
                header: 'application.auditTrails.domainActions.shipmentPreAlertReminderSent.header',
                text: 'application.auditTrails.domainActions.shipmentPreAlertReminderSent.text',
            },
            ShipmentCancellationEmailSent: {
                header: 'application.auditTrails.domainActions.shipmentCancellationEmailSent.header',
                text: 'application.auditTrails.domainActions.shipmentCancellationEmailSent.text',
            },
            CreateRevision: {
                header: 'application.auditTrails.domainActions.createRevision.header',
                text: 'application.auditTrails.domainActions.createRevision.text',
            },
            QuoteRequestDocumentSent: {
                header: 'application.auditTrails.domainActions.quoteRequestDocumentSent.header',
                text: 'application.auditTrails.domainActions.quoteRequestDocumentSent.text',
            },
            QuoteRequestShipmentCreated: {
                header: 'application.auditTrails.domainActions.quoteRequestShipmentCreated.header',
                text: 'application.auditTrails.domainActions.quoteRequestShipmentCreated.text',
            },
            ShipmentMarkedAsReadyForBilling: {
                header: 'application.auditTrails.domainActions.shipmentMarkedAsReadyForBilling.header',
                text: 'application.auditTrails.domainActions.shipmentMarkedAsReadyForBilling.text',
            },
            ShipmentUnmarkedReadyForBilling: {
                header: 'application.auditTrails.domainActions.ShipmentUnmarkedReadyForBilling.header',
                text: 'application.auditTrails.domainActions.ShipmentUnmarkedReadyForBilling.text',
            },
            ShipmentMarkedAsNotBillable: {
                header: 'application.auditTrails.domainActions.ShipmentMarkedAsNotBillable.header',
                text: 'application.auditTrails.domainActions.ShipmentMarkedAsNotBillable.text',
            },
            ShipmentUnmarkedNotBillable: {
                header: 'application.auditTrails.domainActions.ShipmentUnmarkedNotBillable.header',
                text: 'application.auditTrails.domainActions.ShipmentUnmarkedNotBillable.text',
            },
            CombinedPoDocumentGenerated: {
                header: 'application.auditTrails.domainActions.CombinedPoDocumentGenerated.header',
                text: 'application.auditTrails.domainActions.CombinedPoDocumentGenerated.text',
            },
            InvoiceSent: {
                header: 'application.auditTrails.domainActions.InvoiceSent.header',
                text: 'application.auditTrails.domainActions.InvoiceSent.text',
            },
            InvoiceMarkedAsPaid: {
                header: 'application.auditTrails.domainActions.invoiceMarkedAsPaid.header',
                text: 'application.auditTrails.domainActions.invoiceMarkedAsPaid.text',
            },
            InvoiceMarkedAsNotPaid: {
                header: 'application.auditTrails.domainActions.invoiceMarkedAsNotPaid.header',
                text: 'application.auditTrails.domainActions.invoiceMarkedAsNotPaid.text',
            },
            StockBatchFirstMileEmailToSupplierSent: {
                header: 'application.auditTrails.domainActions.stockBatchFirstMileEmailToSupplierSent.header',
                text: 'application.auditTrails.domainActions.stockBatchFirstMileEmailToSupplierSent.text',
            },
        }
        // valueContexts: {
        //     'InvoiceStatus': invoicesResources.enums.invoiceStatus,
        //     'PaymentStatus': invoicesResources.enums.invoicePaymentStatus,
        //     'ShipmentBillingStatus': shipmentBillingsResources.enums.status,
        //     'StockBatchPriority': stockResources.enums.stockBatchPriority,
        // }
    },
    domain: {
        containsDangerousGoods: 'application.domain.containsDangerousGoods',
        containsDocuments: 'application.domain.containsDocuments',
        isHighPriority: 'application.domain.isHighPriority',
        priority: 'application.domain.priority',
        hasLineItems: 'application.domain.hasLineItems',
        hasPoorPackage: 'application.domain.hasPoorPackage',
        isXray: 'application.domain.isXray',
        hasNonStackable: 'application.domain.hasNonStackable',
        isOversized: 'application.domain.isOversized',
        isMedicine: 'application.domain.isMedicine',
        isRemoved: 'application.domain.isRemoved',
    },
    whatsNew: {
        button: {
            title: 'application.whatsNew.button.title'
        },
        dialog: {
            title: 'application.whatsNew.dialog.title',
            noNews: 'application.whatsNew.dialog.noNews',
        }
    },
    themeSwitcher: {
        buttonTitle: 'application.themeSwitcher.buttonTitle'
    },
    userSettings: {
        title: 'application.userSettings.title',
        tabMenu: {
            notifications: 'application.userSettings.tabMenu.notifications',
            printer: 'application.userSettings.tabMenu.printer',
        },
        printers: {
            form: {
                useCloudPrinter: 'application.userSettings.printers.form.useCloudPrinter',
                documentsPrinter: 'application.userSettings.printers.form.documentsPrinter',
                barcodesPrinter: 'application.userSettings.printers.form.barcodesPrinter',
                crrPrintMode: 'application.userSettings.printers.form.crrPrintMode',
            },
            enums: {
                crrPrintMode: {
                    page1: 'application.userSettings.printers.enums.crrPrintMode.page1',
                    page2: 'application.userSettings.printers.enums.crrPrintMode.page2',
                    allPages: 'application.userSettings.printers.enums.crrPrintMode.allPages'
                }
            }
        },
        notifications: {
            header: 'application.userSettings.notifications.header',
            description: 'application.userSettings.notifications.description',
            aboutCommentLabel: 'application.userSettings.notifications.aboutCommentLabel',
            aboutCommentDescription: 'application.userSettings.notifications.aboutCommentDescription',
            aboutPickupsLabel: 'application.userSettings.notifications.aboutPickupsLabel',
            aboutPickupsDescription: 'application.userSettings.notifications.aboutPickupsDescription',
            aboutUnknownVesselLabel: 'application.userSettings.notifications.aboutUnknownVesselLabel',
            aboutUnknownVesselDescription: 'application.userSettings.notifications.aboutUnknownVesselDescription',
        }
    },
    timeFormat: {
        yesterday: 'application.timeFormat.yesterday',
        todaySecondsAgo: 'application.timeFormat.todaySecondsAgo',
        todayMinutesAgo: 'application.timeFormat.todayMinutesAgo',
        todayHoursAgo: 'application.timeFormat.todayHoursAgo',
    },
}

export const userManualTypes = {
    hub: "Hub",
    ops: "Ops",
    billing: "Billing"
}

export const sideMenuHeaders = {
    [applicationResources.headers.main]: { index: 10 },
    [applicationResources.headers.stock]: { index: 20, iconClass: "far fa-list-alt" },
    [applicationResources.headers.quotes]: { index: 30, iconClass: "far fa-comments-alt-dollar" },
    [applicationResources.headers.shipments]: { index: 40, iconClass: "fas fa-ship" },
    [applicationResources.headers.billing]: { index: 50, iconClass: "far fa-file-invoice-dollar" },
    [applicationResources.headers.pickUps]: { index: 60, iconClass: "fas fa-person-carry-box" },
    [applicationResources.headers.contacts]: { index: 70, iconClass: "far fa-address-book" },
    [applicationResources.headers.administration]: { index: 80, iconClass: "far fa-cog" },
    [applicationResources.headers.settings]: { index: 90, iconClass: "far fa-cog" },
}

export const administrationMenuOrder = {
    offices: 0,
    hubs: 1,
    agents: 2,
    otherCompanies: 3,
    suppliers: 4,
    customers: 5,
    settings: 6,
}

export const settingsMenuOrder = {
    emailTemplates: 0,
    productCatalog: 1
}
