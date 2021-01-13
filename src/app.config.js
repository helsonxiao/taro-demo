export default {
  pages: [
    'pages/index/index',
    'pages/user/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#fff',
    selectedColor: '#eb735f',
    backgroundColor: '#000',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '短视频',
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
      },
    ],
  },
}
