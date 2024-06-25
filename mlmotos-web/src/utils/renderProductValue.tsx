import { useDarkMode } from "@hooks/context/darkModeContext";

export function renderProductValue(moeda, productValue) {
  const { darkMode } = useDarkMode();

  function formatCurrency(currencyCode, amount, locale = 'pt-BR') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
    }).format(amount);
  }

  return (
    <p className={`${darkMode ? 'tw-text-dark-secondary' : 'tw-text-light-secondary'} tw-text-2xl tw-font-semibold`}>{formatCurrency(moeda, productValue)}</p>
  )
}
