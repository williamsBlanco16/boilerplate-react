import * as Sentry from '@sentry/react'
import { getEnviroment, getReactAppVersion } from '../../commons/common.core'

export const loggerInit = () => {
  Sentry.init({
    dsn: 'https://722cecd1220041c0a472e2718a5906c9@o4504968963555328.ingest.sentry.io/4504969359917056',
    enviroment: getEnviroment(),
    release: getReactAppVersion(),
    tunnel: 'http://localhost:3001/sentry',
    integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
    // Performance Monitoring
    tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  })
}
