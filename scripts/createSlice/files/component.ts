export const componentTsx = (
    name: string
) => `import {classNames} from "@/shared/helpers/classNames/classNames";
import s from './${name}.module.scss';

export const ${name} = () => {
  return (
    <div className={classNames(s.${name}, {}, [])}>
      ${name} component
    </div>
  );
};
`;
