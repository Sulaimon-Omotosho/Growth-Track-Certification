'use client'

import { useRef, useState } from 'react'
import { DownloadButtons } from '@/components/certificate/DownloadButtons'
import { Toolbar } from '@/components/controls/Toolbar'
import { MainLayout } from '@/components/layouts/MainLayout'
import { CertificateCanvas } from '@/components/certificate/CertificateCanvas'
import { CertificateState } from '@/types/certificate'
import { EditableDateField } from '@/components/controls/EditabaleDate'

export default function GhanaCertificatePage() {
  const [certificate, setCertificate] = useState<CertificateState>({
    name: 'John Doe',
    image: '/templates/Ghana Cert.png',
    fontSize: 60,
    fontFamily: 'serif',
    textColor: '#000000',
    position: { x: 220, y: 180 },
    // position: { x: 100, y: 100 },
  })

  const [issueDate, setIssueDate] = useState<string>('')
  const certificateRef = useRef<HTMLDivElement>(null)

  return (
    <MainLayout>
      <div className='flex flex-col lg:flex-row h-[calc(100vh-4rem)] w-full overflow-y-auto lg:overflow-hidden bg-zinc-50 dark:bg-zinc-950'>
        {/* Left Side Controls */}
        <aside className='w-full lg:w-85 border-t lg:border-t-0 lg:border-r border-zinc-200 bg-white p-6 order-last lg:order-first lg:overflow-y-auto dark:border-zinc-800 dark:bg-zinc-900 shrink-0 shadow-sm'>
          <div className='flex flex-col gap-1 mb-6'>
            <h1 className='text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50'>
              Ghana Certificate Studio
            </h1>
            <p className='text-xs text-zinc-500 dark:text-zinc-400'>
              Customize and issue emergency graduand certifications.
            </p>
          </div>

          <Toolbar
            certificate={certificate}
            setCertificate={setCertificate}
            issueDate={issueDate}
            setIssueDate={setIssueDate}
          />

          {/* Optional Sidebar Control for Date */}
          {/* <div className='mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800'>
            <label className='block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-2'>
              Issue Date
            </label>
            <input
              type='text'
              value={issueDate}
              placeholder='e.g. October 24, 2026'
              onChange={(e) => setIssueDate(e.target.value)}
              className='w-full px-3 py-2 text-xs rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-500'
            />
          </div> */}
        </aside>

        {/* Right Side Stage View */}
        <main className='flex-1 flex flex-col min-w-0 overflow-hidden min-h-[450px] md:min-h-140 lg:min-h-0'>
          {/* Action Header */}
          <header className='flex items-center justify-between px-8 py-4 bg-white border-b border-zinc-200 dark:bg-zinc-900 dark:border-zinc-850 shrink-0'>
            <div className='flex flex-col'>
              <span className='text-xs font-medium text-zinc-400 uppercase tracking-wider'>
                Live Preview
              </span>
              <span className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>
                {certificate.name || 'Untitled Certificate'}
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <DownloadButtons
                certificateRef={certificateRef}
                certificate={certificate}
              />
            </div>
          </header>

          {/* Centered Stage Wrapper */}
          <div className='flex-1 overflow-x-auto overflow-y-hidden p-4 sm:p-8 flex items-center justify-start lg:justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]'>
            <div
              ref={certificateRef}
              className='relative my-auto mx-auto shrink-0 shadow-2xl rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white p-2'
            >
              <CertificateCanvas
                certificate={certificate}
                setCertificate={setCertificate}
                certificateRef={certificateRef as any}
                issueDate={issueDate}
                setIssueDate={setIssueDate}
              />
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  )
}
