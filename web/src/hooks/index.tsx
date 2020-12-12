import React from 'react';
import { QuestionsProvider } from './questions';

const AppProvider: React.FC = ({ children }) => (
  <QuestionsProvider>{children}</QuestionsProvider>
);

export default AppProvider;
