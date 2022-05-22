import {IScrollItemsInfo} from "./IScrollItemsInfo";

export const needScrollRef = (itemsInfo: IScrollItemsInfo) => !itemsInfo.needFetching && itemsInfo.offset <= itemsInfo.totalCount;