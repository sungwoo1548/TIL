import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash'; // axios create

export default class App extends Component {
    state = {
        keyword: "",
        images: [],
        searchedResult: 0,
        page: 1,
    };

    handleKeyword = (userInput) => {
        // console.log(userInput);
        this.setState({ keyword: userInput, page: 1 });
    }

    onSubmit = async () => {
        try {
            const reponse = await unsplash.get("search/photos", {   // ==> get("search/photos?query=${this.state.keyword}" 같음
                params: {
                    query: this.state.keyword,
                    page: this.state.page,
                    per_page: 5,
                },
            });
            console.log(reponse);
            this.setState({ images: reponse.data.results, searchedResult: reponse.data });
        } catch (error) {
            console.error(error);
        }

    }

    goNextPage = async () => {
        await this.setState({ page: this.state.page + 1 });
        this.onSubmit();
    }
    goPrevPage = async () => {
        if (this.state.page <= 1) { this.setState({ page: 1 }); return alert("첫 페이지 입니다."); }
        await this.setState({ page: this.state.page - 1 });
        this.onSubmit();
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar handleKeyword={this.handleKeyword} onSubmit={this.onSubmit} />
                <div className="ui container">
                    <label htmlFor="total">검색 결과 : {this.state.searchedResult.total} 개</label>
                </div>
                <div className="ui container">
                    <label htmlFor="page">현재 페이지 : {this.state.page} / {this.state.searchedResult.total_pages}</label>
                </div>
                <div className="ui container" style={{ display: "flex", justifyContent: "center" }}>
                    {
                        this.state.page === 1
                            ? null
                            : <button className="ui button" onClick={this.goPrevPage}>prev</button>
                    }
                    <ImageList images={this.state.images} />
                    {
                        this.state.images.length === 0
                            ? null
                            : <button className="ui button" onClick={this.goNextPage}>next</button>
                    }
                </div>
            </div>
        )
    }
}
