import React, { useState, useEffect } from 'react';

import DemoList from './index';

import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';

export default function (props) {

  let api = '/api/crud/fieldModel/fieldModels'

  const [data] = useTokenRequest({ api });

  const records = data && data.records;

  const dataX = []
  dataX.push({ items: records })

  return (
    records && records.length > 0 ? (
      <DemoList {...props} data={dataX} />
    ) : <></>
  )
}