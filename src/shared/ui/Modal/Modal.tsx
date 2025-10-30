import s from './Modal.module.scss';
import { classNames, Mods } from '@/shared/helpers/classNames/classNames';
import { ReactNode } from 'react';
import { useTransition, animated } from '@react-spring/web';
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
    const transitions = useTransition(isOpen, {
        from: { opacity: 0, scale: 0.8 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0.8 },
        config: { tension: 200, friction: 20, mass: 1 },
    });

    const mods: Mods = {
        [s.opened]: isOpen,
    };

    // if (!isOpen) return null;

    return transitions(
        (style, item) =>
            item && (
                <Portal renderContainer={document.getElementById('app')}>
                    <animated.div
                        className={classNames(s.Modal, mods, [className])}
                        style={{ opacity: style.opacity }}
                    >
                        <Overlay onClick={onClose} />
                        <animated.div
                            className={s.content}
                            style={style}
                        >
                            {children}
                        </animated.div>
                    </animated.div>
                </Portal>
            )
    );
}
