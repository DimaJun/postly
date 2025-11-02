import s from './ListBox.module.scss';
import { Fragment, memo, ReactNode } from 'react';
import { classNames } from '@/shared/helpers/classNames/classNames';
import { Listbox as HListBox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { Button } from '@/shared/ui/Button';

type DropdownDirection = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    className?: string;
    items?: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottomLeft: s.bottomLeft,
    bottomRight: s.bottomRight,
    topLeft: s.topLeft,
    topRight: s.topRight,
};

export const ListBox = memo((props: ListBoxProps) => {
    const {
        value,
        items,
        readonly,
        defaultValue,
        onChange,
        className,
        label,
        direction = 'bottomRight',
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <div className={classNames(s.wrapper, { [s.disabled]: readonly }, [className])}>
            {label && (
                <span className={classNames(s.label, { [s.disabled]: readonly }, [])}>{`${label}>`}</span>
            )}
            <HListBox
                className={classNames(s.ListBox, {}, [])}
                as='div'
                disabled={readonly}
                value={value}
                onChange={onChange}
            >
                <ListboxButton
                    className={s.trigger}
                    disabled={readonly}
                    as={Button}
                >
                    {value ?? defaultValue}
                </ListboxButton>
                <ListboxOptions className={classNames(s.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <ListboxOption
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ selected, focus }) => (
                                <li
                                    className={classNames(
                                        s.item,
                                        {
                                            [s.focus]: focus,
                                            [s.disabled]: item.disabled,
                                            [s.selected]: selected,
                                        },
                                        []
                                    )}
                                >
                                    {item.content}
                                </li>
                            )}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </HListBox>
        </div>
    );
});

ListBox.displayName = 'ListBox';
