'use client'

import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'
import { Certificate, ToolbarProps } from '@/types/certificate'

interface Props {
  certificate: Certificate
  setCertificate: ToolbarProps['setCertificate']
}

export function FontSizeSlider({ certificate, setCertificate }: Props) {
  return (
    <div className='space-y-2.5 pt-1'>
      <div className='flex items-center justify-between'>
        <Label className='text-xs font-medium text-zinc-600 dark:text-zinc-400'>
          Font Size
        </Label>
        <span className='text-[11px] font-mono font-medium text-zinc-500 bg-zinc-100 px-1.5 py-0.5 rounded dark:bg-zinc-800 dark:text-zinc-400'>
          {certificate.fontSize}px
        </span>
      </div>

      <Slider
        value={[certificate.fontSize]}
        min={10}
        max={144}
        step={1}
        className='py-1 cursor-pointer'
        onValueChange={(value) =>
          setCertificate((prev) => ({
            ...prev,
            fontSize: value[0],
          }))
        }
      />
    </div>
  )
}
