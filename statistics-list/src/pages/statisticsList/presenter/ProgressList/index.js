import React from 'react';
import { AutoLayout } from 'zero-element-boot/lib/components';

import layoutJson from './layout';

export default function Index(props) {

    const { data=[] } = props;

    const config = {
        items: data.length > 0 ? data : [],
        layout: layoutJson
    };

    return (
        <div style={{width: '100%'}}>
            <AutoLayout {...config}/>
        </div>
    )
}