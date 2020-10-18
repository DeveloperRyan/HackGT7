import React, { Component } from 'react'
import { View } from 'react-native'
import BookTile from './BookTile'


export default class BooksContainer extends Component {
    
    renderBooks = (books) => (
        books.map((book) => (
            <BookTile image={book.image} key={book.id}/>
        ))
    );

    render() {
        return (
                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "90%"}}>
                    {this.renderBooks(this.props.books)}
                </View>
        );
    }
}
