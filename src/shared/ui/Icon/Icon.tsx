import { FC, memo, SVGProps } from 'react';
import { classNames } from '@/shared/helpers/classNames/classNames';
import s from './Icon.module.scss';

interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string;
    Svg: FC<SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = memo(({ className, Svg, inverted, ...otherProps }: IconProps) => {
    return (
        <Svg
            className={classNames(inverted ? s.inverted : s.Icon, {}, [className])}
            {...otherProps}
        />
    );
});

Icon.displayName = 'Icon';
