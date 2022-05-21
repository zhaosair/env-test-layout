import React from 'react';
import { AutoLayout } from 'zero-element-boot/lib/components';

import layoutJson from './layout';

export default function Index(props) {

    const { data=[] } = props;

    const config = {
        items: data.length > 0 ? data : [],
        layout: layoutJson
    };
    
    const onItemClickHandle = (item) => {
        console.log('item == ', item)
    }

    return (
        <AutoLayout {...config} onItemClick={onItemClickHandle} />
    )
}