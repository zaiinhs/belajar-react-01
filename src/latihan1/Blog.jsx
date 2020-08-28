import React from 'react'
import './Blog.css'

const Blog = (props) => {
    return (
        <div className="blog">
            <img src="https://placeimg.com/640/480/arch" />
            <p>{props.tanggal}</p>
            <h3>{props.judul}</h3>
            <p>{props.deskripsi}</p>
        </div>
    )
}
export default Blog