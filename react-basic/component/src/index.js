import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

// import components
import Segment from './components/Segment';
import Message from './components/Message';
import ApprovalCard from './components/ApprovalCard';
import CommentDetail from './components/CommentDetail';

// class 표현
class App extends React.Component {
    state = {
        comments: [],
        paragraph: faker.lorem.paragraph(),
    };

    handleAddComment = () => {
        const newComment = {
            author: faker.name.firstName(),
            avatar: faker.image.avatar(),
            time: faker.date.recent().toLocaleString(),
            body: faker.lorem.sentence(),
        };
        this.setState({ comments: [newComment, ...this.state.comments] });
    }
    
    render() {
        return (
            <>
                <Segment>
                    <div className="ui icon header"><i className="pdf file outline icon">No Document</i></div>
                    <div className="ui primary button">Add Document</div>
                </Segment>
                <Segment>
                    <div className="ui header">For your information!</div>
                    <p>{this.state.paragraph}</p>
                </Segment>

                <Message header="회원약관변경" body="약관이 변경되었습니다. 동의하실거죠?" />

                <div className="ui container comments">
                    <button className="ui primary button" onClick={this.handleAddComment}>코멘트 추가하기</button>
                    <ApprovalCard>
                        <h3>오늘 빡공각?</h3>
                    </ApprovalCard>
                    {this.state.comments.map((comment) => {
                        return (
                            <ApprovalCard key>
                                <CommentDetail {...comment} />
                            </ApprovalCard>
                        )
                    })}
                </div>
            </>

        );
    }
};

// const App = () => {
//     return (
//         <>
//             <Segment>
//                 <div className="ui icon header"><i className="pdf file outline icon">No Document</i></div>
//                 <div className="ui primary button">Add Document</div>
//             </Segment>
//             <Segment>
//                 <div className="ui header">For your information!</div>
//                 <p>{faker.lorem.paragraph()}</p>
//             </Segment>

//             <Message header="회원약관변경" body="약관이 변경되었습니다. 동의하실거죠?" />

//             <div className="ui container comments">
//                 <ApprovalCard>
//                     <CommentDetail
//                         author={faker.name.firstName()}
//                         time={faker.date.recent().toLocaleString()}
//                         body={faker.lorem.sentence}
//                         avatar={faker.image.avatar()} />
//                 </ApprovalCard>
//                 <ApprovalCard>
//                     <CommentDetail
//                         author={faker.name.firstName()}
//                         time={faker.date.recent().toLocaleString()}
//                         body={faker.lorem.sentence}
//                         avatar={faker.image.avatar()} />
//                 </ApprovalCard>
//             </div>

//         </>
//     );
// }

ReactDOM.render(<App />, document.querySelector("#root"));