import { Paginator } from '@/shared';
import React, { memo } from 'react';

interface PaginatorWidgetProps { }

function PaginatorWidget(props: PaginatorWidgetProps) {
  const { } = props;
  return (
    <Paginator pagesCount={10} currentPage={5} onClick={(page) => console.log(page)} />
  );
}

export default memo(PaginatorWidget)