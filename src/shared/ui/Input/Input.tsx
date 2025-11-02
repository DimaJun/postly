import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import s from './Input.module.scss';
import { classNames, Mods } from '@/shared/helpers/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string | number) => void;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        readonly,
        autofocus,
        onChange,
        value,
        className,
        type = 'text',
        placeholder,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const isCaretVisible = isFocused && !readonly;

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: ChangeEvent<HTMLInputElement>) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    const mods: Mods = {
        [s.readonly]: readonly,
    };

    return (
        <div className={classNames(s.InputWrapper, mods, [className])}>
            {placeholder && <div className={s.placeholder}>{`${placeholder}>`}</div>}
            <div className={s.caretWrapper}>
                <input
                    className={s.input}
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCaretVisible && (
                    <span
                        className={s.caret}
                        style={{
                            left: `${caretPosition * 9}px`,
                        }}
                    />
                )}
            </div>
        </div>
    );
});

Input.displayName = 'Input';
