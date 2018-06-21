import React, { Component } from 'react';
import SocialCard from '../components/SocialCard.jsx';
import dummydata from '../dummydata.jsx';

class SocialCardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: dummydata[0],
      likeActive : false
    }
    this.handleLikeActive = this.handleLikeActive.bind(this);
  }

  handleLikeActive() {
    this.setState((prevState) => {
      return { likeActive: !prevState.likeActive};
    });
    console.log("Clicked!");
  }

  render() {
    return (
    <SocialCard 
      profileImageUrl={this.state.data.profileImageUrl}
      username={this.state.data.username}
      handle={this.state.data.handle}
      date={this.state.data.date}
      tweetText={this.state.data.tweetText}
      comments={this.state.data.stats.comments}
      retweets={this.state.data.stats.retweets}
      likes={this.state.data.stats.likes}
      likeActive={this.state.likeActive}
      handleLikeActive={this.handleLikeActive}
      imageTitle={this.state.data.imageTitle}
      imageText={this.state.data.imageText}
      imageLink={this.state.data.imageLink}
      key={this.state.data.id}/>
    );
  }
}

export default SocialCardContainer;
