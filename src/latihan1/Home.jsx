import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Blog from './Blog'

class Home extends React.Component {
    render() {
        return <div>
            <Header />
            <Blog
                tanggal="28 Agustus 2020"
                judul="Belajar Javascript"
                deskripsi="Lorem ipsum dolor sit consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore" />
            <Blog
                tanggal="29 Agustus 2020"
                judul="Belajar React JS"
                deskripsi="Lorem ipsum dolor sit consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore" />
            <Blog
                tanggal="30 Agustus 2020"
                judul="Belajar Next JS"
                deskripsi="Lorem ipsum dolor sit consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore" />
            <Blog
                tanggal="31 Agustus 2020"
                judul="Belajar Gatsby"
                deskripsi="Lorem ipsum dolor sit consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore" />
            <Footer />
        </div>
    }
}
export default Home