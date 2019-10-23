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
        content: 'Since being awarded UNESCO World Heritage status in 2017, the popularity of the Lake District National Park in north-west England has continued to soar. While the summer is, undoubtedly, a lovely time to visit, savvy travellers will find the Lakes and their towns and villages are an equally beautiful destination in the autumn. The scenery is ablaze with colour, the summer crowds have thinned out and there’s plenty to see and do during, no matter the weather.'
    });
    var h1 = document.createElement('h1');
    h1.innerHTML = detail.title;
    var p = document.createElement('p');
    p.innerHTML = detail.content;
    document.getElementById('detail').appendChild(h1);
    document.getElementById('detail').appendChild(p);
}
