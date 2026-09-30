'use client'

import Image from 'next/image'
import { Rnd } from 'react-rnd'
import React, { useEffect } from 'react'
import { CertificateState } from '@/types/certificate'

export interface CertificateCanvasProps {
  certificate: CertificateState
  setCertificate: React.Dispatch<React.SetStateAction<CertificateState>>
  certificateRef: React.RefObject<HTMLDivElement>
  issueDate?: string
  setIssueDate?: (date: string) => void
}

export function CertificateCanvas({
  certificate,
  setCertificate,
  certificateRef,
  issueDate,
  setIssueDate,
}: CertificateCanvasProps) {
  // Set default formatted date on mount if date state exists but is empty
  useEffect(() => {
    if (setIssueDate && !issueDate) {
      const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      setIssueDate(today)
    }
  }, [issueDate, setIssueDate])

  return (
    <div
      ref={certificateRef}
      className='relative shrink-0 overflow-hidden rounded-md bg-white shadow-xl selection:bg-transparent max-w-[70vw] max-h-screen'
    >
      {/* Base Template Image */}
      <Image
        src={certificate.image}
        alt='Certificate Template'
        width={800}
        height={565}
        priority
        className='block max-w-full max-h-full object-contain pointer-events-none select-none'
      />

      {/* Drag & Drop Overlay Text */}
      <Rnd
        bounds='parent'
        enableResizing={false}
        position={certificate.position}
        onDragStop={(e, d) =>
          setCertificate((prev) => ({
            ...prev,
            position: { x: d.x, y: d.y },
          }))
        }
      >
        <div className='group relative cursor-move p-2 rounded hover:ring-2 hover:ring-indigo-500/50 transition-shadow'>
          <h1
            className='select-none whitespace-nowrap font-bold leading-none tracking-wide'
            style={{
              fontSize: `${certificate.fontSize}px`,
              fontFamily: certificate.fontFamily,
              color: certificate.textColor,
            }}
          >
            {certificate.name || 'Recipient Name'}
          </h1>

          {/* Subtle drag-handle cue shown on hover */}
          <span className='absolute -top-6 left-1/2 -translate-x-1/2 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all bg-indigo-600 text-white text-[10px] font-medium px-1.5 py-0.5 rounded shadow'>
            Drag to position
          </span>
        </div>
      </Rnd>

      {/* Editable Date Overlay (Rendered only on pages that pass setIssueDate) */}
      {setIssueDate !== undefined && (
        <div className='absolute bottom-[15%] left-[26%] -translate-x-1/2 w-[29%] text-center z-10'>
          <input
            type='text'
            value={issueDate ?? ''}
            onChange={(e) => setIssueDate(e.target.value)}
            className='w-full bg-transparent border-b border-transparent hover:border-zinc-300 focus:border-zinc-500 focus:outline-none text-center font-serif font-semibold text-zinc-900 transition-colors text-[8px] xs:text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] xl:text-[20px] leading-tight p-0'
            aria-label='Certificate Date'
          />
        </div>
      )}
    </div>
  )
}
