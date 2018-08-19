exports.home = function(request, response){
    response.render('home', {
        title: 'iLoveMyCity',
        headline: 'We believe that every city have something to say.',
        cityName: ''
    });
}

exports.city = function(request, response){
    var cityName = request.params.city;
    var title, headline;
    var imageCount = 4;
    switch(cityName) {
        case 'berlin':
            title="Berlin";
            headline="Berlin: Where love is in the air";
            break;
        case 'paris':
            title="Paris";
            headline="Paris: Good talkers are only found in Paris";
            break;
        case 'madrid':
            title="Madrid";
            headline="Madrid: Buzz, Beautiful architecture and Football";
            break;
        case 'london':
            title="London";
            headline="London: Sparkling, Still, Food, Gorgeous";
            break;
        default:
            title="New York";
            headline="New York: Come to New York to become someone new";
            imageCount = 6;
            break;

    }
    response.render('city', {
        title: title,
        headline: headline,
        imageCount: imageCount,
        cityName: cityName
    });
}