// 'use client'

// import { Download, FileText } from 'lucide-react'
// import { toPng, toBlob } from 'html-to-image'
// import jsPDF from 'jspdf'
// import { useState } from 'react'

// import { Button } from '@/components/ui/button'
// import { DownloadButtonsProps } from '@/types/certificate'

// export function DownloadButtons({
//   certificateRef,
//   certificate,
// }: DownloadButtonsProps) {
//   const [isExporting, setIsExporting] = useState(false)

//   const getFileName = () =>
//     certificate.name
//       .trim()
//       .replace(/\s+/g, '-')
//       .replace(/[^\w-]/g, '') || 'certificate'

//   // Determine optimal pixel ratio to avoid mobile memory limits
//   const getPixelRatio = () => {
//     if (typeof window === 'undefined') return 2
//     const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
//     return isMobile ? 2 : 3
//   }

//   const downloadPNG = async () => {
//     if (!certificateRef.current) return
//     setIsExporting(true)

//     try {
//       const targetNode = certificateRef.current
//       const ratio = getPixelRatio()

//       // Warmup render to ensure fonts & images render cleanly
//       await toBlob(targetNode, { cacheBust: true, pixelRatio: ratio })

//       // Generate Blob instead of base64 Data URL for iOS compatibility
//       const blob = await toBlob(targetNode, {
//         cacheBust: true,
//         pixelRatio: ratio,
//         style: {
//           transform: 'scale(1)',
//           transformOrigin: 'top left',
//           width: targetNode.offsetWidth + 'px',
//           height: targetNode.offsetHeight + 'px',
//         },
//       })

//       if (!blob) throw new Error('Failed to generate PNG blob')

//       // Create a Blob Object URL
//       const blobUrl = URL.createObjectURL(blob)
//       const fileName = `${getFileName()}.png`

//       // Detect iOS WebKit
//       const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)

//       if (isIOS) {
//         // iOS Safari/Chrome method: Open directly or use a temporary anchor appended to DOM
//         const link = document.createElement('a')
//         link.href = blobUrl
//         link.download = fileName
//         link.target = '_blank'
//         document.body.appendChild(link)
//         link.click()
//         document.body.removeChild(link)
//       } else {
//         // Standard Desktop / Android download execution
//         const link = document.createElement('a')
//         link.href = blobUrl
//         link.download = fileName
//         document.body.appendChild(link)
//         link.click()
//         document.body.removeChild(link)
//       }

//       // Cleanup blob memory
//       setTimeout(() => URL.revokeObjectURL(blobUrl), 10000)
//     } catch (error) {
//       console.error('PNG download failed:', error)
//     } finally {
//       setIsExporting(false)
//     }
//   }

//   const downloadPDF = async () => {
//     if (!certificateRef.current) return
//     setIsExporting(true)

//     try {
//       const targetNode = certificateRef.current
//       const ratio = getPixelRatio()

//       await toPng(targetNode, { cacheBust: true, pixelRatio: ratio })

//       const dataUrl = await toPng(targetNode, {
//         cacheBust: true,
//         pixelRatio: ratio,
//         style: {
//           transform: 'scale(1)',
//           transformOrigin: 'top left',
//           width: targetNode.offsetWidth + 'px',
//           height: targetNode.offsetHeight + 'px',
//         },
//       })

//       const img = new Image()
//       img.src = dataUrl

//       img.onload = () => {
//         const pdf = new jsPDF({
//           orientation: img.width > img.height ? 'landscape' : 'portrait',
//           unit: 'px',
//           format: [img.width, img.height],
//         })

//         pdf.addImage(dataUrl, 'PNG', 0, 0, img.width, img.height)
//         pdf.save(`${getFileName()}.pdf`)
//         setIsExporting(false)
//       }
//     } catch (error) {
//       console.error('PDF download failed:', error)
//       setIsExporting(false)
//     }
//   }

//   return (
//     <div className='flex items-center gap-2'>
//       <Button
//         variant='outline'
//         size='sm'
//         className='h-9 px-3 text-xs font-medium border-zinc-200 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300'
//         onClick={downloadPNG}
//         disabled={isExporting}
//       >
//         <Download className='mr-1.5 h-3.5 w-3.5 text-zinc-500' />
//         {isExporting ? 'Exporting...' : 'PNG'}
//       </Button>

//       <Button
//         variant='default'
//         size='sm'
//         className='h-9 px-3 text-xs font-medium bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200'
//         onClick={downloadPDF}
//         disabled={isExporting}
//       >
//         <FileText className='mr-1.5 h-3.5 w-3.5' />
//         {isExporting ? 'Exporting...' : 'Export PDF'}
//       </Button>
//     </div>
//   )
// }

'use client'

import { Download, FileText } from 'lucide-react'
import { toPng } from 'html-to-image'
import jsPDF from 'jspdf'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { DownloadButtonsProps } from '@/types/certificate'

export function DownloadButtons({
  certificateRef,
  certificate,
}: DownloadButtonsProps) {
  const [isExporting, setIsExporting] = useState(false)

  const getFileName = () =>
    certificate.name
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '') || 'certificate'

  const generateCanvasDataUrl = async (
    targetNode: HTMLElement,
  ): Promise<string> => {
    await toPng(targetNode, { cacheBust: true, pixelRatio: 3 })

    return await toPng(targetNode, {
      cacheBust: true,
      pixelRatio: 3,
      style: {
        transform: 'scale(1)',
        transformOrigin: 'top left',
        width: targetNode.offsetWidth + 'px',
        height: targetNode.offsetHeight + 'px',
      },
    })
  }

  const downloadPNG = async () => {
    if (!certificateRef.current) return
    setIsExporting(true)

    try {
      const dataUrl = await generateCanvasDataUrl(certificateRef.current)

      const link = document.createElement('a')
      link.download = `${getFileName()}.png`
      link.href = dataUrl
      link.click()
    } catch (error) {
      console.error('PNG download failed:', error)
    } finally {
      setIsExporting(false)
    }
  }

  const downloadPDF = async () => {
    if (!certificateRef.current) return
    setIsExporting(true)

    try {
      const dataUrl = await generateCanvasDataUrl(certificateRef.current)
      const img = new Image()
      img.src = dataUrl

      img.onload = () => {
        const pdf = new jsPDF({
          orientation: img.width > img.height ? 'landscape' : 'portrait',
          unit: 'px',
          format: [img.width, img.height],
        })

        pdf.addImage(dataUrl, 'PNG', 0, 0, img.width, img.height)
        pdf.save(`${getFileName()}.pdf`)
        setIsExporting(false)
      }
    } catch (error) {
      console.error('PDF download failed:', error)
      setIsExporting(false)
    }
  }

  return (
    <div className='flex items-center gap-2'>
      <Button
        variant='outline'
        size='sm'
        className='h-9 px-3 text-xs font-medium border-zinc-200 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300'
        onClick={downloadPNG}
        disabled={isExporting}
      >
        <Download className='mr-1.5 h-3.5 w-3.5 text-zinc-500' />
        PNG
      </Button>

      <Button
        variant='default'
        size='sm'
        className='h-9 px-3 text-xs font-medium bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200'
        onClick={downloadPDF}
        disabled={isExporting}
      >
        <FileText className='mr-1.5 h-3.5 w-3.5' />
        {isExporting ? 'Exporting...' : 'Export PDF'}
      </Button>
    </div>
  )
}
