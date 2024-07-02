import React from 'react';
import { AppContext, IAppContext } from '../AppContext';

export function useAppContext(): IAppContext {
  const context = React.useContext(AppContext as React.Context<IAppContext>);

  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
}