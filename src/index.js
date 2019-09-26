import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from  './components/Comment';
import ApprovalCard from './components/ApprovalCard';

class App extends React.Component {
    state = {
        image: faker.image.avatar(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        comment: "It's Awesome :)",
        date: faker.date.past().toString()
    }

    render() {

        return (
            <div className='ui container comments'>
                <ApprovalCard>
                    <h4>Warning!</h4>
                    Are you sure you want to do this ?
                </ApprovalCard>
                <ApprovalCard>
                    <Comment 
                        author="Sam" 
                        timeAgo="Today at 4:45PM" 
                        content = "Nice Blog Post!" 
                        avatar={faker.image.avatar()}
                    />
                </ApprovalCard>
                <ApprovalCard>
                    <Comment 
                        author="Alex" 
                        timeAgo="Today at 2:00AM" 
                        content = "I like the subject" 
                        avatar={faker.image.avatar()}
                    />
                </ApprovalCard>
                <ApprovalCard>
                    <Comment 
                        author="Jane" 
                        timeAgo="Yesterday at 5:00PM" 
                        content = "I like the writing" 
                        avatar={faker.image.avatar()}
                    />
                </ApprovalCard>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));