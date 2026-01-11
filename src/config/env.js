// src/config/env.js

export const ENV = {
  admob: {
    appId: 'ca-app-pub-3781718251647447~8945014239',
    bannerUnitId: 'ca-app-pub-3781718251647447/7472150463'
  },
  agora: {
    appId: 'e112f875ec9c4db58b6aeab87b7a21331',
    certificate: '85572829fa704a7ab6d69f08d35206e0',
    // base token server (without params)
    tokenServerBaseUrl: 'https://agora-node-tokenserver-1.onrender.com/',
    // ready-made URL for default channel "Synce"
    defaultTokenUrl:
      'https://agora-node-tokenserver-7ivo.onrender.com/rtcToken?channelName=Synce'
  },
  backend: {
    baseUrl: 'https://YOUR-BACKEND-ON-RENDER.com'
  }
};