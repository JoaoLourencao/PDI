import SvgArrowSidebarRight from '@components/Icons/ArrowSidebarRight';
import { Button } from 'antd';

interface Props {
  onClick?: () => void;
  svg: React.ReactNode
  className?: string
}

const CustomCard = ({ svg, onClick, className }: Props) => {

  return (
    <div >
      <div>
        {svg}
      </div>
      <div>
        <Button onClick={onClick} shape="default" style={{ border: 'none', backgroundColor: '#f9fafa' }}>
          <SvgArrowSidebarRight />
        </Button>
      </div>
    </div>
  );
};

export default CustomCard;
