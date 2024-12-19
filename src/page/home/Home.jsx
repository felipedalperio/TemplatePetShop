import './home.css'
import Header from '../../components/header/Header'
import Options from '../../components/options/Options'
import About from '../../components/about/About'
import PhotoGallery from '../../components/photoGallery/PhotoGallery'
import Comments from '../../components/comments/Comments'

export default function Home() {
  return (
    <div className="home">
      <Header/>
      <div className="marginGroup">
        <Options/>
        <About />
        <PhotoGallery />

        <Comments />
      </div>
    </div>
  )
}
