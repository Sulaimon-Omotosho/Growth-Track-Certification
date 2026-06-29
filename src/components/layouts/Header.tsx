// import { FileBadge2 } from 'lucide-react'

// export function Header() {
//   return (
//     <header className='border-b bg-background'>
//       <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-6'>
//         <div className='flex items-center gap-3'>
//           <FileBadge2 className='h-8 w-8 text-primary' />

//           <div>
//             <h1 className='text-xl font-bold'>Certificate Generator</h1>

//             <p className='text-sm text-muted-foreground'>
//               Create beautiful certificates in seconds
//             </p>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }
import { FileBadge2 } from 'lucide-react'

export function Header() {
  return (
    <header className='h-16 border-b bg-white dark:bg-zinc-900 px-6 flex items-center justify-between shrink-0'>
      <div className='flex items-center gap-3'>
        <div className='p-2 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg text-indigo-600 dark:text-indigo-400'>
          <FileBadge2 className='h-6 w-6' />
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

      {/* Optional: Add a subtle badge or user profile area here later */}
      <div className='flex items-center gap-4'>
        <span className='inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/10 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20'>
          <span className='h-1.5 w-1.5 rounded-full bg-emerald-500' />
          Ready to Issue
        </span>
      </div>
    </header>
  )
}
