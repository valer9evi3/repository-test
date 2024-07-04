import { useMemo } from "react";
import cls from './Paginator.module.scss';
import cn from 'classnames';

interface PaginatorProps {
  pagesCount: number,
  currentPage: number,
  onClick: (page: number) => void;
}

export function Paginator(props: PaginatorProps) {

  const { pagesCount, currentPage, onClick } = props;

  const pages = useMemo(() => {
    const pages = [];
    for (let i = 0; i < pagesCount; i++) {
      pages.push(i + 1)
    }
    return pages
  }, [pagesCount])

  return (
    <div className={cls.paginator}>
      [{
        pages.map(page => (
          <div
            role="button"
            className={cn(cls.block, page === currentPage ? cls.current : cls.primary)}
            key={page}
            onClick={() => { page === currentPage ? undefined : onClick(page) }}
          >
            {page}
          </div>
        ))
      }]
    </div >
  )
}