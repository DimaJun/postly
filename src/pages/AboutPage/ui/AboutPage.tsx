import { classNames } from '@/shared/helpers/classNames/classNames';
import s from './AboutPage.module.scss';
import { Page } from '@/shared/ui/Page';

const AboutPage = () => {
    return <Page className={classNames(s.AboutPage, {}, [])}>AboutPage component</Page>;
};

export default AboutPage;
