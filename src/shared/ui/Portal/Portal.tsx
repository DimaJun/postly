import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    renderContainer?: HTMLElement;
}

export const Portal = ({ children, renderContainer }: PortalProps) => {
    const container = renderContainer ?? document.body;

    return createPortal(children, container);
};
