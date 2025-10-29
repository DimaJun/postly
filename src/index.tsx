import { createRoot } from 'react-dom/client';
import '@/app/styles/main.scss';
import { App } from '@/app/App';
import { ThemeProvider } from '@/app/providers/ThemeProvider/ThemeProvider';
import { BrowserRouter } from 'react-router';
import i18n from '@/shared/config/i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';

const container = document.getElementById('root');

if (!container) {
    throw new Error('No root container to render');
}

createRoot(container).render(
    <ErrorBoundary>
        <I18nextProvider
            i18n={i18n}
            defaultNS={'translation'}
        >
            <BrowserRouter>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </I18nextProvider>
    </ErrorBoundary>
);
