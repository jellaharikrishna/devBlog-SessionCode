import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

class BlogsList extends Component {
  state = {blogsData: []}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      topic: eachData.topic,
      title: eachData.title,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
      author: eachData.author,
    }))
    this.setState({blogsData: updatedData})
  }

  render() {
    const {blogsData} = this.state
    return (
      <div className="blog-list-container">
        {blogsData.map(item => (
          <BlogItem blogData={item} key={item.id} />
        ))}
      </div>
    )
  }
}

export default BlogsList
