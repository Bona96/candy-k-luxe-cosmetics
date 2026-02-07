import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DarkModeProvider } from './contexts/DarkModeContext.tsx'
import { GlobalContextProvider } from './contexts/GlobalContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalContextProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </GlobalContextProvider>
  </StrictMode>,
)
