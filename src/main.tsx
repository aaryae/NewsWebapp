import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallback={<div className='h-[100vh] w-[100vh] flex justify-center items-center text-12xl'>OOPS, page not found👀</div>}>
    <App />
  </ErrorBoundary>
)
