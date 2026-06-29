import React from 'react'

export interface Position {
  x: number
  y: number
}

export interface Certificate {
  name: string
  image: string
  fontSize: number
  fontFamily: string
  textColor: string
  position: Position
}

export interface CertificateState {
  name: string
  image: string
  fontSize: number
  fontFamily: string
  textColor: string
  position: { x: number; y: number }
}

export interface ToolbarProps {
  certificate: Certificate
  setCertificate: React.Dispatch<React.SetStateAction<Certificate>>
}

export interface CertificateCanvasProps {
  certificate: Certificate
  setCertificate: React.Dispatch<React.SetStateAction<Certificate>>
  certificateRef: React.RefObject<HTMLDivElement | null>
}

export interface DownloadButtonsProps {
  certificateRef: React.RefObject<HTMLDivElement | null>
  certificate: Certificate
}
