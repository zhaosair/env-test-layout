import React from 'react';

import { AutoLayout, APIContainer } from 'zero-element-boot';

export default function AutoComponentDemo(props) {

  const api = '/api/detailData';

  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
          align: 'start',
          direction: 'row',
          justify: 'center'
      },
      children: [
        {
          presenter: 'ItemPlaceholder',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                width: 'width'
              }
            }
          }
        }
      ]
    },
    ...props,
  };

  return ( 
    <APIContainer API={api} extend={true}>
        <AutoLayout  {...config} />
    </APIContainer>
  )
}