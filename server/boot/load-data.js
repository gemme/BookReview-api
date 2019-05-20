'use strict';

module.exports = (app, cb) => {

    const {Book} = app.models;

    const data = [
        { title: 'El Perfume', author:'Patrick Süskind', image: 'el_perfume.jpg' },
        { title: 'La insoportable levedad del ser', author:'Milan Kundera', image: 'la_insoportable.jpg' },
        { title: 'Azteca', author:'Gary Jennings', image: 'azteca.jpg' },
        { title: 'Moby Dick', author:'Herman Melville', image: 'moby-dick.jpg' },
        { title: 'Lord of the Flies', author:'William Golding', image: 'lord_of_flies.jpg' },
        { title: 'The Scarlet Letter', author:'Nathaniel Hawthorne', image: 'the_scarlet.jpg' },
        { title: 'The Old Man and the Sea', author:'Ernest Hemingway', image: 'the_old_man_n_sea.jpg' },
        { title: 'Robinson Crusoe', author:'Daniel Defoe' , image: 'robinson.jpg'},
        { title: 'Oliver Twist', author:'Charles Dickens', image: 'oliver_twist.jpg'},
        { title: 'Lolita', author:'Vladimir Nabokov', image: 'lolita.jpg' },
        { title: 'Frankenstein', author:'Mary Shelley', image: 'frankenstein.jpg'},
        { title: 'The Charterhouse of Parma', author:'Stendhal', image: 'the_chaterhouse.jpg' },
        { title: 'The Count of Monte Cristo', author:'Alexandre Dumas', image: 'the_count_of_montecristo' },
        { title: 'David Copperfield', author:'Charles Dickens', image: 'david_copperfield.jpg' },
        { title: 'Madame Bovary', author:'Gustave Flaubert', image: 'madame_bovary.jpg' },
        { title: 'Alice\'s Adventures In Wonderland', author:'Lewis Carroll', image: 'alice_adventures.jpgs' },
        { title: 'The Woman in White', author:'Wilkie Collins', image: 'the_woman_in_white.jpg' },
        { title: 'Little Women', author:' Louisa M. Alcott', image: 'little_women.jpg' },
        { title: 'The Way We Live Now ', author:'Anthony Trollope', image: 'the_way_we.jpg' },
        { title: 'Anna Karenina', author:'Leo Tolstoy', image: 'anna_karenina.jpg' },
        { title: 'The Brothers Karamazov', author:'Fyodor Dostoevsky', image: 'karamazov.jpg' },
        { title: 'The Portrait of a Lady', author:'Henry James', image: 'the_portrait.jpg' },
        { title: 'The Trial', author:'Franz Kafka', image: 'the_trial.jpg' },
        { title: 'Men Without Women', author:'Ernest Hemingway', image: 'men_without_women.jpg' }
    ];

    Book.create(data,
        (err, instance, created) => {
            if(err) cb(err);
            cb(null, instance);
       }
    );
}