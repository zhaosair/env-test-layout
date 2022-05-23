import React from 'react';

import { AutoLayout } from 'zero-element-boot';

export default function ItemPlaceholderDemo(props) {

  // const { width='100px' } = props;

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
          presenter: 'Avatar',
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