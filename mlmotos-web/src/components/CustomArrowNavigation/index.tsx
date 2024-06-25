import { CustomIcon } from "@components/CustomIcon";
import { useDarkMode } from "@hooks/context/darkModeContext";
import { Button } from "antd";
import { RefObject, useMemo } from "react";

interface Props {
  prevRef: RefObject<HTMLButtonElement>;
  nextRef: RefObject<HTMLButtonElement>;
}

export function CustomArrowNavigation({ prevRef, nextRef }: Props) {
  const { darkMode } = useDarkMode();

  const buttonClassName = useMemo(() => ({
    buttonColor: darkMode ? "tw-bg-dark-onyx tw-border-none" : "tw-border-[#E5E9ED]",
    iconColor: darkMode ? "tw-stroke-dark-secondary" : "tw-stroke-light-secondary",
  }), [darkMode]);

  return (
    <div className='tw-flex tw-gap-10'>
      <Button
        className={`${buttonClassName.buttonColor} tw-rounded-[10px] disabled:tw-bg-opacity-50`}
        icon={<CustomIcon name="IconArrowStroke" strokeClassName={buttonClassName.iconColor} />}
        ref={prevRef}
        aria-label="Anterior"
      />
      <Button
        className={`${buttonClassName.buttonColor} tw-rounded-[10px] tw-rotate-180 disabled:tw-bg-opacity-50`}
        icon={<CustomIcon name="IconArrowStroke" strokeClassName={buttonClassName.iconColor} />}
        ref={nextRef}
        aria-label="Próximo"
      />
    </div>
  );
};
