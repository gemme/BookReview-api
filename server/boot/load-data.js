'use strict';

module.exports = (app, cb) => {

    const {Book} = app.models;

    const data = [
        { title: 'El Perfume', author:'Patrick Süskind' },
        { title: 'La insoportable levedad del ser', author:'Milan Kundera' },
        { title: 'Azteca', author:'Gary Jennings' },
        { title: 'Moby Dick', author:'Herman Melville' },
        { title: 'Lord of the Flies', author:'William Golding' },
        { title: 'The Scarlet Letter', author:'Nathaniel Hawthorne' },
        { title: 'The Old Man and the Sea', author:'Ernest Hemingway' },
        { title: 'Robinson Crusoe', author:'Daniel Defoe' },
        { title: 'Oliver Twist', author:'Charles Dickens' },
        { title: 'Lolita', author:'Vladimir Nabokov' },
        { title: 'Frankenstein', author:'Mary Shelley' },
        { title: 'The Charterhouse of Parma', author:'Stendhal' },
        { title: 'The Count of Monte Cristo', author:'Alexandre Dumas' },
        { title: 'David Copperfield', author:'Charles Dickens' },
        { title: 'Madame Bovary', author:'Gustave Flaubert' },
        { title: 'Alice\'s Adventures In Wonderland', author:'Lewis Carroll' },
        { title: 'The Woman in White', author:'Wilkie Collins' },
        { title: 'Little Women', author:' Louisa M. Alcott' },
        { title: 'The Way We Live Now ', author:'Anthony Trollope' },
        { title: 'Anna Karenina', author:'Leo Tolstoy' },
        { title: 'The Brothers Karamazov', author:'Fyodor Dostoevsky' },
        { title: 'The Portrait of a Lady', author:'Henry James' },
        { title: 'The Trial', author:'Franz Kafka' },
        { title: 'Men Without Women', author:'Ernest Hemingway' },
      ];


    Book.create(data,
        (err, instance, created) => {
            if(err) cb(err);
            cb(null, instance);
      });
}