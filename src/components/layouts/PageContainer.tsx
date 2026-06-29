import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function PageContainer({ children }: Props) {
  return (
    <div className='mx-auto w-full max-w-7xl px-4 py-6 md:px-6'>{children}</div>
  )
}
