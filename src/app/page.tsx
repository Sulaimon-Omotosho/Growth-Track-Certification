// 'use client'

// import { useRef, useState } from 'react'
// import { DownloadButtons } from '@/components/certificate/DownloadButtons'
// import { Toolbar } from '@/components/controls/Toolbar'
// import { MainLayout } from '@/components/layouts/MainLayout'
// import { CertificateCanvas } from '@/components/certificate/CertificateCanvas'
// import { CertificateState } from '@/types/certificate'

// export default function Home() {
//   const [certificate, setCertificate] = useState<CertificateState>({
//     name: 'John Doe',
//     image: '/templates/default.png',
//     fontSize: 60,
//     fontFamily: 'serif',
//     textColor: '#000000',
//     position: { x: 100, y: 100 },
//   })

//   const certificateRef = useRef<HTMLDivElement>(null)

//   return (
//     <MainLayout>
//       <div className='flex flex-col lg:flex-row h-[calc(100vh-4rem)] w-full overflow-y-auto lg:overflow-hidden bg-zinc-50 dark:bg-zinc-950'>
//         {/* Left Side Controls */}
//         <aside className='w-full lg:w-85 border-t lg:border-t-0 lg:border-r border-zinc-200 bg-white p-6 order-last lg:order-first lg:overflow-y-auto dark:border-zinc-800 dark:bg-zinc-900 shrink-0 shadow-sm'>
//           <div className='flex flex-col gap-1 mb-6'>
//             <h1 className='text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50'>
//               Certificate Studio
//             </h1>
//             <p className='text-xs text-zinc-500 dark:text-zinc-400'>
//               Customize and issue emergency graduand certifications.
//             </p>
//           </div>

//           <Toolbar certificate={certificate} setCertificate={setCertificate} />
//         </aside>

//         {/* Right Side Stage View */}
//         <main className='flex-1 flex flex-col min-w-0 overflow-hidden min-h-[450px] md:min-h-140 lg:min-h-0'>
//           {/* Action Header */}
//           <header className='flex items-center justify-between px-8 py-4 bg-white border-b border-zinc-200 dark:bg-zinc-900 dark:border-zinc-850 shrink-0'>
//             <div className='flex flex-col'>
//               <span className='text-xs font-medium text-zinc-400 uppercase tracking-wider'>
//                 Live Preview
//               </span>
//               <span className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>
//                 {certificate.name || 'Untitled Certificate'}
//               </span>
//             </div>
//             <div className='flex items-center gap-3'>
//               <DownloadButtons
//                 certificateRef={certificateRef}
//                 certificate={certificate}
//               />
//             </div>
//           </header>

//           {/* Centered Stage Wrapper */}
//           <div className='flex-1 overflow-x-auto overflow-y-hidden p-4 sm:p-8 flex items-center justify-start lg:justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]'>
//             <div className='relative my-auto mx-auto shrink-0 shadow-2xl rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white p-2'>
//               <CertificateCanvas
//                 certificate={certificate}
//                 setCertificate={setCertificate}
//                 certificateRef={certificateRef}
//               />
//             </div>
//           </div>
//         </main>
//       </div>
//     </MainLayout>
//   )
// }

'use client'

import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { MapPin, Award, ArrowRight } from 'lucide-react'

export default function Home() {
  const locations = [
    {
      name: 'Gbagada',
      description: 'Generate and manage certificates for the Gbagada center.',
      href: '/gbagada',
      badge: 'Active',
      color: 'from-blue-500/10 via-indigo-500/5 to-transparent',
      borderColor: 'hover:border-blue-500/50',
      btnColor: 'bg-blue-600 hover:bg-blue-700 text-white',
    },
    {
      name: 'Ghana',
      description: 'Generate and manage certificates for the Ghana center.',
      href: '/ghana',
      badge: 'Active',
      color: 'from-emerald-500/10 via-teal-500/5 to-transparent',
      borderColor: 'hover:border-emerald-500/50',
      btnColor: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    },
  ]

  return (
    <MainLayout>
      <div className='min-h-[calc(100vh-4rem)] bg-zinc-50 dark:bg-zinc-950 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto w-full'>
          {/* Header Section */}
          <div className='text-center mb-12'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/60 dark:bg-zinc-800/60 text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-4'>
              <Award className='w-4 h-4 text-zinc-500' />
              <span>Certificate Studio Hub</span>
            </div>
            <h1 className='text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50'>
              Select Location Generator
            </h1>
            <p className='mt-3 text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto'>
              Choose a campus or location below to start customizing and issuing
              graduand certificates.
            </p>
          </div>

          {/* Location Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {locations.map((location) => (
              <div
                key={location.name}
                className={`relative group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${location.color} ${location.borderColor}`}
              >
                <div className='flex items-center justify-between mb-4'>
                  <div className='p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100'>
                    <MapPin className='w-6 h-6' />
                  </div>
                  <span className='text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700'>
                    {location.badge}
                  </span>
                </div>

                <h2 className='text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2'>
                  {location.name} Center
                </h2>
                <p className='text-sm text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed'>
                  {location.description}
                </p>

                <Link
                  href={location.href}
                  className={`inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm ${location.btnColor}`}
                >
                  Open {location.name} Studio
                  <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
