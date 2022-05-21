export interface IScrollItemsInfo {
    needFetching: boolean,
    offset: number,
    totalCount: number,
}

export const needScrollRef = (itemsInfo: IScrollItemsInfo) => !itemsInfo.needFetching && itemsInfo.offset <= itemsInfo.totalCount;