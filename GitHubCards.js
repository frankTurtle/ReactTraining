const Card = ( props ) => {
	return(
  	<div>
    	<img src = "http://placehold.it/75" />
      <div style={{display: 'inline-block', marginLeft: 10}}>
        	<div>Name Here ... </div>
          <div>Company name Here ... </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Card />, mountNode);