import lnkdnIcon from '../assets/lnkdn-icon.svg'
import githubIcon from '../assets/github-icon.svg'
import './Info.css'

function Info() {
  return (
    <>
      <div >
        <a href="https://linkedin.com/in/hadassamedeiros" target="_blank">
          <img src={lnkdnIcon} className="logo linkedin-profile" alt="React logo" />
        </a>
        <a href="https://github.com/haudacia" target="_blank">
          <img src={githubIcon} className="logo linkedin-profile" alt="React logo" />
        </a>
      </div>

      <h1>Hadassa Medeiros</h1>
      <ul className='personal-info'>
        <li>/ fullstack developer / architect and urbanist</li>
        <li>hadassa.m.lima@gmail.com</li>
        <li>Barcelona - Spain</li>
      </ul>
      <div className="info">
      </div>
    </>
  )
}

export default Info
