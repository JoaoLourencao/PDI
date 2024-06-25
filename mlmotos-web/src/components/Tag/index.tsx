import { CustomIcon } from "@components/CustomIcon";

interface Props {
  icon?: string;
  color: string;
  textColor: string;
  text: any;
  iconStrokeColor?: string;
  iconFillColor?: string;
  iconRotation?: string;
}

export function Tag({ icon, color, textColor, text, iconStrokeColor, iconFillColor, iconRotation }: Props) {

  return (
    <div className={`tw-rounded-full tw-py-8 tw-px-16 tw-inline-flex tw-items-center tw-justify-center ${color} tw-gap-6`}>
      {icon && <CustomIcon name={icon} strokeClassName={iconStrokeColor} fillClassName={iconFillColor} className={iconRotation} />}
      <p className={`${textColor} tw-text-xs tw-font-semibold`}>{text}</p>
    </div>
  );
}
