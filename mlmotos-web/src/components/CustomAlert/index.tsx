import { CustomIcon } from '@components/CustomIcon';
import { useDarkMode } from '@hooks/context/darkModeContext';
import { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';

export interface AlertProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose: () => void;
}

export function Alert({ type = 'success', message, duration = 5000, onClose }: AlertProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { darkMode } = useDarkMode();

  const drawerStyles = useMemo(() => ({
    exitIconFillColor: darkMode ? 'tw-fill-dark-secondary' : 'tw-fill-dark-secondary',
    exitBorderColor: darkMode ? 'tw-bg-dark-onyx tw-border-transparent' : 'tw-border-transparent tw-bg-dark-onyx',
  }), [darkMode]);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 500); // Match the leave transition duration
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);


  return ReactDOM.createPortal(
    <div
      className={`tw-fixed tw-top-12 tw-right-12 tw-z-50 tw-transition-transform tw-transform ${isVisible ? 'tw-translate-y-0 tw-opacity-100' : 'tw--translate-y-4 opacity-0'
        }`}
    >
      <div className="tw-bg-dark-woodsmoke tw-text-white tw-p-24 tw-rounded tw-flex tw-items-center tw-gap-12">
        <div className={`tw-h-12 tw-w-12 tw-rounded-[3px] ${type === 'success' ? 'tw-bg-dark-success' : type === 'error' ? 'tw-bg-dark-error' : type === 'warning' ? 'tw-bg-dark-warning' : 'tw-bg-dark-primary-blue'}`} />
        <p className='tw-text-sm tw-font-semibold'>{message}</p>
        <div onClick={onClose} className={`tw-cursor-pointer tw-border tw-rounded-full tw-p-2 tw-flex ${drawerStyles.exitBorderColor}`}>
          <CustomIcon name='IconClose' fillClassName={drawerStyles.exitIconFillColor} />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Alert;
