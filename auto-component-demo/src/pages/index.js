import React from 'react';
import PageCart from 'zero-element-boot/lib/components/cart/PageCart'

import AutoComponentDemo from './AutoComponentDemo';

export default function index (props) {

  return (
      <PageCart padding="20px">
        <AutoComponentDemo width="100px" />
      </PageCart>
  )
}