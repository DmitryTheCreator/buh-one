import React from "react";
import { Link } from "react-router-dom";
import "../styles/info.css";

const Info = ({history, title, name, casesRef}) => {
    return (
        <div className="info" ref={casesRef}>
            <div className="container">
                <div className="info__columns">
                    <div className="info__left-side">
                        <div className="info__history">{history}</div>
                        <div className="info__title">{title}</div>
                        <div className="info__name">{name}</div>
                        <div className="info__desc">
                            Lorem Ipsum - это текст-"рыба", часто используемый 
                            в печати и вэб-дизайне. Lorem Ipsum является 
                            стандартной "рыбой" для текстов на латинице с начала 
                            XVI века. В то время некий безымянный печатник создал 
                            большую коллекцию размеров и форм шрифтов, 
                            используя Lorem Ipsum для распечатки образцов. 
                            Lorem Ipsum не только успешно пережил без 
                            заметных изменений пять веков, но и перешагнул 
                            в электронный дизайн.
                        </div>
                    </div>
                    <div className="info__right-side">
                        <div className="info__grid">  
                            <div className="info__grid-cell">
                                <div className="info__grid-cell__count">90</div>
                                <div className="info__grid-cell__desc">Завершено крупных сделок</div>
                                <Link to="/" className="info__grid-cell__link">Все кейсы</Link>
                            </div>     
                            <div className="info__grid-cell">
                                <div className="info__grid-cell__count">90</div>
                                <div className="info__grid-cell__desc">Завершено крупных сделок</div>
                                <Link to="/" className="info__grid-cell__link">Все кейсы</Link>
                            </div>     
                            <div className="info__grid-cell">
                                <div className="info__grid-cell__count">90</div>
                                <div className="info__grid-cell__desc">Завершено крупных сделок</div>
                                <Link to="/" className="info__grid-cell__link">Все кейсы</Link>
                            </div>      
                            <div className="info__grid-cell">
                                <div className="info__grid-cell__count">90</div>
                                <div className="info__grid-cell__desc">Завершено крупных сделок</div>
                                <Link to="/" className="info__grid-cell__link">Все кейсы</Link>
                            </div>           
                        </div>
                    </div>
                </div>     
            </div>
        </div>
    );
}

export default Info;
