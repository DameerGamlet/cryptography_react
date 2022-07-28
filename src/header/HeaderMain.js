import React, {Component} from 'react';

class HeaderMain extends Component {
    render() {
        return (
            <div className="mb-3">
                <header className="p-3 mb-3 border-bottom header_bg">
                    <div className="container">
                        <div
                            className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/"
                               className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                                <img src="logo.png" alt="" width="40" height="40"/>
                            </a>

                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                <li><a href="/" className="nav-link px-2 link-secondary">Главная</a></li>
                                <li><a href="/theory" className="nav-link px-2 link-dark">Теория</a></li>
                                <li><a href="/practice" className="nav-link px-2 link-dark">КриптографическиеМетоды</a></li>
                                <li><a href="/support" className="nav-link px-2 link-dark">Поддержка</a></li>
                            </ul>

                            <div className="dropdown text-end">
                                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                                    <button type="button" className="btn btn-primary">Sign-up</button>
                            </div>
                        </div>
                    </div>
                </header>

            </div>
        );
    }
}

export default HeaderMain;