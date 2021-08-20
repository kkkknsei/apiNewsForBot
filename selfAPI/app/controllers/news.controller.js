let news = {
	"news0": {
		"title": 'World leaders react as the Taliban take Kabul',
		"url": 'https://www.cnbc.com/2021/08/16/world-leaders-react-as-the-taliban-take-kabul-in-afghanistan.html',
		"lang": 'Inglês',
		"id": 0
	},
	"news1": {
		"title": '3 Buy-Rated Nasdaq 100 Stocks to Add to Your Portfolio',
		"url": 'https://www.investing.com/news/stock-market-news/3-buyrated-nasdaq-100-stocks-to-add-to-your-portfolio-2590883',
		"lang": 'Inglês',
		"id": 1
	},
	"news2": {
		"title": 'An Airport More Richly Valued Than Amazon Shouldn’t Fly',
		"url": 'https://www.bloomberg.com/opinion/articles/2021-08-16/sydney-airport-may-be-overplaying-its-hand-in-this-takeover-battle?srnd=premium',
		"lang": 'Inglês',
		"id": 2
	},
	"news3": {
		"title": 'Biden Defends U.S. Exit From Afghanistan as Criticism Mounts',
		"url": 'https://www.bloomberg.com/news/articles/2021-08-16/biden-says-he-stands-squarely-behind-afghanistan-withdrawal?srnd=premium',
		"lang": 'Inglês',
		"id": 3
	},
	"news4": {
		"title": 'Covid Hospital Deaths Hit Previous Peaks in Hot-Spot Areas',
		"url": 'https://www.bloomberg.com/news/articles/2021-08-16/covid-hospital-deaths-hit-previous-peaks-in-hot-spot-areas?srnd=premium',
		"lang": 'Inglês',
		"id": 4
	},
	"news5": {
		"title": 'Covid Hospital Deaths Hit Previous Peaks in Hot-Spot Areas',
		"url": 'https://www.bloomberg.com/news/articles/2021-08-16/covid-hospital-deaths-hit-previous-peaks-in-hot-spot-areas?srnd=premium',
		"lang": 'Inglês',
		"id": 5
	}

};

exports.create = function(req, res) {
	var newNews = req.body;
    news["News" + newNews.id] = newNews;
	console.log("--->After Post, news:\n" + JSON.stringify(news, null, 4));
    res.end("Post Successfully: \n" + JSON.stringify(newNews, null, 4));
};

exports.findAll = function(req, res) {
    console.log(JSON.stringify(news, null, 4));
    res.end(JSON.stringify(news, null, 4));  
};

exports.findOne = function(req, res) {
    let newsSingular = news["News" + req.params.id];
    console.log(JSON.stringify(newsSingular, null, 4));
    res.end(JSON.stringify(newsSingular, null, 4));
};

exports.update = function(req, res) {
	var id = parseInt(req.params.id);
	var updateedNews = req.body; 
	if(news["news" + id] != null){
		// update data
		news["news" + id] = updateedNews;

		console.log("--->Update Successfully, news: \n" + JSON.stringify(news, null, 4))
		
		// return
		res.end("Update Successfully! \n" + JSON.stringify(updateedNews, null, 4));
	}else{
		res.end("News doesn't exist:\n:" + JSON.stringify(updateedNews, null, 4));
	}
};

exports.delete = function(req, res) {
	var deleteNews = news["News" + req.params.id];
    delete news["News" + req.params.id];
    console.log("--->After deletion, news list:\n" + JSON.stringify(news, null, 4) );
    res.end( "Deleted news: \n" + JSON.stringify(deleteNews, null, 4));
};