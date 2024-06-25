import { useDarkMode } from "@hooks/context/darkModeContext";
import { useMemo } from "react";
import { ReportPerFeeling } from "./components/PerFeeling";
import { ReportPerPrice } from "./components/PerPrice";
import { ReportPerRate } from "./components/PerRate";

interface Props {
  selectedReport: any;
  reports: any;
}

export function Reports({ reports, selectedReport }: Props) {
  const { darkMode } = useDarkMode();
  const { avaliacoes_produto, preco_medio, sentimento_produto } = reports;

  const { type } = selectedReport;
  const lineChartColor = useMemo(() => ({
    lineColor: darkMode ? '#83D2DC' : '#02AFBC',
    activeIndexColor: darkMode ? '#83D2DC' : '#02AFBC'
  }), [darkMode])

  return (
    <>
      {
        type === 'perRate' ? (
          <ReportPerRate perRate={avaliacoes_produto} lineChartColor={lineChartColor} />
        ) : type === 'perFeeling' ? (
          <ReportPerFeeling perFeeling={sentimento_produto} />
        ) : (
          <ReportPerPrice perPrice={preco_medio} lineChartColor={lineChartColor} />
        )
      }
    </>
  );
}
