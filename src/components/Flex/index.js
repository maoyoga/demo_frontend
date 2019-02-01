import React, { Component } from 'react';
import styles from './index.module.css'
console.log(styles)
class Flex extends Component {
  render() {
		return (
      <React.Fragment>
        <h2>flex-shink实现横向滚动条</h2>
        <ul>
          <li>test1</li>
          <li>test22</li>
          <li>test233</li>
          <li>test2444</li>
          <li>test22</li>
          <li>test2</li>
          <li>test2</li>
        </ul>
        <a href='https://www.zhangxinxu.com/wordpress/2018/10/display-flex-css3-css/#flex-shrink'>原理：设置每个项目flex-shink：0表示不收缩</a>
        <h2>flex垂直居中</h2>
        <div className={styles.middleWrapper}>
          <div className={styles.middleContent}>我是内容</div>
        </div>
      </React.Fragment>
		)
	}
}

export default Flex