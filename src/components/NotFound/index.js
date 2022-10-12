import './index.css'
import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <div className="notfoundcontainer">
      <div className="notfound">
        <img
          alt="not found"
          src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
        />
        <h1>Page Not Found</h1>
        <p>we&apos;re sorry, the page you requested could not be found</p>
      </div>
    </div>
  </>
)
export default NotFound
