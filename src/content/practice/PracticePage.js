import React, {Component} from 'react';

class PracticePage extends Component {
    render() {
        return (
            <div>
                <h1>Криптографические методы</h1>

                <ul>
                    <li className="li_size"><a href="/practice/caesar">Цезарь</a></li>
                    <li className="li_size">RSA</li>
                    <li className="li_size">...</li>
                </ul>

            </div>
        );
    }
}

export default PracticePage;