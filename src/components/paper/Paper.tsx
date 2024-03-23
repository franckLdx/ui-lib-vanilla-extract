import { FC, ReactNode } from 'react'
import { paperVariants } from './paper.css'
import { BorderType } from '../../styles/border.css'
import { ColorVariant } from '../../styles/colors.css'

export interface PaperProps {
  color: ColorVariant
  borderType?: BorderType
  children: ReactNode
}

export const Paper: FC<PaperProps> = ({ color, children }) => (
  <div className={`${paperVariants[color]}`}>
    {children}
  </div>
)