import React from 'react';
import Paginate, {ReactPaginateProps} from 'react-paginate'
import s from './Paginator.module.css'


export type OnPageChangeCallback = ReactPaginateProps['onPageChange']

type PaginationPropsType = {
	currentPage: number
	pageCount: number
	pageSize: number
	onPageChange?: OnPageChangeCallback
}

export const Pagination = ({
														 currentPage,
														 pageCount,
														 onPageChange,
														 pageSize,
													 }: PaginationPropsType) => {
	return (
		<div className={s.pagination}>
			<Paginate
				forcePage={currentPage - 1}
				pageCount={pageCount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={pageSize}
				onPageChange={onPageChange}
				nextLabel="&rarr;"
				previousLabel="&larr;"
			/>
		</div>
	)
}