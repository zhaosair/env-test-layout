import React from 'react';

import ItemPlaceholderDemo from './ItemPlaceholderDemo';

import { APIContainer, NamedCart } from 'zero-element-boot';

export default function (props) {

    const api = '/api/detailData';

    return (
            
        <APIContainer API={api} extend={true}>
            <NamedCart xname="PageCart" props={{ padding: "20px" }}>
                <ItemPlaceholderDemo />
            </NamedCart>
        </APIContainer>
    )
}