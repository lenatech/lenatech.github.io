// Generated by CoffeeScript 1.7.1
var load, putImages;

$(document).on("keydown", function(e) {
  if (e.keyCode === 39 && $("#js-next-post").length) {
    $("#js-next-post").click();
  }
  if (e.keyCode === 37 && $("#js-previous-post").length) {
    return $("#js-previous-post").click();
  }
});

$(document).on("click", "a[id]", function(e) {
  return _gaq.push(["_trackEvent", "Clicks", "clicked on " + e.target.id]);
});

$(document).on("click", "a:not([id])", function(e) {
  return _gaq.push(["_trackEvent", "Clicks", "clicked on " + $(this).text()]);
});

$(document).on("ready pjax:end", function() {
  var feed;
  if (window.pics) {
    return putImages(pics);
  } else {
    feed = "https://api.instagram.com/v1/users/1574083/media/recent/?count=30&client_id=78b833b5a276430ab361f795757e4fe7&callback=?";
    return $.getJSON(feed, function(data) {
      window.pics = data.data.filter(function(pic) {
        return pic.tags.length > 0 && pic.tags.indexOf("_") >= 0;
      });
      return putImages(pics);
    });
  }
});

load = function() {
  return $(".img img").on("load", function() {
    return $(this).closest(".img").addClass("show");
  });
};

putImages = function(pics) {
  var box, pic;
  pic = pics[Math.floor(Math.random() * pics.length)];
  box = $(".instagram");
  box.html("");
  box.append("<a target='_blank' href='" + pic.link + "' class=img><img src='" + pic.images.low_resolution.url + "'></div>");
  return load();
};
