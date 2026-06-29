'use client'

import { Label } from '@/components/ui/label'
import { Certificate, ToolbarProps } from '@/types/certificate'

interface Props {
  certificate: Certificate
  setCertificate: ToolbarProps['setCertificate']
}

export function TextColorPicker({ certificate, setCertificate }: Props) {
  return (
    <div className='space-y-2'>
      <Label
        htmlFor='color-picker'
        className='text-xs font-medium text-zinc-600 dark:text-zinc-400'
      >
        Font Color
      </Label>

      <div className='relative flex items-center rounded-md border border-zinc-200 bg-white px-3 h-9 transition-colors focus-within:ring-1 focus-within:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900'>
        <input
          id='color-picker'
          type='color'
          value={certificate.textColor}
          onChange={(e) =>
            setCertificate((prev) => ({
              ...prev,
              textColor: e.target.value,
            }))
          }
          className='absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10'
        />

        <div className='flex items-center gap-2.5 w-full pointer-events-none'>
          <span
            className='h-4 w-4 rounded-full border border-black/10 shadow-sm shrink-0'
            style={{ backgroundColor: certificate.textColor }}
          />

          <span className='text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 uppercase'>
            {certificate.textColor}
          </span>
        </div>
      </div>
    </div>
  )
}
