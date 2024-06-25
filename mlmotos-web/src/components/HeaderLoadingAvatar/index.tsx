import React from 'react';
import { HeaderUserAvatar } from '../HeaderUserAvatar';
import styles from './styles.module.css';

type HeaderLoadingAvatarProps = {
  menu?: React.ReactNode; // O menu não é usado, então é opcional e pode ser removido se não houver uso futuro planejado.
  image: string;
  name: string;
};

export const HeaderLoadingAvatar: React.FC<HeaderLoadingAvatarProps> = ({ image, name }) => {
  return (
    <div className="tw-flex tw-items-center">
      <div className={`tw-mr-12 tw-w-112 ${styles.skeleton} ${styles.skeletonText}`} />
      <HeaderUserAvatar src={image} alt={name} />
    </div>
  );
};

