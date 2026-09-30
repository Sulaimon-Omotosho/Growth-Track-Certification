'use client'

import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { MapPin, Award, ArrowRight } from 'lucide-react'

export default function Home() {
  const locations = [
    {
      name: 'Gbagada',
      description: 'Generate and manage certificates for the Gbagada center.',
      href: '/gbagada',
      badge: 'Active',
      color: 'from-blue-500/10 via-indigo-500/5 to-transparent',
      borderColor: 'hover:border-blue-500/50',
      btnColor: 'bg-blue-600 hover:bg-blue-700 text-white',
    },
    {
      name: 'Ghana',
      description: 'Generate and manage certificates for the Ghana center.',
      href: '/ghana',
      badge: 'Active',
      color: 'from-emerald-500/10 via-teal-500/5 to-transparent',
      borderColor: 'hover:border-emerald-500/50',
      btnColor: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    },
  ]

  return (
    <MainLayout>
      <div className='min-h-[calc(100vh-4rem)] bg-zinc-50 dark:bg-zinc-950 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto w-full'>
          {/* Header Section */}
          <div className='text-center mb-12'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/60 dark:bg-zinc-800/60 text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-4'>
              <Award className='w-4 h-4 text-zinc-500' />
              <span>Certificate Studio Hub</span>
            </div>
            <h1 className='text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50'>
              Select Location Generator
            </h1>
            <p className='mt-3 text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto'>
              Choose a campus or location below to start customizing and issuing
              graduand certificates.
            </p>
          </div>

          {/* Location Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {locations.map((location) => (
              <div
                key={location.name}
                className={`relative group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${location.color} ${location.borderColor}`}
              >
                <div className='flex items-center justify-between mb-4'>
                  <div className='p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100'>
                    <MapPin className='w-6 h-6' />
                  </div>
                  <span className='text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700'>
                    {location.badge}
                  </span>
                </div>

                <h2 className='text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2'>
                  {location.name} Center
                </h2>
                <p className='text-sm text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed'>
                  {location.description}
                </p>

                <Link
                  href={location.href}
                  className={`inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm ${location.btnColor}`}
                >
                  Open {location.name} Studio
                  <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
