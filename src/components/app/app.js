import React from "react";
export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      items: [],
      names: [],
      // posts: [],
    };
  }
  componentDidMount() {
    this.getItems();
    this.getNames();
    // this.getPosts();

  }

  getItems = () => {
    this.setState({ isLoading: true });
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then(response => { return response.json(); })
      .then(({ abilities }) => {
        this.setState({ items: abilities });
        console.log(abilities)
      });
  };

  getNames = () => {
    this.setState({ isLoading: true });
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
      .then(response => { return response.json(); })
      .then(({ results }) => {
        this.setState({ names: results });
        console.log(results)
      });
  };


  // getPosts = () => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(({ posts }) => {
  //       this.setState({ posts: posts })
  //       console.log(posts)
  //     })





  render() {
    const { items, names, posts } = this.state;


    return (
      <div>
        {items.map(item => (
          <div >
            Pokemon name: {item.ability.name}
            <div>
              URL: {item.url}
            </div>

          </div>

        ))}
        <h1>hello</h1>
        {names.map(item => (
          <div >
            Pokemon name: {item.name}
          </div>

        ))}
        {/* <h1>hello</h1>
          {posts.map(post => (
            <div >
              title: {post.title}
            </div>

          ))} */}

      </div>
    )
  };

};
