'use strict';

module.exports = function(Review) {


    Review.observe('after save', (ctx, next) => {
        if (!ctx.isNewInstance) return next();
        setTimeout(next, 2000);
    });

    Review.observe('before save', async (ctx, next) => {
        const {instance}  = ctx;
        console.log('Review instance', instance);

        try{
            const BookReviews = await Review.find({
                where: {
                    bookId: instance.bookId
                }
            });

            const totalReviews = BookReviews.length;

            const totalRating = BookReviews.reduce((acc, curr) => {
                acc = acc + curr.rating;
                return acc;
            }, 0);

            //console.log('totalReviews', totalReviews);
            //console.log('totalRating', totalRating);

            const book = await Review.app.models.Book.findById(instance.bookId,{});

            book.rating = Math.round((totalRating + instance.rating) / (totalReviews + 1));
            //console.log('book', book);
            book.save();
        } catch(err) {
            console.error('My error', err);
            next(err);
        };


    });

};
