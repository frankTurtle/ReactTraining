const Card = (props) => {
    return (
        <div>
            <img width="75" src={props.avatarUrl} />
            <div style={{ display: 'inline-block', marginLeft: 10 }}>
                <div>{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    );
};

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card {...card} />)}
        </div>
    );
}

class Form extends React.Component {
    state = { userName: '' }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Event form submit', this.state.userName);
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(res => {
                console.log(res);
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    value={this.state.userName}
                    onChange={(event) => this.setState({ userName: event.target.value })}
                    placeholder="Github Username" required />
                <button>Add Card</button>
            </form>
        );
    }
}

class App extends React.Component {
    state = {
        cards: [
            {
                name: "Barret J. Nobel",
                avatarUrl: "https://avatars3.githubusercontent.com/u/5667044?v=4",
                company: "Canon USA"
            },
            {
                name: "Barret J. Nobel2",
                avatarUrl: "https://avatars3.githubusercontent.com/u/5667044?v=4",
                company: "Canon USA2"
            },
            {
                name: "Barret J. Nobel3",
                avatarUrl: "https://avatars3.githubusercontent.com/u/5667044?v=4",
                company: "Canon USA3"
            },
        ]
    };

    render() {
        return (
            <div>
                <Form />
                <CardList cards={this.state.cards} />
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);