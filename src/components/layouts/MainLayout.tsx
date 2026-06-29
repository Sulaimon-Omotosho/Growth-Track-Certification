// import { ReactNode } from 'react'
// import { Footer } from './Footer'
// import { Header } from './Header'

// interface Props {
//   children: ReactNode
// }

// export function MainLayout({ children }: Props) {
//   return (
//     <div className='flex min-h-screen flex-col bg-muted/20'>
//       <Header />

//       <main className='flex-1'>{children}</main>

//       <Footer />
//     </div>
//   )
// }
import { ReactNode } from 'react'
import { Header } from './Header'

interface Props {
  children: ReactNode
}

export function MainLayout({ children }: Props) {
  return (
    // Sets up a strict, non-scrolling screen height wrapper
    <div className='flex h-screen w-screen flex-col bg-zinc-50 dark:bg-zinc-950 overflow-hidden select-none'>
      {/* Global Studio Top Header */}
      <Header />

      {/* Main workspace container fills exactly the remaining height */}
      <main className='flex-1 flex flex-col min-h-0 relative'>{children}</main>
    </div>
  )
}
