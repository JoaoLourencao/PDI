import { useDarkMode } from '@hooks/context/darkModeContext';
import { Col, Row } from 'antd';
import { useMemo } from 'react';


export function ProductCardSkeleton() {
  const { darkMode } = useDarkMode();

  const cardStyles = useMemo(() => ({
    cardColor: darkMode ? 'tw-bg-dark-shark' : 'tw-bg-white',
    loadingColor: darkMode ? 'tw-bg-dark-charleston-green' : 'tw-bg-light-shark',
  }), [darkMode]);

  return (
    <div className={`${cardStyles.cardColor} tw-rounded-lg tw-shadow-md tw-max-w-[330px] md:tw-max-w-sm tw-relative tw-border tw-border-transparent tw-select-none tw-p-24`}>
      <Row gutter={[16, 16]}>
        <div className={`tw-animate-pulse ${cardStyles.loadingColor} tw-absolute tw-h-20 tw-w-62 tw-rounded-sm tw-text-center tw-content-center tw-z-[999] tw-top-16 tw-left-16`} />
        <Col span={24}>
          <div className={`tw-animate-pulse tw-rounded-sm ${cardStyles.loadingColor} tw-w-42 tw-h-20 tw-mb-4 tw-float-end`} />
        </Col>
        <Col span={12}>
          <div className={`tw-animate-pulse tw-rounded-sm ${cardStyles.loadingColor} tw-w-[116px] tw-h-[88px]`} />
        </Col>
        <Col span={12}>
          <div className='tw-flex tw-flex-col tw-justify-end tw-float-right tw-animate-pulse'>
            <div className={`tw-rounded-sm ${cardStyles.loadingColor} tw-w-90 tw-h-20 tw-mb-12`} />
            <div className={`tw-rounded-sm ${cardStyles.loadingColor} tw-w-90 tw-h-20 tw-mb-12`} />
            <div className={`tw-rounded-sm ${cardStyles.loadingColor} tw-w-90 tw-h-20`} />
          </div>
        </Col>
        <Col span={24} className='tw-mt-36 tw-animate-pulse'>
          <div className={`tw-rounded-sm ${cardStyles.loadingColor} tw-w-full tw-h-20 tw-mb-12`} />
          <div className={`tw-rounded-sm ${cardStyles.loadingColor} tw-w-70% tw-h-20 tw-mb-52`} />
        </Col>
        <Col span={12} className='tw-animate-pulse'>
          <div className={`tw-rounded-sm ${cardStyles.loadingColor} tw-w-50% tw-h-20 tw-mb-4`} />
        </Col>
        <Col span={12} className='tw-animate-pulse'>
          <div className={`tw-rounded-sm ${cardStyles.loadingColor} tw-w-full tw-h-20 tw-mb-4`} />
        </Col>
        <Col span={24} className='tw-animate-pulse'>
          <div className={`tw-rounded-sm ${cardStyles.loadingColor} tw-w-full tw-h-182`} />
        </Col>
      </Row>
    </div>
  );
}
