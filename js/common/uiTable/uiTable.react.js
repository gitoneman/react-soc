var React = require('react');
var Row = require('./uiRow.react');
var Head = require('./uiHead.react');
var Pagination = require('../pagination/pagination.react');
var $ = require('jquery');

var uiTable = React.createClass({

	render: function() {
		var col = this.props.col;
		var clickFun = this._trClick;
		var format = this.props.format;
		var rows = this.props.data.map(function(item){
			return (
				<Row data={item} col={col} onClick={clickFun} format={format}/>
			)
		});
		return (
			<div>
				<table className="table table-hover table-bordered">
					<thead>
						<Head data={this.props.col} format={format}/>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
				<Pagination onClick={this._paginationClick} max={5} start={0}/>
			</div>
		);
	},
	_trClick:function(data){
		this.props.onClick && this.props.onClick(data);
	},
	_paginationClick:function(o){
		console.log(o)
		this.getTableData();
	},
	getTableData:function(){
		//TODO ajax to get data;
		
		// $.ajax({
		// 	type:"get",
		// 	url:"/aaa",
		// 	success:function(){
		//		this.forceUpdate();
		// 	},
		// 	error:function(){
		// 		console.log(1)
		// 	}
		// })
		this.forceUpdate();
	}

});

module.exports = uiTable;