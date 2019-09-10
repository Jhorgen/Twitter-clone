import React from 'react';
import Navbar from './Navbar';
import TwitterFeed from './TwitterFeed';
import FollowerRecommendations from './FollowerRecommendations';
import { Switch, Route } from 'react-router-dom';
import UserProfile from './UserProfile';
import Error404 from './Error404';
import NewTweetForm from './NewTweetForm';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTweetList: []
    };
    this.handleAddingNewTweetToList = this.handleAddingNewTweetToList.bind(this);
    this.changeLikes = this.changeLikes.bind(this);
  }

  handleAddingNewTweetToList(newTweet) {
    newTweet.likes = 0;
    var newMasterTweetList = this.state.masterTweetList.slice();
    newMasterTweetList.push(newTweet);
    this.setState({masterTweetList: newMasterTweetList});
  }

  changeLikes(tweetNumber, numLikes) {
    var newMasterTweetList = this.state.masterTweetList.slice();
    newMasterTweetList[tweetNumber].likes = numLikes

    this.setState({masterTweetList: newMasterTweetList});
  }

  render(){

    return(
      <div>
      <Navbar />
      <hr/>
      <Switch>
      <Route exact path='/' render={()=><TwitterFeed changeLikes={this.changeLikes}
        tweetList={this.state.masterTweetList} />} />
      <Route exact path='/profile' component={UserProfile} />
      <Route exact path='/newtweet' render={()=><NewTweetForm onNewTweetCreation={this.handleAddingNewTweetToList} />} />
      <Route component={Error404} />
      </Switch>
      </div>
    );
  }
}


export default App;


// component={Summary}
