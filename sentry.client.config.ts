import * as Sentry from "@sentry/nextjs";

Sentry.init({
    dsn: "https://aafd5ee2604c01f684c9889a1facd8cb@o4509441709506560.ingest.de.sentry.io/4509441733754960",
    integrations: [
        Sentry.feedbackIntegration({
            // Additional SDK configuration goes in here, for example:
            colorScheme: "system",
            isNameRequired: true,
            isEmailRequired: true,
        }),
    ],
});