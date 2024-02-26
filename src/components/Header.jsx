import {svgCampana, svgMensajes} from '../utils/svg'


const Header = () => {
    return(
        <div className='headerdiv'>
          <div className='title'>
            <h1>
              Sitios
            </h1>
          </div>
          <div className='notification'>
            <div className='mensajes'>
                {svgMensajes('black')}
                <div className='badge'>
                    1
                </div>
            </div>
            <div className='campana'>
                {svgCampana('black')}
                <div className='badge'>
                    4
                </div>
            </div>
            <div className='userMarketing'>
                <h2>User</h2>
                <h3>Marketing</h3>
            </div>
          </div>
        </div>
    )
}

export default Header;