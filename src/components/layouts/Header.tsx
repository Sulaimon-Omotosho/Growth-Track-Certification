import { FileBadge2 } from 'lucide-react'
import Image from 'next/image'

export function Header() {
  return (
    <header className='relative z-10 h-16 border-b bg-white dark:bg-zinc-900 px-6 flex items-center justify-between shrink-0 shadow-lg shadow-zinc-200/80 dark:shadow-none'>
      <div className='flex items-center gap-3'>
        <div className='p-1 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg text-indigo-600 dark:text-indigo-400'>
          <Image
            src='/logo hicc.jpeg'
            alt='logo'
            width={32}
            height={32}
            priority
            className='h-10 w-10 object-contain'
          />
        </div>
        <div>
          <h1 className='text-md font-semibold text-zinc-900 dark:text-zinc-50 leading-none mb-1'>
            Growth Track Studio
          </h1>
          <p className='text-xs text-zinc-500 dark:text-zinc-400 hidden sm:block'>
            Emergency graduation certificate builder
          </p>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <span className='inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/10 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20'>
          <span className='h-1.5 w-1.5 rounded-full bg-emerald-500' />
          Ready to Issue
        </span>
      </div>
    </header>
  )
}
