import React from 'react';

type PaginatorPropsType = {
    getUsers: (n: number, m: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export const Paginator = ({getUsers, totalUsersCount,pageSize, currentPage}: PaginatorPropsType) => {
    const onPageChanged = (n: number) => getUsers(n, pageSize)
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    return (
        <div>
            <span>This is {currentPage} page. </span><br/>
            <span>Select page from 1 to {pagesCount}</span>
            <input type={'number'}
                   max={pagesCount}
                   min={1} onChange={(e) => onPageChanged(+e.target.value)}
            /> max = {pagesCount}
        </div>
    );
}