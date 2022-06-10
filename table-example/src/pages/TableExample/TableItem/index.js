import React from 'react';
import { AutoLayout as AutoComponent } from 'zero-element-boot/lib/components';

export default function TableItem(props) {

  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        direction: 'row'
      },
      children: [
        {
          presenter: 'TableCompx',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
              }
            }
          }
        },
      ]
    },
    ...props,
  };

  return (
    <>
      <AutoComponent {...config} />
    </>
  )

}