import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <h1 className="col-12 text-center">
                                Ты сегодня покормил кота?
                            </h1>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;