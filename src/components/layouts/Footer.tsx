export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800/60 flex flex-col gap-1.5 items-center justify-center w-full'>
      <p className='text-center text-[11px] font-medium tracking-wide text-zinc-400 dark:text-zinc-500 uppercase'>
        Built with ❤️ for GrowthTrack
      </p>

      <p className='text-center text-[10px] font-medium tracking-wider text-zinc-400 dark:text-zinc-500 uppercase'>
        © {currentYear} Sulaimon Omotosho. All rights reserved.
      </p>
    </footer>
  )
}
