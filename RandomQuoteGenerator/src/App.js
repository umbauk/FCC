import React, { Component } from 'react';
import './App.css';

//To do
// enable Twitter button

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    };
    this.fetchQuote = this.fetchQuote.bind(this);
  }

  fetchQuote() {
    let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    let randomNumber = 0;

    fetch(url).then((response) => {
      //setState to response
      return response.json();
    }).then((json) => {
      console.log(json);
      randomNumber = Math.floor(Math.random() * json.quotes.length);
      this.setState({
        quote: json.quotes[randomNumber].quote,
        author: json.quotes[randomNumber].author
      });
    });
  }

  componentWillMount() {
    this.fetchQuote();
    
  }

  componentDidMount() {
    const script = document.createElement("script");

        script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
        script.async = true;

        document.body.appendChild(script);
  }

  render() {
    let tweetLink = 'https://twitter.com/intent/tweet?text=' + this.state.quote;
    return (
      <div class="container-fluid">
        <div id='wrapper'>
          <div id="quote-box">
            <div id="text">
              <p><i>"{this.state.quote}"</i></p>
            </div>
            <div id="author">
              <p>- {this.state.author}</p>
            </div>
            <div id="buttons">
              <button class='btn btn-outline-light' id='new-quote' onClick={this.fetchQuote}>New quote</button>
              <a id='tweet-quote' href={tweetLink}><button class='btn btn-outline-light'>
              Tweet</button></a>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
