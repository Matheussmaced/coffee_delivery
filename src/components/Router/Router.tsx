import { Route, Routes } from 'react-router-dom'

import { Home } from '../../pages/@Home'
import { Checkout } from '../../pages/Checkout'
import { Success } from '../../pages/Success'
import { DefaultLayout } from '../../layout/DefaultLayout'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="Success" element={<Success />} />
      </Route>
    </Routes>
  )
}
