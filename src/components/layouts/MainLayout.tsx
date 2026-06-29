import { ReactNode } from 'react'
import { Header } from './Header'

interface Props {
  children: ReactNode
}

export function MainLayout({ children }: Props) {
  return (
    <div className='flex h-screen w-screen flex-col bg-zinc-50 dark:bg-zinc-950 overflow-hidden select-none'>
      {/* Global Studio Top Header */}
      <Header />

      <main className='flex-1 flex flex-col min-h-0 relative'>{children}</main>
    </div>
  )
}
