import React from 'react';

import { NamedCart } from 'zero-element-boot';
import ItemPlaceholderDemo from './ItemPlaceholderDemo';

export default function Index (props) {

  // PageCart 可自由更换
  return (
    <NamedCart xname="PageCart" props={{ padding: "20px" }}>
      {/* 自定义 组件, 组件定义的参数，传参方式可参看如下例子 */}
        <ItemPlaceholderDemo width="100px" />
    </NamedCart>
  )
  

}