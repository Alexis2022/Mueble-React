import React from 'react'
import "../../assets/style/footer.css";


function FooterSuperior({ titulo, li1, li2, li3, li4, li4t }) {
    return (
        <nav className="footer-nav">
            <ul className="footer-nav-ul">
                <h4 className="footer-h4">{titulo}</h4>
                <li className='footer-ul-li'>
                    <a href="" className="footer-ul-a">{li1}</a>
                </li>
                <li className='footer-ul-li'>
                    <a href="" className="footer-ul-a">{li2}</a>
                </li>
                <li className='footer-ul-li'>
                    <a href="" className="footer-ul-a">{li3}</a>
                </li>
                {li4t ? <li className='footer-ul-li'>
                    <a href="" className="footer-ul-a">{li4}</a>
                </li> : ""}
            </ul>
        </nav>
    )
}

export default FooterSuperior