import { ReactNode } from "react";

interface Props {
  title: string;
  subtitle: ReactNode;
}

export function PageTitle({ title, subtitle }: Props) {
  return (
    <div className="tw-mb-24">
      <p className="tw-text-2xl tw-font-semibold tw-tracking-[-0.96px] tw-mb-22">{title}</p>
      {subtitle}
    </div>
  );
};

export default PageTitle;
