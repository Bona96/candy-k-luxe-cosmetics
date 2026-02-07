import React, { createContext, useMemo, useState, useContext } from 'react';
import type { GlobalContextType } from '../types/types';

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [privacyPolicyModal, setPrivacyPolicyModal] = useState(false);
  
  const value = useMemo(() => ({ privacyPolicyModal, setPrivacyPolicyModal }), [privacyPolicyModal, setPrivacyPolicyModal]);

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export function useGlobalContext() {
  const ctx = useContext(GlobalContext);
  if (!ctx) throw new Error('useGlobalContext must be used within GlobalContextProvider');
  return ctx;
}