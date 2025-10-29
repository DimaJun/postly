import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'shared/Button',
    component: Button,
    args: {
        size: 'size_m',
    },
    decorators: [ThemeDecorator('app_dark_theme')],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryM: Story = {
    args: {
        children: 'Button M',
        size: 'size_m',
    },
};

export const PrimaryL: Story = {
    args: {
        children: 'Button M',
        size: 'size_l',
    },
};

export const PrimaryXL: Story = {
    args: {
        children: 'Button M',
        size: 'size_xl',
    },
};

export const PrimarySquare: Story = {
    args: {
        children: '>',
        square: true,
    },
};

export const PrimarySquareL: Story = {
    args: {
        children: '>',
        square: true,
        size: 'size_l',
    },
};

export const PrimarySquareXL: Story = {
    args: {
        children: '>',
        square: true,
        size: 'size_xl',
    },
};

export const Disabled: Story = {
    args: {
        children: '>',
        disabled: true,
    },
};

export const Fullwidth: Story = {
    args: {
        children: '>',
        fullWidth: true,
    },
};

export const Clear: Story = {
    args: {
        children: '>',
        theme: 'clear',
    },
};

export const ClearInverted: Story = {
    args: {
        children: '>',
        theme: 'clearInverted',
    },
};

export const Outline: Story = {
    args: {
        children: '>',
        theme: 'outline',
    },
};

export const OutlineRed: Story = {
    args: {
        children: '>',
        theme: 'outlineRed',
    },
};

export const Background: Story = {
    args: {
        children: '>',
        theme: 'background',
    },
};

export const BackgroundInverted: Story = {
    args: {
        children: '>',
        theme: 'backgroundInverted',
    },
};
