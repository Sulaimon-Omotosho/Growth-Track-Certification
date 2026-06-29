'use client'

import { Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ToolbarProps } from '@/types/certificate'

interface Props {
  setCertificate: ToolbarProps['setCertificate']
}

export function UploadImage({ setCertificate }: Props) {
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const imageUrl = URL.createObjectURL(file)

    setCertificate((prev) => ({
      ...prev,
      image: imageUrl,
    }))
  }

  return (
    <>
      <input
        id='certificate-upload'
        type='file'
        accept='image/*'
        hidden
        onChange={handleUpload}
      />

      <Button
        className='w-full h-9 text-xs border-zinc-200 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300'
        variant='outline'
        asChild
      >
        <label
          htmlFor='certificate-upload'
          className='cursor-pointer flex items-center justify-center'
        >
          <Upload className='mr-2 h-3.5 w-3.5 text-zinc-400' />
          Upload Template
        </label>
      </Button>
    </>
  )
}
