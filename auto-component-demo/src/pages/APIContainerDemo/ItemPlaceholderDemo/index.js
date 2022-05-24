import React from 'react';

import { AutoLayout } from '@/components';

export default function ItemPlaceholderDemo(props) {

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

  return ( <AutoLayout  {...config} />)

}