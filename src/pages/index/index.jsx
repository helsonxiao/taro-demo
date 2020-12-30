import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtTag } from 'taro-ui'
import 'taro-ui/dist/style/components/tag.scss';

import { BasicPanel, HOCPanel } from '../../components';
import './index.scss'

export default class Index extends Component {

  render () {
    return (
      <View className='index'>
        <BasicPanel
          title='BasicPanel title'
          content='Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ 小程序 / H5 等应用。'
        />

        <HOCPanel title='HOCPanel title'>
          <AtTag type='primary' active circle>推荐</AtTag>
          <Text>
            Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ 小程序 / H5 等应用。
          </Text>
        </HOCPanel>
      </View>
    )
  }
}
