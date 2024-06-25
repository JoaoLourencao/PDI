import { StarFilled } from '@ant-design/icons';
import { CustomIcon } from '@components/CustomIcon';
import { useDarkMode } from '@hooks/context/darkModeContext';
import { renderProductValue } from '@utils/renderProductValue';
import { Col, Divider, Dropdown, Image, Row, Tooltip } from 'antd';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Notation } from './components/Notation';
import { Reports } from './components/Reports';
import styles from './styles.module.css';

interface Props {
  product: any;
  index: number;
  platform: any;
}

export function ProductCard({ product, index, platform }: Props) {
  const { darkMode } = useDarkMode();
  const [isOpenPeriod, setIsOpenPeriod] = useState(false);
  const [selectedReport, setSelectedReport] = useState({ key: '1', text: 'Avaliações', type: 'perRate' });
  const { id, nr_posicao_ranking, tp_moeda, relatorios, nm_marca, nm_produto, qt_total_avaliacao, qt_total_comentario, vr_produto, vr_media_avaliacao, id_novo, ds_link_foto, ds_msg_hist_ranking } = product;

  const cardStyles = useMemo(() => ({
    cardColor: darkMode ? 'tw-bg-dark-shark' : 'tw-bg-white',
    rateBg: darkMode ? 'tw-bg-[#302D28] tw-text-dark-ginger' : 'tw-bg-light-early-dawn tw-text-light-ginger',
    starColor: darkMode ? '#FCD386' : '#FFC107',
    primaryColor: darkMode ? 'tw-text-dark-secondary' : 'tw-text-light-secondary',
    secondaryColor: darkMode ? 'tw-text-dark-oslo-gray' : 'tw-text-light-slate-gray',
    dropdownBg: darkMode ? 'tw-bg-dark-onyx' : 'tw-bg-white',
    dropdownBorder: darkMode ? 'tw-border-transparent' : 'tw-border-light-gainsboro',
    dropdownActiveBorder: darkMode ? 'tw-border-dark-primary-blue tw-text-dark-primary-blue tw-shadow-3xl' : 'tw-border-light-primary tw-text-light-primary tw-shadow-3xl',
    dropdownArrow: darkMode ? 'tw-stroke-dark-secondary' : 'tw-stroke-light-secondary',
    dropdownActiveArrow: darkMode ? 'tw-stroke-dark-primary-blue' : 'tw-stroke-light-primary',
    cardBorderHover: darkMode ? 'hover:tw-border-dark-primary-blue' : 'hover:tw-border-light-primary',
    selectedTextButtonColors: darkMode ? 'tw-text-dark-primary-blue' : 'tw-text-light-primary',
  }), [darkMode]);

  const options = [
    { key: '1', text: 'Avaliações', type: 'perRate' },
    { key: '2', text: 'Sentimento', type: 'perFeeling' },
    { key: '3', text: 'Preço médio', type: 'perPrice' },
  ];

  const handleMenuClick = (e) => {
    const selectedOption = options.find(option => option.key === e.key);
    setSelectedReport(selectedOption);
  };

  const menuItems = options.flatMap((option, index) => {
    const items = [
      {
        key: option.key,
        label: (
          <p className={`tw-text-sm tw-font-semibold tw-p-16 ${selectedReport && selectedReport.key === option.key ? cardStyles.selectedTextButtonColors : 'tw-text-light-slate-gray'}`}>
            {option.text}
          </p>
        ),
      }
    ];
    if (index < options.length - 1) {
      items.push({
        type: 'divider',
      });
    }
    return items;
  });

  const menu = {
    items: menuItems,
    onClick: handleMenuClick,
    className: `${styles.menuCardUsers} ${cardStyles.cardColor}`,
  };

  return (
    <div className={`${cardStyles.cardColor} tw-cursor-pointer tw-rounded-lg tw-shadow-md tw-max-w-[330px] tw-h-[600px] md:tw-max-w-sm tw-relative tw-border tw-border-transparent hover:tw-border ${cardStyles.cardBorderHover} tw-select-none hover:tw-shadow-3xl`}>
      <Notation topOne={ds_msg_hist_ranking} index={nr_posicao_ranking} />
      <Row className='tw-p-24 tw-items-center'>
        <Col span={12}>
          <div className={`${useDarkMode && 'tw-bg-white tw-px-16 tw-py-16 tw-rounded-sm'} tw-my-4 tw-flex tw-justify-center`}>
            <Image preview={false} className='tw-max-h-112 tw-max-w-112' src={ds_link_foto} alt={nm_produto} />
          </div>
        </Col>
        <Col span={12} className='tw-text-right tw-items-end tw-flex tw-flex-col'>
          <div className={`${cardStyles.rateBg} tw-rounded-full tw-py-4 tw-px-12 tw-flex tw-flex-row tw-gap-6 tw-w-[61px] tw-h-[24px] tw-mb-12 tw-items-center`}>
            <StarFilled style={{ color: cardStyles.starColor }} />
            <p className="tw-text-xs tw-font-semibold">{parseFloat(vr_media_avaliacao)}</p>
          </div>
          <div className={cardStyles.secondaryColor}>
            <p className="tw-text-xs tw-font-medium tw-mb-4">{qt_total_avaliacao} avaliações</p>
            <p className="tw-text-xs tw-font-medium tw-mb-16">{qt_total_comentario} comentários</p>
          </div>
          {renderProductValue(tp_moeda, vr_produto)}
        </Col>
      </Row>
      <Divider className='tw-my-0' />
      <Row className='tw-p-24'>
        <Col span={24} className='tw-mb-12'>
          <Tooltip title={nm_produto} placement='top'>
            <Link href={`/tendencias/${platform?.name}/mais-vendidos/produto/${id}`} className={`tw-text-base tw-font-semibold tw-line-clamp-2 hover:tw-underline ${darkMode ? 'hover:tw-text-dark-primary-blue' : 'hover:tw-text-light-primary'}`}>{nm_produto}</Link>
          </Tooltip>
        </Col>
        <Col span={24}>
          {id_novo === 'S' ? (
            <div className='tw-flex tw-justify-between tw-items-center'>
              <span className={`${cardStyles.secondaryColor} tw-text-xs tw-font-medium`}>{nm_marca}</span>
              <div className='tw-bg-emerald-800 tw-rounded-full tw-py-4 tw-px-12'>
                <span className='tw-text-white tw-text-xs tw-font-semibold'>Produto novo</span>
              </div>
            </div>
          ) : (
            <div className='tw-py-4'>
              <span className={`${cardStyles.secondaryColor} tw-text-xs tw-font-medium`}>{nm_marca}</span>
            </div>
          )}
        </Col>
      </Row>
      <Divider className='tw-my-0' />
      <Row className='tw-p-24'>
        <Col span={24}>
          <div className='tw-flex tw-justify-between tw-items-center'>
            <div>
              <p className='tw-text-base tw-font-semibold'>Relatórios</p>
              <p className={`${cardStyles.secondaryColor} tw-text-xs tw-font-medium`}>Últimos 6 meses</p>
            </div>
            <Dropdown menu={menu} trigger={['click']} className='tw-cursor-pointer' onOpenChange={setIsOpenPeriod}>
              <div className={`${cardStyles.dropdownBg} tw-flex tw-flex-row tw-items-center tw-rounded-[10px] tw-px-12 tw-py-8 tw-border tw-gap-20 ${isOpenPeriod ? cardStyles.dropdownActiveBorder : cardStyles.dropdownBorder}`}>
                <p className='tw-text-xs tw-font-semibold'>{selectedReport ? selectedReport.text : 'Selecione uma opção'}</p>
                <CustomIcon name="IconArrowStroke" className="tw-rotate-[270deg]" strokeClassName={isOpenPeriod ? cardStyles.dropdownActiveArrow : cardStyles.dropdownArrow} />
              </div>
            </Dropdown>
          </div>
        </Col>
        <Col span={24} className='tw-mt-16'>
          <Reports reports={relatorios} selectedReport={selectedReport} />
        </Col>
      </Row>
    </div>
  );
}
