import * as React from 'react'; import { cn } from '@/lib/utils'
export function Card({className,...p}:React.HTMLAttributes<HTMLDivElement>){return <div className={cn('rounded-3xl border border-black/8 bg-white/70 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/[.045]',className)} {...p}/>} 
export function CardContent({className,...p}:React.HTMLAttributes<HTMLDivElement>){return <div className={cn('p-6',className)} {...p}/>} 
