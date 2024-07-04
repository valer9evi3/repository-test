import React, { memo } from 'react';
import cls from './RepositoryList.module.scss';
import { RepositoryItem } from '@/shared';

function RepositoryList() {
  const repository = [
    { id: 1, name: 'name', stars: 10, updateDate: '12.12.2022', url: 'url' },
    { id: 2, name: 'name', stars: 10, updateDate: '12.12.2022', url: 'url' },
    { id: 3, name: 'name', stars: 10, updateDate: '12.12.2022', url: 'url' }
  ]

  return (
    <ul className={cls.root}>
      {repository.map((item) => (
        <RepositoryItem key={item.id} />
      ))}
    </ul>
  );
}
export default memo(RepositoryList)