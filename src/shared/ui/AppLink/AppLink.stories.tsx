import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
        to: '/',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Text',
        to: '/',
        theme: 'secondary',
    },
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator('app_dark_theme')],
    args: {
        children: 'Text',
        to: '/',
    },
};

export const SecondaryDark: Story = {
    decorators: [ThemeDecorator('app_dark_theme')],
    args: {
        children: 'Text',
        to: '/',
        theme: 'secondary',
    },
};
