import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
const buttonVariants = cva('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50', { variants:{ variant:{ default:'bg-ink text-white hover:-translate-y-0.5 hover:bg-black dark:bg-white dark:text-ink dark:hover:bg-zinc-100', outline:'border border-black/10 bg-white/60 hover:-translate-y-0.5 hover:border-black/20 dark:border-white/15 dark:bg-white/5 dark:hover:border-white/30', ghost:'hover:bg-black/5 dark:hover:bg-white/10', gold:'bg-gold text-ink hover:-translate-y-0.5 hover:brightness-105' }, size:{ default:'h-11 px-5', sm:'h-9 px-4 text-xs', lg:'h-13 px-7 text-base' } }, defaultVariants:{variant:'default',size:'default'} })
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>{asChild?:boolean}
export const Button=React.forwardRef<HTMLButtonElement,ButtonProps>(({className,variant,size,asChild=false,...props},ref)=>{const Comp=asChild?Slot:'button';return <Comp className={cn(buttonVariants({variant,size,className}))} ref={ref} {...props}/>})
Button.displayName='Button'
