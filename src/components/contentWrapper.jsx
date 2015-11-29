

class ContentWrapper extends React.Component {
	render() {
		return <div className="fill-area content flexbox-item-grow">
			<Toolbar />
			<Sidebar />
			<DefaultView />
		</div>
	}
}
