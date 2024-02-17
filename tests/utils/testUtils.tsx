import { cleanup, render, RenderOptions } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

const customRender = (ui: React.ReactElement, options: RenderOptions = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: BrowserRouter,
    ...options,
  })

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }
