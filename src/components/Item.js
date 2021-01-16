import React from 'react'
import './Item.css'
import Button from './Button'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Item = ({ title, desc, backgroundImg, leftBtnTxt, rightBtnTxt, twoButtons, first}) => {
    return (
        <div className="item" style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className="item__container">
                <div className="item__text">
                    <p>{title}</p>
                    <div className="item__textDesc">
                        <p>{desc}</p>
                    </div>
                </div>

                <div className="item__lowerThird">
                    <div className={`item__buttons ${twoButtons === 'false' ? 'item__oneButton' : ''}`}>
                        <Button imp="primary" text={leftBtnTxt}/>
                        {twoButtons && (
                            <Button imp="secondary" text={rightBtnTxt} />
                        )}
                    </div>
                    
                    {first && (
                        <div className="item__expand">
                            <ExpandMoreIcon fontSize="large"/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Item
