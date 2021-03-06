'use strict';

module.exports = (app, cb) => {

    const {Book} = app.models;

    const data = [
        { title: 'El Perfume', author:'Patrick Süskind', image: 'el_perfume.jpeg', rating: 0 },
        { title: 'La insoportable levedad del ser', author:'Milan Kundera', image: 'la_insoportable.jpg', rating: 0 },
        { title: 'Azteca', author:'Gary Jennings', image: 'azteca.jpg', rating: 0 },
        { title: 'Moby Dick', author:'Herman Melville', image: 'Moby-Dick.jpg', rating: 0 },
        { title: 'Lord of the Flies', author:'William Golding', image: 'lord_of_flies.jpg', rating: 0},
        { title: 'The Scarlet Letter', author:'Nathaniel Hawthorne', image: 'the_scarlet.jpg', rating: 0 },
        { title: 'The Old Man and the Sea', author:'Ernest Hemingway', image: 'the_old_man_n_sea.jpg', rating: 0 },
        { title: 'Robinson Crusoe', author:'Daniel Defoe' , image: 'robinson.jpg', rating: 0 },
        { title: 'Oliver Twist', author:'Charles Dickens', image: 'oliver_twist.jpg', rating: 0 },
        { title: 'Lolita', author:'Vladimir Nabokov', image: 'lolita.jpg', rating: 0 },
        { title: 'Frankenstein', author:'Mary Shelley', image: 'frankenstein.jpg', rating: 0 },
        { title: 'The Charterhouse of Parma', author:'Stendhal', image: 'the_chaterhouse.jpg', rating: 0 },
        { title: 'The Count of Monte Cristo', author:'Alexandre Dumas', image: 'the_count_of_montecristo.jpg', rating: 0 },
        { title: 'David Copperfield', author:'Charles Dickens', image: 'david_copperfield.jpg', rating: 0 },
        { title: 'Madame Bovary', author:'Gustave Flaubert', image: 'madame_bovary.jpg', rating: 0 },
        { title: 'Alice\'s Adventures In Wonderland', author:'Lewis Carroll', image: 'alice_adventures.jpg', rating: 0 },
        { title: 'The Woman in White', author:'Wilkie Collins', image: 'the_woman_in_white.jpg', rating: 0 },
        { title: 'Little Women', author:' Louisa M. Alcott', image: 'little_women.jpg', rating: 0 },
        { title: 'The Way We Live Now ', author:'Anthony Trollope', image: 'the_way_we.jpg', rating: 0 },
        { title: 'Anna Karenina', author:'Leo Tolstoy', image: 'anna_karenina.jpg', rating: 0 },
        { title: 'The Brothers Karamazov', author:'Fyodor Dostoevsky', image: 'karamazov.jpg', rating: 0 },
        { title: 'The Portrait of a Lady', author:'Henry James', image: 'the_portrait.jpg', rating: 0 },
        { title: 'The Trial', author:'Franz Kafka', image: 'the_trial.jpg', rating: 0 },
      { title: 'Men Without Women', author:'Ernest Hemingway', image: 'men_without_women.jpg', rating: 0 },
    ];

    Book.findOrCreate( {fields : data} , data ,
        (err, instance, created) => {
            if(err) cb(err);
            cb(null, instance);
        }
    );
}