import { useState } from "react";

const menuItems = [
  {
    key: 'inicio',
    label: 'Início',
  },
  {
    key: 'sobre-nos',
    label: 'Sobre Nós',
  },
  {
    key: 'estoque',
    label: 'Estoque',
  },
  {
    key: 'financiamento',
    label: 'Financiamento',
  },
  {
    key: 'contato',
    label: 'Contato',
  }
];

export function MenuHeader() {
  const [current, setCurrent] = useState('inicio');

  return (
    <div className="tw-items-center tw-text-center tw-justify-center tw-hidden lg:tw-flex">
      <ul className={`tw-flex tw-gap-30`}>
        {menuItems.map((item) => (
          <li key={item.key} className="tw-cursor-pointer">
            <div onClick={() => setCurrent(item.key)}>
              <p className={`tw-text-sm tw-font-bold hover:tw-text-dark-primary ${current === item.key ? 'tw-text-dark-primary' : 'tw-text-dark-secondary'}`}>{item.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
