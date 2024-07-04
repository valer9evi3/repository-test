import React, { memo } from 'react';
import cls from './Search.module.scss';
import cn from 'classnames';

interface SearchProps { }

export function Search(props: SearchProps) {
  const { } = props;

  return (
    <div className={cls.searchRoot} >
      <input className={cls.searchInput} placeholder='Поиск' />
    </div>
  );
}