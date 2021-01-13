import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import { AtTabBar }  from 'taro-ui'
import 'taro-ui/dist/style/components/tab-bar.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>第二个页面!</Text>

        <AtTabBar
          tabList={[
            { title: '第一页' },
            { title: '第二页' },
          ]}
          current={1}
          onClick={(index) => {
            if (index === 0) {
              Taro.redirectTo({ url: '/pages/index/index' })
            }
          }}
        />
      </View>
    )
  }
}
