import React, { memo } from 'react';
import cls from './RepositoryItem.module.scss';

interface RepositoryItemProps { }

export function RepositoryItem(props: RepositoryItemProps) {
  const { } = props;
  return (
    <li className={cls.item} >
      <div>name</div>
      <div>stars</div>
      <div>updateDate</div>
      <div>URL</div>
    </li>
  );
}