import { useDarkMode } from '@hooks/context/darkModeContext';
import { Dropdown } from 'antd';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { HeaderLoadingAvatar } from '../HeaderLoadingAvatar';
import { HeaderUserAvatar } from '../HeaderUserAvatar';
import { CustomMenu } from './components/CustomMenu';

type PersonData = {
  primaryEmail: string;
  photo: string;
  givenName: string;
}

type Props = {
  personData: PersonData | null;
}

export function HeaderUserCard({ personData }: Props) {
  const router = useRouter();
  const { darkMode } = useDarkMode();

  const cardStyles = useMemo(() => ({
    headerText: "tw-text-dark-secondary"
  }), [darkMode]);

  const [isOpen, setIsOpen] = useState(false);

  const baseClass = 'tw-rounded-full';
  const color = darkMode ? 'tw-border-[#E5E9ED]' : 'tw-border-[#157C8A]';
  const colorSecondary = darkMode ? 'tw-border-[#E5E9ED33]' : 'tw-border-[#157C8A33]';

  const className1 = isOpen ? `tw-border-4 ${colorSecondary} ${baseClass}` : ''
  const className2 = isOpen ? `tw-border-2 ${color} ${baseClass}` : ''

  if (!personData) {
    return <HeaderLoadingAvatar image={personData.photo} name={personData.givenName} />;
  }

  const { primaryEmail, photo, givenName } = personData;

  const menu = <CustomMenu profile={personData} />

  return (
    <>
      <Dropdown overlay={menu} trigger={['click']} className='tw-cursor-pointer tw-hidden md:tw-flex' onOpenChange={setIsOpen}>
        <div className="tw-flex tw-items-center">
          <div className="tw-mr-12">
            <h3 className={`${cardStyles.headerText} tw-leading-normal tw-text-base tw-font-semibold`}>{givenName}</h3>
          </div>
          <div className={className1}>
            <div className={className2}>
              <HeaderUserAvatar src={photo} alt={givenName} isOpen={isOpen} />
            </div>
          </div>
        </div>
      </Dropdown>
      <Dropdown overlay={menu} trigger={['click']} className='tw-cursor-pointer tw-block md:tw-hidden tw-m-24' onOpenChange={setIsOpen}>
        <div className="tw-flex tw-items-center tw-flex-col tw-gap-6">
          <div className={className1}>
            <div className={className2}>
              <HeaderUserAvatar src={photo} alt={givenName} isOpen={isOpen} />
            </div>
          </div>
          <div>
            <h3 className={`${cardStyles.headerText} tw-leading-normal tw-text-base tw-font-semibold`}>{givenName}</h3>
          </div>
          <div>
            <p className='tw-text-xs tw-font-medium tw-text-light-slate-gray'>{primaryEmail}</p>
          </div>
        </div>
      </Dropdown>
    </>
  );
}
