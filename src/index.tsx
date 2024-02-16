/* @refresh reload */
import { render } from 'solid-js/web'

import { Route, Router } from '@solidjs/router'
import './index.css'
import Home from './routes/Home'
import { LogIn } from './routes/LogIn'

render(
  () => (
    <Router>
      <Route path="/diary" component={LogIn} />
      <Route path="/" component={Home} />
    </Router>
  ),
  document.getElementById('root') as HTMLElement,
)
