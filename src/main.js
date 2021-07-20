

function imgDetail() {

    const thumnails = document.getElementsByClassName("thumnail")
    const popup = document.getElementById("imgPop")
    const popBackground = document.getElementById("popBackground")
    const imgDetail = document.getElementById("imgDetail")
    const grid = document.getElementById("grid")
    const closeBtn = document.getElementById("closeBtn")
    const aing = document.getElementsByClassName("aing")[0]
    const ev = document.getElementById("ev")

    //그리드의 활성화 여부
    var gridFlag = false
    var evn = 0

    //이미지 팝업 뒷배경 누르면 사라지는 부분
    popBackground.addEventListener("click", function () {
        closePop()
    })

    //그리드 추가 및 제거
    imgDetail.addEventListener("click", () => {
        if (gridFlag == false) {
            grid.style.display = "block"
            gridFlag = true
        }
        else {
            grid.style.display = "none"
            gridFlag = false
        }
    })

    //닫기 버튼 이벤트 부분
    closeBtn.addEventListener("click", () => {
        closePop()
    })

    //각 썸네일에 이벤트 추가하는 부분 (클로저 문제로 for문 내부에 익명함수로 처리)
    for (var thumnail of thumnails) {
        (function (thum) {
            thum.addEventListener("click", () => {
                //console.log(thum)
                if (document.getElementById("image") != null) document.getElementById("image").remove()
                const img = document.createElement("img")
                img.id = "image"
                img.src = thum.src
                imgDetail.appendChild(img)
                popup.style.display = "block"
            })
        })(thumnail)

    }

    aing.addEventListener("click", () => {
        if (document.getElementById("image") != null) document.getElementById("image").remove()
                const img = document.createElement("img")
                img.id = "image"
                img.src = aing.src
                imgDetail.appendChild(img)
                popup.style.display = "block"
                ev.style.display = "block"
    })

    ev.addEventListener("click", () => {
        evn += 1
        if(evn == 10) {
            
        }
    })

}

//팝업 닫는 함수
function closePop() {
    const popup = document.getElementById("imgPop")
    const ev = document.getElementById("ev")

    document.getElementById("image").remove()
    popup.style.display = "none"
    ev.style.display = "none"
}


//로딩 함수
function loading() {
    document.addEventListener("DOMContentLoaded", function () {
        const loading = document.getElementsByClassName("loading")[0]
        loading.style.display = "none"
        console.log("page loaded")
    });

}



imgDetail()
loading()
