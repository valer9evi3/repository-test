import React, { memo, useEffect, useState } from 'react';
import RepositoryList from '../../../widgets/RepositoryList';
import Paginator from '@/widgets/Paginator';
import SearchWidget from '@/widgets/Search';
import cls from './MainPage.module.scss'
import { getApiWithParams } from '@/shared';


function MainPage() {
  const [repository, setRepository] = useState<any>([]);

  useEffect(() => {
    getApiWithParams({ cursor: null }).then(
      (result) => {
      }
    )
  }, [])

  return (
    <div className={cls.mainPage}>
      <SearchWidget />
      <RepositoryList />
      <Paginator />
    </div>
  );
}
export default memo(MainPage)