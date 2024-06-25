import { CustomIcon } from "@components/CustomIcon";
import { useDarkMode } from "@hooks/context/darkModeContext";
import { Divider } from "antd";
import { isEqual } from "lodash";
import { useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const CustomTooltipPerRate = (props) => {
  const { active, payload } = props;
  const { darkMode } = useDarkMode()

  if (active) {
    const { vr_apurado, vr_variacao_numerica, vr_variacao_percentual, tp_variacao } = payload[0].payload;
    const { data } = props

    const neutralColor = darkMode ? 'tw-bg-light-dark-jungle-green tw-text-white ' : 'tw-bg-dark-onyx tw-text-white';

    return (
      <div className={`${darkMode ? 'tw-bg-dark-onyx tw-text-dark-secondary' : 'tw-bg-light-dark-jungle-green tw-text-white'} tw-py-16 tw-px-16 tw-rounded-[10px]`}>
        <div className="">
          <div className="tw-flex tw-flex-row tw-items-center tw-gap-10">
            <div className="tw-w-8 tw-h-8 tw-bg-light-tiffany-blue tw-rounded-full" />
            {vr_apurado > 1 ? <span className="tw-text-xs">{vr_apurado} avaliações</span> : <span className="tw-text-xs">{vr_apurado} avaliação</span>}
          </div>
        </div>
        <Divider className='tw-my-14' style={{ backgroundColor: '#383A40' }} />
        {
          isEqual(data[0], props.payload[0].payload) ? (
            <div className="tw-flex tw-flex-row tw-justify-between tw-gap-12">
              <div className={`${neutralColor} tw-py-8 tw-px-[9px] tw-rounded-full`}>
                <span className="tw-text-xs">R${vr_variacao_numerica}</span>
              </div>
              <div className={`${neutralColor} tw-py-8 tw-px-[9px] tw-rounded-full tw-flex tw-items-center tw-gap-4`}>
                <span className="tw-text-xs">{vr_variacao_percentual}%</span>
              </div>
            </div>
          ) : tp_variacao === '+' ? (
            <div className="tw-flex tw-flex-row tw-justify-between tw-gap-12">
              <div className="tw-bg-[#2A3B30] tw-py-8 tw-px-[9px] tw-rounded-full">
                <span className="tw-text-dark-success tw-text-xs">+R${vr_variacao_numerica}</span>
              </div>
              <div className="tw-bg-[#2A3B30] tw-py-8 tw-px-[9px] tw-rounded-full tw-flex tw-items-center tw-gap-4">
                <CustomIcon name="IconArrowReports" strokeClassName="tw-stroke-dark-success" />
                <span className="tw-text-dark-success tw-text-xs">{vr_variacao_percentual}%</span>
              </div>
            </div>
          ) : (
            <div className="tw-flex tw-flex-row tw-justify-between tw-gap-12">
              <div className="tw-bg-[#FF716840] tw-py-8 tw-px-[9px] tw-rounded-full">
                <span className="tw-text-dark-error tw-text-xs">-R${vr_variacao_numerica}</span>
              </div>
              <div className="tw-bg-[#FF716840] tw-py-8 tw-px-[9px] tw-rounded-full tw-flex tw-items-center tw-gap-4">
                <CustomIcon name="IconArrowReports" strokeClassName="tw-stroke-dark-error" className="tw-rotate-180" />
                <span className="tw-text-dark-error tw-text-xs">{vr_variacao_percentual}%</span>
              </div>
            </div>
          )
        }
      </div>
    );
  }

  return null;
}

const CustomizedDot = (props) => {
  const { cx, cy } = props;

  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <circle cx={cx} cy={cy} r="5" fill="white" stroke="#02AFBC" strokeWidth="2" />
    </svg>
  );
};

const CustomTick = ({ x, y, payload, index, activeIndex, activeIndexColor, ano, completeDate = false, ...rest }: any) => {
  return (
    <text
      x={x}
      y={y}
      fill={index === activeIndex ? activeIndexColor : '#7F8794'}
      textAnchor="middle"
      dy={16}
    >
      {completeDate ? `${payload.value}/${new Date().getFullYear().toString().slice(-2)}` : payload.value}
    </text>
  );
};

export function ReportPerRate({ perRate, lineChartColor, completeDate = false }) {
  const [activeIndex, setActiveIndex] = useState(null);
  perRate = perRate ? perRate : [];
  const minValue = Math.min(...perRate.map(d => d.vr_apurado));
  const maxValue = Math.max(...perRate.map(d => d.vr_apurado));

  function formatValue(value) {
    if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'k';
    }
    return value.toString();
  }

  return (
    <ResponsiveContainer width="100%" height={200}>
      {perRate.length > 0 && <AreaChart
        onMouseMove={(e) => {
          if (e.isTooltipActive) {
            setActiveIndex(e.activeTooltipIndex);
          }
        }}
        onMouseLeave={() => {
          setActiveIndex(null);
        }}
        data={perRate}
        margin={{ top: 10, right: 25, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="paint0_linear_774_1316" x1="138" y1="90" x2="129" y2="146" gradientUnits="userSpaceOnUse">
            <stop stopColor={lineChartColor.lineColor} stopOpacity={0.15} />
            <stop offset="1" stopColor={lineChartColor.lineColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="nm_mes_abrev" axisLine={false} tickLine={false} tickFormatter={(tick, activeIndex) => { return `${tick}` }}
          tick={<CustomTick activeIndex={activeIndex} activeIndexColor={lineChartColor.activeIndexColor} completeDate={completeDate} />}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          width={35}
          domain={[minValue, maxValue]}
          tickCount={6}
          tickFormatter={(tick) => {
            return `${formatValue(tick)}`;
          }} />
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <Tooltip cursor={{ stroke: lineChartColor.lineColor, strokeDasharray: 3 }} content={<CustomTooltipPerRate data={perRate} />} />
        <Area type="monotone" dataKey="vr_apurado" stroke={lineChartColor.lineColor} strokeWidth={2} fillOpacity={1} fill="url(#paint0_linear_774_1316)" activeDot={<CustomizedDot />} />
      </AreaChart>}
    </ResponsiveContainer>
  );
}
