import React, { Component } from 'react'
import { View } from '@tarojs/components'

import './index.scss'

export class HOCPanel extends Component {

  render () {
    const { title, children } = this.props;

    return (
      <View className='hoc-panel'>
        <View className='title'>{title}</View>
        <View className='content'>
          {children}
        </View>
      </View>
    )
  }
}

export default HOCPanel
