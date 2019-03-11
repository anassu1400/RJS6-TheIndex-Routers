import React, { Component } from "react";
import BookTable from "./BookTable";
import SearchBar from "./SearchBar";
class BookList extends Component {
  state = {
    filteredBooks: []
  };
  componentDidMount = () => {
    this.setState({ filteredBooks: this.props.books });
  };
  componentDidUpdate = prevProps => {
    if (prevProps.books !== this.props.books) {
      this.setState({ filteredBooks: this.props.books });
    }
  };
  filterBooksByName = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      `${book.title}`.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };

  render() {
    return (
      <div>
        <SearchBar onChange={this.filterBooksByName} />
        <BookTable books={this.state.filteredBooks} />
      </div>
    );
  }
}
export default BookList;
