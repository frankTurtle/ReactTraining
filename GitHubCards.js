const Card = (props) => {
    return (
        <div>
            <img width="75" src={props.avatar_url} />
            <div style={{ display: 'inline-block', marginLeft: 10 }}>
                <div>{props.name}</div>
                <div>{props.company}</div>
                <div>{props.bio}</div>
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
                this.props.onSubmit(res.data);
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
        cards: []
    };

    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }));
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.addNewCard} />
                <CardList cards={this.state.cards} />
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);