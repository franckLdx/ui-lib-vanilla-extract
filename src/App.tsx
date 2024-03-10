import { FC } from 'react'

import { appStyle } from './app.css.ts'
import { Button } from './button/Button.tsx'

export const App: FC = () => (
  <section className={appStyle}>
    <Button label='FOO' variant={'brand'} />
  </section>
)