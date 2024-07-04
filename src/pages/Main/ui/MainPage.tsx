import React, { memo } from 'react';
import RepositoryList from '../../../widgets/RepositoryList';
import Paginator from '@/widgets/Paginator';
import SearchWidget from '@/widgets/Search';
import cls from './MainPage.module.scss'

function MainPage() {
  return (
    <div className={cls.mainPage}>
      <SearchWidget />
      <RepositoryList />
      <Paginator />
    </div>
  );
}
export default memo(MainPage)