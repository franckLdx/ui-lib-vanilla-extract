import { FC, ReactNode } from 'react'
import { Variant } from '../../styles/variants/variants.css'
import { BorderType, borderColorVariants, borderTypeVariants } from '../../styles/variants/border.css'
import { colorVariants } from '../../styles/variants/colors.css'

export interface PaperProps {
  variant: Variant
  borderType?: BorderType
  children: ReactNode
}

export const Paper: FC<PaperProps> = ({ variant, borderType = 'none', children }) => (
  <div className={`${colorVariants[variant]} ${borderColorVariants[variant]} ${borderTypeVariants[borderType]}`}>
    {children}
  </div>
)