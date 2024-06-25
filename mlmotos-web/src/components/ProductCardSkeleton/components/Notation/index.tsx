import { IconStar } from "@components/Icons";
import { useDarkMode } from "@hooks/context/darkModeContext";

export function Notation({ topOne, index }) {
  const { darkMode } = useDarkMode();
  const notationColors = darkMode ? 'tw-bg-dark-onyx tw-text-white' : 'tw-bg-light-secondary tw-text-white';

  return (
    <>
      {topOne ?
        <>
          <div className='tw-gap-6 tw-absolute tw-flex tw-items-center tw-justify-center tw-h-32 tw-w-[144px] tw-bg-stars-background tw-text-white tw-rounded-sm tw-z-[999] tw-top-8 tw-left-8'>
            <IconStar />
            <p className='tw-text-xs tw-font-semibold'>{topOne}</p>
          </div>
        </>
        :
        <>
          <div className={`${notationColors} tw-absolute tw-h-32 tw-w-32 tw-rounded-sm tw-text-center tw-content-center tw-z-[999] tw-top-8 tw-left-8`}>
            <span>{index}</span>
          </div>
        </>
      }
    </>
  );
}
