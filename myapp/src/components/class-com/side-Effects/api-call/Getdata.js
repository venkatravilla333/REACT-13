import React, { Component } from 'react'
import axios from 'axios'

export class Getdata extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isLoading: false,
      posts: [],
      error: null
    }
  }

  getData = () => {
      this.setState({isLoading: true})
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      console.log(res)
      this.setState({isLoading: false})
      this.setState({posts: res.data})
    })
    .catch((err) => {
      this.setState({isLoading: false})
      this.setState({error: err.message})
        console.log(err)
      })
    
  }

  // componentDidMount() {
  //   this.setState({isLoading: true})
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then((res) => {
  //     console.log(res)
  //     this.setState({isLoading: false})
  //     this.setState({posts: res.data})
  //   })
  //   .catch((err) => {
  //     this.setState({isLoading: false})
  //     this.setState({error: err.message})
  //       console.log(err)
  //     })
  // }
  render() {
    return (
      <div>
        <button onClick={this.getData}>get data</button>
        {
          this.state.isLoading ? <h2>Loading</h2> : this.state.error ? <h2>{this.state.error}</h2> :
            <div style={{display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
              {
                this.state.posts.map((post) => {
                  return <div style={{ margin:"10px", padding:"5px", width: "220px", boxShadow:"5px 5px 10px black", background: "yellow"}}>
                    <h4>Id: {post.id}</h4>
                    <h4>Title: {post.title}</h4>
                    <h4>Body: {post.body}</h4>
                    </div>
                })
              }
            </div>
        }
      </div>
    )
  }
}

export default Getdata