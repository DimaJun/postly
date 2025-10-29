import type { Preview } from '@storybook/react-webpack5';
import { BrowserRouter } from 'react-router';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
        ThemeDecorator('app_light_theme'),
    ],
};

export default preview;
