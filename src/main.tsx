import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallback={<div className='h-full flex justify-center items-center text-4xl'>something went wrong</div>}>

    <App />
  </ErrorBoundary>
)
