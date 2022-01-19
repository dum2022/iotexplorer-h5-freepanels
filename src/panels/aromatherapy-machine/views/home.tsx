/*
 * @Author: wrq
 * @Date: 2021-09-22 21:24:21
 * @Description: 首页
 */
import React from 'react';
import { getThemeType } from '@/business';
import {
  NormalHome,
  BlueHome,
  DarkHome,
  ColorfulHome,
  MorandiHome
} from '../components/index';
import './home.less';

const themeType = getThemeType();

export function Home() {
  const renderChooseBySkin = () => {
    switch (themeType) {
      case 'normal':
        return <NormalHome></NormalHome>;
      case 'blueWhite':
        return <BlueHome></BlueHome>;
      case 'dark':
        return <DarkHome></DarkHome>;
      case 'colorful':
        return <ColorfulHome></ColorfulHome>;
      case 'morandi':
        return <MorandiHome></MorandiHome>;
    }
  };

  return renderChooseBySkin();
}
