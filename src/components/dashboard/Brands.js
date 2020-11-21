import React, { Component } from "react";
import ReactPaginate from 'react-paginate';
import BeercraftService from "../services/BeercraftService";
import ImageService from "../services/ImageService";
import Brand from "./Brand";

class Brands extends Component {

    constructor() {
        super()
        this.state = {
            offset: 0,
            data: [],
            images: [],
            perPage: 20,
            currentPage: 0
        }
    }

    async receivedData() {
        BeercraftService.getAllData()
        .then(res => {
            const slice = res.slice(this.state.offset, this.state.offset+this.state.perPage)
            const postData = slice.map((item, index) => <React.Fragment>
                <div className="col-12 col-lg-6">
                    <Brand key={index} image={this.state.images[index%5].image} item={item}/></div>
            </React.Fragment>)
            this.setState({
                pageCount: Math.ceil(res.length/this.state.perPage),
                postData
            })
        })
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage*this.state.perPage;
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        })
    }

    async componentDidMount() {
        const images = await ImageService.getAllImages()
        this.setState({images: images});
        this.receivedData();
    }

    render() {
        return (
            <div className = "container">
                 <div className = "row">
                    {this.state.postData}
                </div>
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
             </div>
        )
    }
}

export default Brands;