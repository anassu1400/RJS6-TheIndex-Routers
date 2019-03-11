import React, { Component } from "react";
import BookTable from "./BookTable";
import SearchBar from "./SearchBar";
class BookList extends Component {
  state = {
    filteredBooks: [],
    filteredByColor: []
  };
  componentDidMount = () => {
    let filteredB = this.props.books;

    if (this.props.match.params.color !== undefined) {
      filteredB = this.props.books.filter(
        book => book.color === this.props.match.params.color
      );
    }
    this.setState({
      filteredBooks: filteredB,
      filteredByColor: filteredB
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
        filteredBooks: filteredB,
        filteredByColor: filteredB
      });
    }
  };
  filterBooksByName = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books;
    filteredBooks = this.state.filteredByColor.filter(book =>
      `${book.title}`.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks });
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
