import React from 'react';
import Image from 'next/image'; // Make sure to import Image from 'next/image'
import setorSampahLogoPath from './logoPath';

type Props = {
  className?: string;
};

export default function SetorSampahLogo({ className = '' }: Props) {
  return (
    <Image
      src={setorSampahLogoPath}
      alt="Logo"
      width={300}
      height={100}
      className={className}
    />
  );
}
