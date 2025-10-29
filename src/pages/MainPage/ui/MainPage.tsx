import { classNames } from '@/shared/helpers/classNames/classNames';
import s from './MainPage.module.scss';
import { Page } from '@/shared/ui/Page';

const MainPage = () => {
    return <Page className={classNames(s.MainPage, {}, [])}>MainPage component</Page>;
};

export default MainPage;
