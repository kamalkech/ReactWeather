var React = require('react');
var {Link, IndexLink} = require('react-router');

var Admin = React.createClass({
	render: function() {
		return (
			<div>
				<h2>Admin Component</h2>
				<IndexLink to="/admin" activeClassName="active">Dashboard</IndexLink>
				<Link to="/admin/manager" activeClassName="active">Manager</Link>
				{this.props.children}
			</div>
		);
	}
});

module.exports = Admin;