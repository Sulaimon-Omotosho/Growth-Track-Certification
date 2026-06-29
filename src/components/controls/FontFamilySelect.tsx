'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Certificate, ToolbarProps } from '@/types/certificate'

interface Props {
  certificate: Certificate
  setCertificate: ToolbarProps['setCertificate']
}

const fonts = ['serif', 'sans-serif', 'monospace', 'cursive']

export function FontFamilySelect({ certificate, setCertificate }: Props) {
  return (
    <div className='space-y-2'>
      <Label
        htmlFor='font-family'
        className='text-xs font-medium text-zinc-600 dark:text-zinc-400'
      >
        Typography Font
      </Label>

      <Select
        value={certificate.fontFamily}
        onValueChange={(value) =>
          setCertificate((prev) => ({
            ...prev,
            fontFamily: value,
          }))
        }
      >
        <SelectTrigger
          id='font-family'
          className='h-9 text-xs border-zinc-200 capitalize dark:border-zinc-800'
        >
          <SelectValue placeholder='Select a font' />
        </SelectTrigger>

        <SelectContent>
          {fonts.map((font) => (
            <SelectItem
              key={font}
              value={font}
              className='text-xs capitalize cursor-pointer'
              style={{ fontFamily: font }}
            >
              {font}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
