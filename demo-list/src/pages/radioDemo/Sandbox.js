import React, { useState, useEffect } from 'react';

import RadioContainer from './index';

import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';

import bindFiles from './gateway.json'

export default function (props) {

    const api = '/api/radioData';

    const [ data ] = useTokenRequest({api, bindFiles});

    if(data){
        data.map(item => {
            item.checked = false;
            return item;
        })
    }

    return (
        <div style={{width: '600px', background:'white'}}>
            <RadioContainer {...props} data={data}/>
        </div>
    )
}