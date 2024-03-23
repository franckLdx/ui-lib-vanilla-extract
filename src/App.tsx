import { FC } from 'react'

import { appStyle } from './app.css.ts'
import { Button } from './components/button/Button.tsx'

export const App: FC = () => (
  <section className={appStyle}>
    <Button label='FOO' color={'brand'} />
  </section>
)