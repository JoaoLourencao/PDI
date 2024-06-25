import { CustomArrowNavigation } from "@components/CustomArrowNavigation";
import { CustomIcon } from "@components/CustomIcon";
import { useDarkMode } from "@hooks/context/darkModeContext";
import { useRouter } from "next/router";

interface Props {
  prevRef?: any;
  nextRef?: any;
  category?: any;
  product?: any;
  isSkeleton?: boolean;
  hasNavigation?: boolean;
  hasRedirect?: boolean;
}

export function CustomTitleBestSellers({ prevRef, nextRef, category, hasNavigation = false, hasRedirect = true }: Props) {
  const { ds_categoria, id_categoria } = category;
  const { darkMode } = useDarkMode();
  const router = useRouter();
  const seeMoreButton = darkMode ? 'tw-text-dark-primary-blue' : 'tw-text-light-primary';
  const iconArrowColor = darkMode ? 'tw-stroke-dark-primary-blue' : 'tw-stroke-light-primary';

  return (
    <>
      {category && <>
        <div className='tw-justify-between tw-mb-16 tw-pr-42 tw-items-center tw-hidden lg:tw-flex tw-cursor-pointer'>
          <div className='tw-flex tw-flex-row tw-gap-16' onClick={() => hasRedirect && router.push(`${router.asPath}/categoria/${id_categoria}`)}>
            <p className='tw-text-xl tw-font-semibold'>{ds_categoria}</p>
            {hasNavigation && <div className={`${seeMoreButton} tw-flex tw-items-center tw-cursor-pointer`}>
              <p className="tw-font-semibold tw-text-sm">Ver Mais</p>
              <CustomIcon strokeClassName={iconArrowColor} name='IconArrowStroke' className="tw-ml-10 tw-rotate-180" />
            </div>}
          </div>
          {hasNavigation && <CustomArrowNavigation prevRef={prevRef} nextRef={nextRef} />}
        </div>

        <div className='tw-cursor-pointer tw-flex lg:tw-hidden tw-justify-between tw-mb-16 tw-pr-24 tw-items-center' onClick={() => hasRedirect && router.push(`${router.asPath}/categoria/${id_categoria}`)}>
          <div className='tw-flex tw-flex-row tw-gap-16 '>
            <p className='tw-text-base tw-font-semibold'>{ds_categoria}</p>
          </div>
          {hasRedirect && <CustomIcon strokeClassName={iconArrowColor} name='IconCompleteArrow' />}
        </div>
      </>}
    </>
  )
}
