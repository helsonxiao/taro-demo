import React, { Component } from 'react'
import { View } from '@tarojs/components'

import './index.scss'

export class BasicPanel extends Component {

  render () {
    const { title, content } = this.props;

    return (
      <View className='basic-panel'>
        <View className='title'>{title}</View>
        <View className='content'>{content}</View>
      </View>
    )
  }
}

export default BasicPanel
