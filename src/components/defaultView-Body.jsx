

class DefaultViewBody extends React.Component {
	render() {
		var messages = []
		for(var i=0;i<50;i++){
			messages.push(<div key={i}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, tempore enim saepe obcaecati, architecto laudantium
						libero nesciunt minima iure quo et, autem nulla doloribus. Voluptas impedit, voluptatibus harum minus ipsa!</div>);
		}
		
		
		return <div className="main-body">
			{messages}
		</div>
	}
}
