// 'use client'

// import Image from 'next/image'
// import { CertificateCanvasProps } from '@/types/certificate'
// import { Rnd } from 'react-rnd'
// import React from 'react'

// export function CertificateCanvas({
//   certificate,
//   setCertificate,
//   certificateRef,
// }: CertificateCanvasProps) {
//   return (
//     <div
//       ref={certificateRef}
//       className='relative w-full max-w-4xl aspect-[1600/1131] overflow-hidden rounded-md bg-white shadow-xl selection:bg-transparent'
//     >
//       {/* Base Template Image */}
//       <Image
//         src={certificate.image}
//         alt='Certificate Template'
//         width={1600}
//         height={1131}
//         priority
//         className='w-full h-auto pointer-events-none select-none'
//       />

//       {/* Drag & Drop Overlay Text */}
//       <Rnd
//         bounds='parent'
//         enableResizing={false}
//         position={certificate.position}
//         onDragStop={(e, d) =>
//           setCertificate((prev) => ({
//             ...prev,
//             position: { x: d.x, y: d.y },
//           }))
//         }
//       >
//         <div className='group relative cursor-move p-2 rounded hover:ring-2 hover:ring-indigo-500/50 transition-shadow'>
//           <h1
//             className='select-none whitespace-nowrap font-bold leading-none tracking-wide'
//             style={{
//               fontSize: `${certificate.fontSize}px`,
//               fontFamily: certificate.fontFamily,
//               color: certificate.textColor,
//             }}
//           >
//             {certificate.name || 'Recipient Name'}
//           </h1>

//           {/* Subtle drag-handle cue shown on hover */}
//           <span className='absolute -top-6 left-1/2 -translate-x-1/2 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all bg-indigo-600 text-white text-[10px] font-medium px-1.5 py-0.5 rounded shadow'>
//             Drag to position
//           </span>
//         </div>
//       </Rnd>
//     </div>
//   )
// }

'use client'

import Image from 'next/image'
import { CertificateCanvasProps } from '@/types/certificate'
import { Rnd } from 'react-rnd'
import React from 'react'

export function CertificateCanvas({
  certificate,
  setCertificate,
  certificateRef,
}: CertificateCanvasProps) {
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
    </div>
  )
}
