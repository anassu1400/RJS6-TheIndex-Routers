import React, { Component } from "react";
import BookTable from "./BookTable";
import SearchBar from "./SearchBar";
class BookList extends Component {
  state = {
    filteredBooks: []
  };
  componentDidMount = () => {
    let filteredB = this.props.books;

    if (this.props.match.params.color !== undefined) {
      filteredB = this.props.books.filter(
        book => book.color === this.props.match.params.color
      );
    }
    this.setState({
      filteredBooks: filteredB
    });
  };
  componentDidUpdate = prevProps => {
    let filteredB = this.props.books;
    if (prevProps.match.params.color !== this.props.match.params.color) {
      if (this.props.match.params.color !== undefined) {
        filteredB = this.props.books.filter(
          book => book.color === this.props.match.params.color
        );
      }
      this.setState({
        filteredBooks: filteredB
      });
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
