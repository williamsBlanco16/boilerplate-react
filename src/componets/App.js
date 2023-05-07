import { ReduxProvider } from '../redux'
import { Router } from '../router'
import * as Sentry from '@sentry/react'
import { loggerInit } from '../logs/sentry'
import { StrictMode } from 'react'

const App = () => (
  <StrictMode>
    <ReduxProvider>
      <Router />
    </ReduxProvider>
  </StrictMode>
)
loggerInit()
export default Sentry.withProfiler(App)
