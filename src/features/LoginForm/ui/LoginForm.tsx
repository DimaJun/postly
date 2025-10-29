import { classNames } from '@/shared/helpers/classNames/classNames';
import s from './LoginForm.module.scss';

export const LoginForm = () => {
    return <div className={classNames(s.LoginForm, {}, [])}>LoginForm component</div>;
};
