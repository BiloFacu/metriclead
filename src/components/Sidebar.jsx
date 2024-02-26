'use client'

import { useState } from 'react'
import {svgAfiliados, svgAjustes, svgAyuda, svgBuscador, svgCitas, svgClinica, svgLuna, svgPagos, svgPanel, svgReportes, svgSolicitudes} from '../utils/svg'
import Logo from '../../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
  const[select, setSelect] = useState('Sitios')
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleItemClick = (item) => {
    setSelect(item);
  };

  const renderItems = (items) =>
    items.map((item) => (
      <Link href={item.href} key={item.label} className='link'>
        <div
          key={item.label}
          className={`itemNav ${select === item.label ? 'select' : ''}`}
          onClick={() => handleItemClick(item.label)}
        >
          {item.icon}
          <h1 style={{ color: select === item.label ? '#EB4335' : 'black' }}>{item.label}</h1>
        </div>
      </Link>
    ));

  const items = [
    { label: 'Panel', icon: svgPanel('black'), href:'/panel' },
    { label: 'Sitios', icon: svgSolicitudes('black'), href:'/' },
    { label: 'Calendario', icon: svgCitas('black'), href:'/calendario' },
    { label: 'Clientes', icon: svgAfiliados('black'), href:'/clientes' },
    { label: 'Compañias', icon: svgClinica('black'), href:'/companias' },
    { label: 'Buscar leads', icon: svgBuscador('black'), href:'/leads' },
    { label: 'Pagos', icon: svgPagos('black'), href:'/pagos' },
    { label: 'Reportes', icon: svgReportes('black'), href:'/reportes' },
  ];

    return (
        <div className='sidebar'>
          <div className='divLogo'>
            <Image src={Logo} alt="logo" className='logo'/>
          </div>
          <div className='nav1'>
            {renderItems(items)}
          </div>
          <div className='border'>
            <div className='nav2'>
              <Link href={'/ajustes'} className='link'>
                <div className='itemNav'>
                  {svgAjustes('black')}
                  <h1>Ajustes</h1>
                </div>
              </Link>
              <div className='itemNav' onClick={toggleDarkMode}>
                {svgLuna('black')}
                <h1>Modo Noche</h1>
              </div>
              <Link href={'/ayuda'} className='link'>
                <div className='itemNav'>
                  {svgAyuda('black')}
                  <h1 className='select'>Solicitar ayuda</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
    );
  };
  
  export default Sidebar;