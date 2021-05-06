$(function () {
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount = topic.length;
    for (var x = 0; x < topicCount; x++) {
        $("#courseTable").append("<tr>");
        $("#courseTable").append(`<td>${x + 1}</td>`);
        $("#courseTable").append(`<td>${startDate + 7 * x}</td>`);
        $("#courseTable").append(`<td>${topic[x]}</td>`);
        $("#courseTable").append("</tr>");
    }
});