import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { Swiper, SwiperItem } from '@tarojs/components'
import Wideo from '../../components/wideo';

import './index.scss'

const videoContextMap = {};

const videos = [
  {
    id: 'v-bear',
    isFav: false,
    src: 'http://storage.jd.com/cjj-pub-images/bear.mp4',
  },
  {
    id: 'v-277004',
    isFav: false,
    src: 'https://v-cdn.zjol.com.cn/277004.mp4',
  },
];

export default class Index extends Component {
  state = {
    videos,
  }

  componentDidMount() {
    videos.forEach((video, index) => {
      videoContextMap[index] = Taro.createVideoContext(video.id);
      if (index === 0) {
        videoContextMap[index].play()
      }
    });
  }

  render() {
    return (
        <Swiper
          vertical
          circular={false}
          onChange={(e) => {
            Object.keys(videoContextMap).forEach((k) => {
              if (e.detail.current === k) return;
              videoContextMap[k].stop();
            });
            videoContextMap[e.detail.current].play();
          }}
        >
          {this.state.videos.map((v, index) => (
            <SwiperItem key={index}>
              <Wideo
                id={v.id}
                src={v.src}
                muted
                isFav={v.isFav}
                onFav={(isFav) => {
                  const newVideo = Object.assign({}, v);
                  newVideo.isFav = isFav;
                  this.state.videos.splice(index, 1, newVideo);
                  this.setState({ videos: this.state.videos });
                }}
              />
            </SwiperItem>
          ))}
        </Swiper>
    )
  }
}
