import React, {ForwardedRef, forwardRef, ReactElement} from "react";
import '../../CommonStyles/ScrollStyle.css';
import '../MusicalCollection/MusicalCollection.css';
import {ICollectionItem} from "./ICollectionItem";
import {ScrollDirection} from "./ScrollDirection";

export interface IItemsCollectionProps {
    items: Array<ICollectionItem>,
    scrollDirection: ScrollDirection,
    needSetRef: boolean,
    setChildrenContent: (item: ICollectionItem) => ReactElement;
    className: string,
    childrenClassName: string
}

export const ItemsCollection = forwardRef((props: IItemsCollectionProps, ref: ForwardedRef<HTMLDivElement>) => {
    const scrollStyle = props.scrollDirection === ScrollDirection.Horizontal ? 'horizontalScroll' : 'verticalScroll';

    return <div className={`${props.className} scroll ${scrollStyle}`}> {
        props.items.map((item, index) => (
            <div className={props.childrenClassName} key={item.id}
                 ref={index === props.items.length - 1 && props.needSetRef ? ref : null}>
                {props.setChildrenContent(item)}
            </div>)
        )
    }
    </div>
});

