export type Mods = Record<string, boolean | undefined>;

export function classNames(
    mainClass: string,
    mods: Mods = {},
    additionalClasses: Array<string | undefined> = []
) {
    return [
        mainClass,
        ...Object.entries(mods)
            .filter(([_, value]) => value)
            .map(([key]) => key),
        ...additionalClasses,
    ].join(' ');
}
