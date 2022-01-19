/*
 * @Description: 首页-开/关按钮
 */

import React, { useState } from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import { Block } from '@/components/layout';
import { getThemeType, formatDeviceData, onControlDevice } from '@/business';
import SwipeUnlock from '../unlock/index';
// @ts-ignore
import sdk from 'qcloud-iotexplorer-h5-panel-sdk';
import './index.less';

const themeType = getThemeType();

export function StatusBlock() {
  const history = useHistory();

  // 处理开锁/关锁
  const handleLock = () => {
    onControlDevice('lock_switch', Number(!sdk.deviceData.lock_switch));
  };

  return (
    <>
      {(themeType === 'normal' || themeType === 'colorful') && (
        <Block
          className={classNames(
            'status-block',
            sdk.deviceData.lock_switch === 1 ? 'active' : ''
          )}
          onClick={handleLock}
        >
          <div
            className={classNames(
              sdk.deviceData.lock_switch === 1 ? 'icon-unlock' : 'icon-lock'
            )}
          ></div>
          <p className="status-name">
            {sdk.deviceData.lock_switch === 1 ? '已开锁' : '已关锁'}
          </p>
        </Block>
      )}
      {(themeType === 'dark' || themeType === 'morandi') && (
        <Block
          className={classNames(
            'status-block',
            sdk.deviceData.lock_switch === 1 ? 'active' : ''
          )}
          onClick={handleLock}
        >
          <div
            className={classNames(
              sdk.deviceData.lock_switch === 1 ? 'icon-unlock' : 'icon-lock'
            )}
          ></div>
        </Block>
      )}
      {themeType === 'blueWhite' && (
        <SwipeUnlock success={handleLock} resetClick={handleLock}></SwipeUnlock>
      )}
    </>
  );
}
