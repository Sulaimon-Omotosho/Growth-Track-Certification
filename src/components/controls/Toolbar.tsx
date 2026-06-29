'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ToolbarProps } from '@/types/certificate'
import { UploadImage } from '../certificate/UploadImage'
import { Button } from '../ui/button'
import { FontSizeSlider } from './FontSizeSlider'
import { FontFamilySelect } from './FontFamilySelect'
import { TextColorPicker } from './TextColorPicker'
import { Footer } from '../layouts/Footer'

export function Toolbar({ certificate, setCertificate }: ToolbarProps) {
  return (
    <div className='flex flex-col h-full justify-between space-y-6'>
      <div className='space-y-6'>
        {/* Section 1: Recipient Identity */}
        <div className='space-y-2.5'>
          <Label
            htmlFor='recipient-name'
            className='text-xs font-semibold text-zinc-500 uppercase tracking-wider dark:text-zinc-400'
          >
            Graduand Details
          </Label>
          <Input
            id='recipient-name'
            value={certificate.name}
            placeholder='Enter recipient name'
            className='h-10 border-zinc-200 focus-visible:ring-indigo-500 dark:border-zinc-800'
            onChange={(e) =>
              setCertificate((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />
        </div>

        <hr className='border-zinc-100 dark:border-zinc-800' />

        {/* Section 2: Canvas Background / Template */}
        <div className='space-y-2.5'>
          <Label className='text-xs font-semibold text-zinc-500 uppercase tracking-wider dark:text-zinc-400'>
            Certificate Template
          </Label>
          <div className='grid gap-2'>
            <UploadImage setCertificate={setCertificate} />
            <Button
              variant='outline'
              size='sm'
              className='w-full text-xs text-zinc-600 border-zinc-200 hover:bg-zinc-50 dark:text-zinc-400 dark:border-zinc-800'
              onClick={() =>
                setCertificate((prev) => ({
                  ...prev,
                  image: '/templates/default.png',
                }))
              }
            >
              Reset to Default Layout
            </Button>
          </div>
        </div>

        <hr className='border-zinc-100 dark:border-zinc-800' />

        {/* Section 3: Typography Options */}
        <div className='space-y-4'>
          <Label className='text-xs font-semibold text-zinc-500 uppercase tracking-wider dark:text-zinc-400'>
            Typography Style
          </Label>

          <FontFamilySelect
            certificate={certificate}
            setCertificate={setCertificate}
          />

          <FontSizeSlider
            certificate={certificate}
            setCertificate={setCertificate}
          />

          <TextColorPicker
            certificate={certificate}
            setCertificate={setCertificate}
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}
