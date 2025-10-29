import { classNames } from '@/shared/helpers/classNames/classNames';
import s from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay = (props: OverlayProps) => {
    const { onClick, className } = props;

    return (
        <div
            className={classNames(s.Overlay, {}, [className])}
            onClick={onClick}
        />
    );
};
