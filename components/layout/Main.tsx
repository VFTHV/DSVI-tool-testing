import Header from './Header'
import Footer from './Footer'
import { useAuth } from '../hooks/useAuth'

const layout = ({ children }) => {
  // auth protection




  return (
    <div className="min-h-screen bg-slate-200">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default layout
