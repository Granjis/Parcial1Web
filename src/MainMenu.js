import './MainMenu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from './top';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import UserSection from './userSection';
import { FormattedMessage } from 'react-intl';


function MainMenu() {
    return (
        <Container className="main-grid">
            <Row className='main-title-grid-item'>
                <div className='titulo-grid'>
                    <div className="title">
                        <h1><b><FormattedMessage id = "cycling"/></b></h1>
                    </div>
                    <div className="title">
                        <h1><b><FormattedMessage id = "running"/></b></h1>
                    </div>
                    <div className="title">
                        <h1><b><FormattedMessage id = "swimming"/></b></h1>
                    </div>

                </div>
            </Row>

            <Row className='main-grid-item'>
                <Top />
            </Row>

            <Row className='botton-grid-item' >
                <UserSection />
            </Row>
        </Container>
    );
}

export default MainMenu;