
    
    //The Like function is used to make the white heart appear in front of the picture as well as make the like button into a red heart and vice versa.
    
    var like = function(num) {
      if (document.getElementById("button-post-like-"+num).classList.contains("like")) {
        document.getElementById("button-post-like-"+num).classList.remove("ion-ios-heart","like");
        document.getElementById("button-post-like-"+num).classList.add("ion-ios-heart-outline");
      } else {
        document.getElementById("button-post-like-"+num).classList.remove("ion-ios-heart-outline");
        document.getElementById("button-post-like-"+num).classList.add("ion-ios-heart","like");
        document.getElementById("post-like-"+num).style.opacity = 1;
    
        setTimeout(function(){
          document.getElementById("post-like-"+num).style.opacity = 0;
        }, 600);
      }
    }
    
    //The readStory function is used to change the red circle around a new story into grey after tapping on the new storry (thus reading it)
    
    var readStory = function(event) {
      event.parentNode.classList.remove("unread");
      event.parentNode.classList.add("read");
    }
    function cpage(){
      location.replace('viewdb.html')
    }