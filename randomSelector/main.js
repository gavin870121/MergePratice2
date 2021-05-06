
$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        //$("h1").text("Hello");
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        //找到img元件 V
        //設定img元件的src屬性 -> 對應元件的title值
        $("#foodImg").attr("src",$("li").eq(randomChildNumber).attr("title"));
    });
});