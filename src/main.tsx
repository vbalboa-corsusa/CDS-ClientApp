// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DashboardContextProvider } from './context/DashboardContext';
import 'dayjs/locale/es';
import dayjs from 'dayjs';
dayjs.locale('es');

ReactDOM.createRoot(document.getElementById('root')!).render(
    <DashboardContextProvider>
    <Suspense>
      <App />
    </Suspense>
    </DashboardContextProvider>
);
