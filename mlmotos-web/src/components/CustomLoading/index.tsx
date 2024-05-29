import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export function CustomLoading() {
  return (
    <Spin size='large' indicator={<LoadingOutlined spin />} style={{ color: '#157C8A'}} />
  )
}