import React, { Component } from 'react'
import { View, CoverView } from '@tarojs/components'

import './index.scss'

const STEPS = 28; // 共 29 帧，当前在第 1 帧
const STEP_LENGTH = 160; // 每一帧的距离
const FRAME_RATE = 25; // 每一帧停留的时间

export default class Index extends Component {
  state = {
    animated: false, // 利用 css 触发动画
    stepsMoved: 0, // 利用 js 触发动画
  }

  // js 动画位移
  get backgroundPosition() {
    return this.state.stepsMoved * (- STEP_LENGTH)
  }

  // js 动画步进函数
  moveForward = () => {
    this.setState({ stepsMoved: this.state.stepsMoved + 1 })
  }

  // 最粗暴的 setInterval + setTimeout 实现，会受定时器协调影响
  animate = () => {
    const timerId = window.setInterval(() => {
      this.moveForward()
    }, FRAME_RATE)
    window.setTimeout(() => {
      clearInterval(timerId)
    }, FRAME_RATE * STEPS)
  }

  // 略高一筹的纯 setTimeout + requestAnimationFrame 实现
  animateWithFrame = () => {
    const timerId = window.setTimeout(() => {
      if (this.state.stepsMoved < STEPS) {
        this.moveForward();
        clearTimeout(timerId)
      }
      if (this.state.stepsMoved < STEPS - 1) {
        // this.animateWithFrame();
        requestAnimationFrame(this.animateWithFrame);
      }
    }, FRAME_RATE)
  }

  render () {
    return (
      <View className='index'>
        <CoverView
          className={`heart${this.state.animated ? ' animation' : ''}`}
          style={{
            backgroundPosition: `${this.backgroundPosition}rpx`,
          }}
          onClick={() => {
            this.setState({ animated: !this.state.animated });

            // if (this.state.stepsMoved) {
            //   this.setState({ stepsMoved: 0 });
            //   return;
            // }
            // this.animate();
            // this.animateWithFrame();
          }}
        >
        </CoverView>
      </View>
    )
  }
}
