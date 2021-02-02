function getImgSlide(type) {
    var imgs = document.querySelectorAll(".img-banner img")
    var length = imgs.length;
    var curSlide, preSlide ;

    for(var i=0;i< length;i++) {
        if(imgs[i].className === "active") {
            imgs[i].className ="deactive"
            preSlide=i
            if(type == 1) {
                if(i<length -1) {
                    imgs[i].nextSibling.nextSibling.className ="active"
                    curSlide = i+1
                }
                    
                else {
                    imgs[0].className ="active"
                    curSlide =0
                }
                    
            }
            else {
                if(i>0) {
                    imgs[i].previousSibling.previousSibling.className ="active"
                    curSlide = i + 1
                }
                    
                else {
                    imgs[length-1].className ="active"
                    curSlide =length -1 
                }
                    
            }
            var imgPreview = document.querySelectorAll('.preview img')
            getImgPreview(imgPreview, preSlide, curSlide)
            return;
        }
    }    
}

var time = setInterval(()=> getImgSlide(1), 5000);

function getImgPreview(imgPreview, preSlide, curSlide) {
    imgPreview[preSlide].className=""
    imgPreview[curSlide].className="show"
}

function clearCurrentSlide() {
    var imgs = document.querySelectorAll(".img-banner img")
    var preview = document.querySelectorAll(".preview img")
    for(var i=0;i< imgs.length;i++) {
        imgs[i].className ="deactive"
        preview[i].className =""
    }
}

function addListen() {

    var img = document.querySelectorAll(".preview img")
    
    for(let i=0;i<img.length;i++){
        img[i].onclick = () => {
            clearCurrentSlide()
            document.querySelectorAll(".img-banner img")[i].className ="active"
            document.querySelectorAll(".preview img")[i].className ="show"
        }
    }

    var pre = document.querySelectorAll(".img-banner img")
    for(let i=0;i<pre.length;i++){
        pre[i].onmouseover = () => {
            clearInterval(time)
        }
        pre[i].onmouseout = () => {
            time = setInterval(()=> getImgSlide(1), 5000);
        }
    }
}

addListen()
