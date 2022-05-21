import React, { useState, useEffect } from 'react';

import StatisticsList from './index';

import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';

import bindFiles from './gateway.json';

export default function (props) {

  let api = '/x/api/statistics';

    function onItemClickHandle (data) {
        // console.log('data = ', data)
    }

    const [ data ] = useTokenRequest({api, bindFiles});
    
    return (
          data ? (
            <StatisticsList {...props} data={data}/>
          ):<div></div>
    )
}