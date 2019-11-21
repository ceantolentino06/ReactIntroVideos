import React from 'react';

class SearchBar extends React.Component {
   state = { term: '' };

   // IMPORTANT: use arrow function when passing a callback function to a child element
   // to avoid 'this' issues
   onInputChange = event => {
      this.setState({ term: event.target.value });
   };

   onFormSubmit = event => {
      // this line of code prevents the browser from refreshing when the form is submitted
      event.preventDefault();
      this.props.onFormSubmit(this.state.term);
      // TODO: make sure we call callback from parent component
   };

   render() {
      return (
         <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
               <div className="field">
                  <label>Video Search</label>
                  {/* should be always 'onChange */}
                  <input
                     type="text"
                     value={this.state.term}
                     onChange={this.onInputChange}
                  />
               </div>
            </form>
         </div>
      );
   }
}

export default SearchBar;
