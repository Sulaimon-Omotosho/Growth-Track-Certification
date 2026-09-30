'use client'

import { useState, useEffect } from 'react'

interface EditableDateFieldProps {
  initialDate?: string
  className?: string
  onChange?: (newDate: string) => void
}

export function EditableDateField({
  initialDate,
  className = '',
  onChange,
}: EditableDateFieldProps) {
  const [dateText, setDateText] = useState('')

  useEffect(() => {
    if (initialDate) {
      setDateText(initialDate)
    } else {
      const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      setDateText(today)
    }
  }, [initialDate])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setDateText(val)
    if (onChange) onChange(val)
  }

  return (
    <input
      type='text'
      value={dateText}
      onChange={handleChange}
      className={`bg-transparent border-b border-transparent hover:border-zinc-300 focus:border-zinc-500 focus:outline-none text-center font-serif text-zinc-900 transition-colors ${className}`}
      aria-label='Certificate Date'
    />
  )
}
