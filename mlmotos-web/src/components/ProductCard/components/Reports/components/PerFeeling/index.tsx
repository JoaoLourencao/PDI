import { CustomIcon } from "@components/CustomIcon";
import { useDarkMode } from "@hooks/context/darkModeContext";
import { Divider } from "antd";
import { useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

var tooltip

const CustomTooltipPerFeeling = (props) => {
  const { active, payload, label } = props;
  const { darkMode } = useDarkMode()

  if (active) {
    const type = 'positive'
    const percentage = 10

    if (!active || !tooltip) return null
    for (const bar of payload)
      if (bar.dataKey === tooltip) {
        const { vr_variacao_percentual_neg, vr_variacao_percentual_ntr, vr_variacao_percentual_pos } = bar.payload

        return (
          <div className={`${darkMode ? 'tw-bg-dark-onyx tw-text-dark-secondary' : 'tw-bg-light-dark-jungle-green tw-text-white'} tw-py-16 tw-px-16 tw-rounded-[10px]`}>
            <div className="">
              <div className="tw-flex tw-flex-row tw-items-center tw-gap-10">
                {tooltip === 'vr_variacao_percentual_pos' ?
                  <>
                    <div className="tw-w-8 tw-h-8 tw-bg-dark-success tw-rounded-full" />
                    <span className="tw-text-xs">{vr_variacao_percentual_pos}% positivo</span>
                  </>
                  : tooltip === 'vr_variacao_percentual_ntr' ?
                    <>
                      <div className="tw-w-8 tw-h-8 tw-bg-light-tiffany-blue tw-rounded-full" />
                      <span className="tw-text-xs">{vr_variacao_percentual_ntr}% neutro</span>
                    </>
                    :
                    <>
                      <div className="tw-w-8 tw-h-8 tw-bg-dark-error tw-rounded-full" />
                      <span className="tw-text-xs">{vr_variacao_percentual_neg}% negativo</span>
                    </>
                }
              </div>
            </div>
            <Divider className='tw-my-14' style={{ backgroundColor: '#383A40' }} />
            {
              type === 'positive' ? (
                <div className="tw-flex tw-flex-row tw-justify-between tw-gap-12">
                  <div className="tw-bg-[#2A3B30] tw-py-8 tw-px-[9px] tw-rounded-full tw-flex tw-items-center tw-gap-4">
                    <CustomIcon name="IconArrowReports" strokeClassName="tw-stroke-dark-success" />
                    <span className="tw-text-dark-success tw-text-xs">{percentage}%</span>
                  </div>
                </div>
              ) : (
                <div className="tw-flex tw-flex-row tw-justify-between tw-gap-12">
                  <div className="tw-bg-[#FF716840] tw-py-8 tw-px-[9px] tw-rounded-full tw-flex tw-items-center tw-gap-4">
                    <CustomIcon name="IconArrowReports" strokeClassName="tw-stroke-dark-error" className="tw-rotate-180" />
                    <span className="tw-text-dark-error tw-text-xs">{percentage}%</span>
                  </div>
                </div>
              )
            }
          </div>
        );
      }
  }

  return null;
}

export function ReportPerFeeling({ perFeeling }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeKey, setActiveKey] = useState(null);

  const handleMouseOver = (index, key) => {
    tooltip = key
    setActiveIndex(index);
    setActiveKey(key);
  };

  const handleMouseOut = () => {
    tooltip = null
    setActiveIndex(null);
    setActiveKey(null);
  };

  return (
    <ResponsiveContainer width="100%" height={215}>
      <BarChart
        width={830}
        height={250}
        data={perFeeling}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis dataKey="nm_mes_abrev" />
        <YAxis
          width={42}
          ticks={[0, 20, 40, 60, 80, 100]}
          domain={[0, 100]}
          tickFormatter={(tick) => {
            return `${tick}%`;
          }}
        />
        <Tooltip content={<CustomTooltipPerFeeling data={perFeeling} />} />
        {['vr_variacao_percentual_neg', 'vr_variacao_percentual_ntr', 'vr_variacao_percentual_pos'].map((key, idx) => {
          return (
            <Bar
              key={key}
              dataKey={key}
              stackId="rate"
              fill={idx === 0 ? '#FF564B' : idx === 1 ? '#33B2F9' : '#3BB774'}
              onMouseOver={(data, index) => handleMouseOver(index, key)}
              onMouseOut={handleMouseOut}
            >
              {perFeeling.map((entry, index) => (
                <Cell
                  key={`cell-${index}-${key}`}
                  fillOpacity={
                    activeIndex === null || (activeIndex === index && activeKey === key)
                      ? 1
                      : 0.3
                  }
                />
              ))}
            </Bar>
          )
        })}
      </BarChart>
    </ResponsiveContainer>
  );
}
