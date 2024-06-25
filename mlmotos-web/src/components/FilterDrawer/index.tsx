import { CustomIcon } from "@components/CustomIcon";
import { Drawer } from "antd";

interface Props {
  onClose: () => void;
  open: boolean;
}

export function FilterDrawer({ onClose, open }: Props) {

  return (
    <Drawer
      title="Filtros"
      onClose={onClose}
      closable={false}
      open={open}
      extra={
        <div onClick={onClose} className='tw-cursor-pointer tw-border tw-rounded-full tw-p-2 tw-flex tw-border-light-gainsboro'>
          <CustomIcon name='IconExit' strokeClassName='tw-stroke-dark-secondary' />
        </div>
      }
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}
