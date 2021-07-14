function imgDetail() {

    const thumnails = document.getElementsByClassName("thumnail")
    const popup = document.getElementById("imgPop")
    const popBackground = document.getElementById("popBackground")
    const imgDetail = document.getElementById("imgDetail")
    const grid = document.getElementById("grid")
    const closeBtn = document.getElementById("closeBtn")
    const sizeBtn = document.getElementById("sizeBtn")

    //이미지 팝업 뒷배경 누르면 사라지는 부분
    popBackground.addEventListener("click", function () {
        closePop()
    })

    //그리드 추가 밑 제거
    imgDetail.addEventListener("click", () => {
        if(grid.style.display == "none") grid.style.display = "block"
        else grid.style.display = "none"
    })
    
    //닫기 버튼 이벤트 부분
    closeBtn.addEventListener("click", () => {
        closePop()
    })

    //각 썸네일에 이벤트 추가하는 부분 (클로저 문제로 for문 내부에 익명함수로 처리)
    for(var thumnail of thumnails){
        (function(thum) {
            thum.addEventListener("click", () => {
                //console.log(thum)
                if(document.getElementById("image") != null) document.getElementById("image").remove()
                const img = document.createElement("img")
                img.id = "image"
                img.src = thum.src
                imgDetail.appendChild(img)
                popup.style.display = "block"
            })
        })(thumnail)
        
    }

}

//팝업 닫는 함수
function closePop(){
    const popup = document.getElementById("imgPop")

    document.getElementById("image").remove()
    popup.style.display = "none"
}

function loading(){
    
    document.addEventListener("DOMContentLoaded", function(){
        const loading = document.getElementsByClassName("loading")[0]
        loading.style.display = "none"
        console.log("page loaded")
    });
        
}



imgDetail()
loading()
