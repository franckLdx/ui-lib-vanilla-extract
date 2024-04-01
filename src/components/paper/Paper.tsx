import { FC, ReactNode } from 'react'
import { PperVariants, paperVariants } from './paper.css'

export interface PaperProps {
  variant: PperVariants
  children: ReactNode
}

export const Paper: FC<PaperProps> = ({ variant, children }) => (
  <div className={paperVariants[variant]}>
    {children}
  </div>
)