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
