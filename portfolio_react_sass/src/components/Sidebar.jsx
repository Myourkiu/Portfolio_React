import '../styles/components/sidebar.sass'

import Avatar from '../img/FotoCurriculo.jpg'

import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return <aside id="sidebar">
      <img src={Avatar} alt="foto" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href='Curriculo.pdf' download className="btn">Download currículo</a>
    </aside>
  
}

export default Sidebar