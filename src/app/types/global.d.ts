declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }

    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import React from 'react';

    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __API__: string;

type OptionalRecord<K extends PropertyKey, T> = {
    [P in K]?: T;
};

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;
