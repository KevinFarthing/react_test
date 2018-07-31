import React, {Component} from 'react';

class List extends Component {
  render() {
    return (
      <div className="col-md-6">
      <div className="container">
        <h3>{this.props.gem.name}</h3>
        <h3>${this.props.gem.price}</h3>
        <img src={this.props.gem.image} alt={this.props.gem.name} />
        <ul className="nav nav-tabs">
          <li className="active"><a data-toggle="tab" href={"#description"+this.props.gem.name}>Description</a></li> 
          {/* in future when using class property as any kind of classname or identifier, probably better to use a serial id. name prevents use of spaces.  */}
          <li><a data-toggle="tab" href={"#details"+this.props.gem.name}>Details</a></li>
          <li><a data-toggle="tab" href={"#reviews"+this.props.gem.name}>Reviews</a></li>
        </ul>

        <div className="tab-content">
          <div id={"description"+this.props.gem.name} className="tab-pane fade in active">
            <p>{this.props.gem.description}</p>
          </div>
          <div id={"details"+this.props.gem.name} className="tab-pane fade">
            <p>{this.props.gem.shine}</p>
          </div>
          <div id={"reviews"+this.props.gem.name} className="tab-pane fade">
            <p>{"1 star. They painted a chunk of asphalt to look like a "+this.props.gem.name}</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

// OG list
// class List extends Component {
//   render() {
//     return (
//         <ol>
//           {this.props.todos.map((todo, index) => <li key={ index }>{ todo }</li>)}
//         </ol>
//     );
//   }
// }

export default List;