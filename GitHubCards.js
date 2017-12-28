const Card = (props) => {
    return (
        <div>
            <img width="75" src="https://avatars3.githubusercontent.com/u/5667044?v=4" />
            <div style={{ display: 'inline-block', marginLeft: 10 }}>
                <div>Barret J. Nobel</div>
                <div>Canon USA</div>
            </div>
        </div>
    );
};

const CardList = (props) => {
    return (
        <div>
            <Card />
        </div>
    )
}

ReactDOM.render(<Card />, mountNode);