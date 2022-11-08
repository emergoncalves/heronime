import Image from 'next/image'
import React from 'react'

export default function LogoImage() {
  return (
    <div>
        <Image 
            src="/images/logo.svg"
            width={160}
            height={47}
            alt="logo imagem heronime"
        />
    </div>
  )
}
