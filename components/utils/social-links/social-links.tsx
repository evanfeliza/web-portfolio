import React from 'react'
import classNames from 'classnames';

type Props = {}

const SocialLinks = ({ orientation }: { orientation: 'vertical' | 'horizontal' | 'none'; }) => {
    return (


        <ul className={classNames({ menu: true, "menu menu-horizontal lg:menu-vertical": orientation === "vertical", "menu-vertical lg:menu-horizontal": orientation === "horizontal", "menu-horizontal": orientation === "none" })}>
            <li>
                <a>
                    <i className="fi fi-brands-facebook"></i>
                </a>
            </li>
            <li>
                <a>
                    <i className="fi fi-brands-linkedin"></i>
                </a>
            </li>
            <li>
                <a>
                    <i className="fi fi-brands-google"></i>
                </a>
            </li>
        </ul>

    )
}

export default SocialLinks