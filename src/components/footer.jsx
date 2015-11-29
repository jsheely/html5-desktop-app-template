
class Footer extends React.Component {
	render() {
		return <footer>
			<div className="pull-left app-git">
				<ul>
					<li>
						<i className="fa fa-github"></i> master
					</li>
					<li>
						<i className="fa fa-times-circle"></i> 0
					</li>
					<li>
						<i className="fa fa-warning"></i> 0
					</li>
				</ul>
			</div>
			<div className="text-right pull-right app-encoding">
				<ul>
					<li>UTF-8</li>
					<li>HTML</li>
					<li><i className="fa fa-smile-o"></i></li>
				</ul>
			</div>
		</footer>
	}
}
