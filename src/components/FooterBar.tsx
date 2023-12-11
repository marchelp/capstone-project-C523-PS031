import React from 'react'
import { containerMaxW } from '../config'
import SetorSampahLogo from './SetorSampahLogo'

export default function FooterBar() {
  const year = new Date().getFullYear()

  return (
    <footer className={`py-2 px-6 ${containerMaxW}`}>
      <div className="block md:flex items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
            <b>&copy;{year}{` `}</b>
            <a href="#" rel="noreferrer" target="_blank">
              <b>Setor Sampah,</b> capstone group C523-PS031
            </a>
        </div>
        <div className="md:py-2">
          <a href="#" rel="noreferrer" target="_blank">
            <SetorSampahLogo className="w-auto h-10 mx-auto" />
          </a>
        </div>
      </div>
    </footer>
  )
}
