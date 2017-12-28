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

let data = [
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

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card {...card} />)}
        </div>
    );
}

ReactDOM.render(<CardList cards={data}/>, mountNode);