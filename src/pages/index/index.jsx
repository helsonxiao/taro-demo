import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import { AtTabBar }  from 'taro-ui'
import 'taro-ui/dist/style/components/tab-bar.scss'

import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>

        <AtTabBar
          tabList={[
            { title: '第一页' },
            { title: '第二页' },
          ]}
          current={0}
          onClick={(index) => {
            if (index === 1) {
              Taro.redirectTo({ url: '/pages/user/index' })
            }
          }}
        />
      </View>
    )
  }
}
