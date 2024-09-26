import './MainMenu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from './top';

function MainMenu() {
    return (
        <div className="main-grid">
            <div className='main-grid-item'>
                <div className='titulo-grid'>
                    <div className="title">
                        <h1><b>Cycling</b></h1>
                    </div>
                    <div className="title">
                        <h1><b>Running</b></h1>
                    </div>
                    <div className="title">
                        <h1><b>Swimming</b></h1>
                    </div>

                </div>
            </div>

            <div className='main-grid-item'>
        <Top />
            </div>

            <div className='botton-grid-item'>

            </div>
        </div>
    );
}

export default MainMenu;