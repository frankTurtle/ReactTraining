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
            <Card name="Barret J. Nobel"
                avatarUrl="https://avatars3.githubusercontent.com/u/5667044?v=4"
                company="Canon USA" />
        </div>
    );
}

ReactDOM.render(<CardList />, mountNode);