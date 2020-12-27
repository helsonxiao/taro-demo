import React from 'react'
import { CoverView, Video, View } from '@tarojs/components'
import './wideo.scss'

export default class Wideo extends React.Component {
  render() {
    const { id, src, muted, isFav, onFav } = this.props

    return (
      <View style={{ position: 'relative' }}>
        <Video id={id} src={src} muted={muted} controls={false} />
        <CoverView
          className={`heart${isFav ? ' animated' : ''}`}
          onClick={() => {
            onFav?.(!isFav)
          }}
        >
        </CoverView>
      </View>
    )
  }
}
