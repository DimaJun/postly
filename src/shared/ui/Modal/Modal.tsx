import s from './Modal.module.scss';
import { classNames, Mods } from '@/shared/helpers/classNames/classNames';
import { ReactNode } from 'react';
import { Portal } from '@/shared/ui/Portal';
import { Overlay } from '@/shared/ui/Overlay';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export function Modal(props: ModalProps) {
    const { onClose, isOpen, className, children } = props;

    const mods: Mods = {
        [s.opened]: isOpen,
    };

    if (!isOpen) return null;

    return (
        <Portal renderContainer={document.getElementById('app')}>
            <div className={classNames(s.Modal, mods, [className])}>
                <Overlay onClick={onClose} />
                <div className={s.content}>{children}</div>
            </div>
        </Portal>
    );
}
