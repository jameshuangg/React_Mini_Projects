import React from 'react';
import image from '../images/profileimage1.jpg';
import urlImage from '../images/tweetimage1.jpeg';

const SocialCard = props => (
  <div className={"social-card"}>
    <header className={"social-card__content"}>
      <a className={"header__a--bold"}>{props.username}</a>
      <span className={"header__span"}> {props.handle}</span>
      <span className={"header__span"}> · {props.date}</span>
    </header>
    <aside className={"aside"}>
      <img className={"aside__image--profile"} src={image} alt="User's profile"/>
    </aside>
    <section className={"social-card__content"}>
      <p>{props.tweetText}</p>
      <figure style={{ margin: 0 }}>
        <img className={"tweet__image"} src={urlImage} alt="Tweet" />
        <div className={"caption"}>
          <h1 className={"caption__title"}>{props.imageTitle}</h1>
          <p className={"caption__text"}>{props.imageText}</p>
          <p className={"caption__link"}>{props.imageLink}</p>
        </div>
      </figure>
    </section>
    <footer className={"social-card__footer"}>
      <a className={"stat-container icon--clickable"}>
        <i className={"far fa-comment"}></i>
        <span className={"icon-label"}>{props.comments}</span>
      </a>
      <a className={"stat-container icon--clickable"}>
        <i className={"fas fa-retweet"}></i>
        <span className={"icon-label"}>{props.retweets}</span>
      </a>
      <a className={props.likeActive ? "stat-container red icon--clickable" : "stat-container icon--clickable"} onClick={props.handleLikeActive}>
        <i className={"fas fa-heart"}></i>
        <span className={"icon-label"}>{props.likes}</span>
      </a>
    </footer>
  </div>
);



export default SocialCard;
