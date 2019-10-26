var LocationDetail = /** @class */ (function () {
    function LocationDetail(init) {
        Object.assign(this, init);
    }
    return LocationDetail;
}());
function onLoad() {
    var id = sessionStorage.getItem('id');
    var detail = new LocationDetail({
        title: '6 Lake District locations to visit this autumn',
        content: 'Since being awarded UNESCO World Heritage status in 2017, the popularity of the Lake District National Park in north-west England has continued to soar. While the summer is, undoubtedly, a lovely time to visit, savvy travellers will find the Lakes and their towns and villages are an equally beautiful destination in the autumn. The scenery is ablaze with colour, the summer crowds have thinned out and there’s plenty to see and do during, no matter the weather.',
        imageLink: [
            'images/anh.jpg',
            'https://southeastasiabackpacker.com/wp-content/uploads/2018/01/Halong-bay-autumn.jpg',
            'https://vietnam.travel/sites/default/files/360Tour/HaLong/socialThumbnail2.jpg'
        ]
    });
    var h1 = document.createElement('h1');
    h1.setAttribute('style', 'color: #2689e7');
    h1.innerHTML = detail.title;
    var p = document.createElement('p');
    p.innerHTML = detail.content;
    p.setAttribute('style', 'color: #000');
    document.getElementById('detail').appendChild(h1);
    document.getElementById('detail').appendChild(p);
    var slideDiv = document.getElementById('slide');
    for (var _i = 0, _a = detail.imageLink; _i < _a.length; _i++) {
        var imageLink = _a[_i];
        var div = document.createElement('div');
        div.setAttribute('class', 'intro-section');
        div.setAttribute('style', "background-image: url('" + imageLink + "')");
        slideDiv.appendChild(div);
    }
}
