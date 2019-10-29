import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

// const data = [
//     { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
//     { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
//     { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
//     { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
//     { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
//     { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
// ];

class App extends React.Component {
    state = {
        data: null,
        keyword: "",
        isChecked: false,
    };
    async getData(url) {
        const res = await axios.get(url);
        const { data } = res; // const data = res.data;
        console.log(data);
        data.sort((next, prev) => {
            if (prev.category > next.category) return -1;  // -1이면 앞뒤 바꾸기!
            if (prev.category < next.category) return 1;
            return 0;
        });
        this.setState({ data: data }); // this.setState({data});


        // function unique(arr) { // key값중 중복 제거 = 총 key 종류 개수
        //     return arr.reduce((acc, el) => {
        //         if (!acc.find(accEl => accEl.category === el.category)) {
        //             acc.push(el);
        //         }
        //         return acc;
        //     }, []);
        // }
        // const categoryKey = unique(data);
        // console.log(categoryKey);

        // const sortedData = [];
        // categoryKey.map((key) => {   // 골라진 key에 맞는것만 순서대로 push
        //     // console.log(key);
        //     for (var i = 0; i < data.length; i++) {
        //         if (data[i].category === key.category) {
        //             sortedData.push(data[i]);
        //         }
        //     }
        // });
        // console.log(sortedData);

        // this.setState({ data: sortedData });
    }

    componentDidMount() {
        //API 호출로 data 가져오기~
        const url = "https://frozen-ocean-08299.herokuapp.com";
        this.getData(url);
    }

    handleKeywordChange = (userInput) => {
        console.log(this.state.keyword);
        this.setState({ keyword: userInput });
    }
    handleChecked = () => {
        this.setState({ isChecked: !this.state.isChecked });
        console.log(this.state.isChecked);
    }

    render() {
        return (
            <>
                <SearchBar
                    handleKeywordChange={this.handleKeywordChange}
                    handleChecked={this.handleChecked} />
                <ProductTable
                    data={this.state.data}
                    keyword={this.state.keyword}
                    isChecked={this.state.isChecked} />
            </>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));