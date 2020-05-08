/*
 * @Date: 2020-04-03 15:42:05
 * @LastEditors: duanyj
 * @LastEditTime: 2020-04-03 18:38:06
 */
import React, { useState } from 'react';

export default function DemoHooks() {
  const [data, setData] = useState(2);
  console.log('数据', data);

  setTimeout(function() {
    debugger
    setData(5)
  }, 3000);

  return (
    <div>hooks demo 数据：{data}</div>
  )
}