
function imgDetail() {
    const thumnails = document.getElementsByClassName("thumnail")
    const popup = document.getElementById("imgPop")
    const popBackground = document.getElementById("popBackground")
    const grid = document.getElementById("grid")
    const closeBtn = document.getElementById("closeBtn")
    const image = document.getElementById("image")
    const gridImg = document.getElementById("gridImg")

    //이미지 팝업 뒷배경 누르면 사라지는 부분
    popBackground.addEventListener("click", function () {
        closePop()
    })

    //그리드 추가 및 제거
    image.addEventListener("click", () => {
        grid.style.display = "block"
    })

    gridImg.addEventListener("click", () => {
        grid.style.display = "none"
    })

    //닫기 버튼 이벤트 부분
    closeBtn.addEventListener("click", () => {
        closePop()
    })

    //각 썸네일에 이벤트 추가하는 부분 (클로저 문제로 for문 내부에 익명함수로 처리)
    for (var thumnail of thumnails) {
        (function (thum) {
            thum.addEventListener("click", () => {
                
                image.setAttribute("src", thum.src)
                popup.style.display = "block"
            })
        })(thumnail)

    }

}

//팝업 닫는 함수
function closePop() {
    const popup = document.getElementById("imgPop")

    popup.style.display = "none"
}


//로딩 함수
function loading() {
    document.addEventListener("DOMContentLoaded", function () {
        const loading = document.getElementsByClassName("loading")[0]
        loading.style.display = "none"
        console.log("page loaded")
    });

}

//해당하는 단어 검색
function search(text) {
    if(text == "") return;

    const describes = [
        ["1", "핑크빈", "할로윈", "페페", "인형뽑기", "이글아이", "놀이공원", "놀이동산"],
        ["2", "루시드", "힐라", "교실", "프렌즈 스토리", "프렌즈스토리"],
        ["3", "아이돌", "무대", "공연", "마이크", "가수"],
        ["4", "페페", "핑크빈", "슬라임", "예티", "곰", "보물", "스텀프"],
        ["5", "꼬맹이", "잼민이", "고대 유적 파르템", "소년"],
        ["6", "시그너스", "나인하트", "미하일", "이리나", "오즈", "발렌타인데이", "축제", "주황버섯", "예티", "리본돼지", "달팽이"],
        ["7", "지방본", "지구방위본부", "메소레인저", "파워레인저", "메소레인져", "파워레인져", "케익", "키위"],
        ["8", "무토", "돌덩이", "거인", "츄츄 아일랜드", "츄츄아일랜드"],
        ["9", "츄츄 아일랜드", "츄츄아일랜드", "촌장", "얌얌아일랜드", "축제", "사자", "멍테일"],
        ["10", "아케인리버", "나무", "카오", "밤", "빛"],
        ["11", "크리스마스", "예티", "시그너스", "이카르트", "오즈", "페페", "오두막"],
        ["12", "겨울", "영웅", "메르세데스", "에반", "루미너스", "팬텀", "아란", "은월", "눈사람", "에반", "페페", "예티", "군고구마", "집"],
        ["13", "아델", "츄델", "하이레프"],
        ["14", "진힐라", "아줌마", "미궁", "빨간머리", "고통의 근원", "고근"],
        ["15", "12주년", "핑크빈", "검투사", "페페", "주니어발록", "예티", "몬스터", "슬라임", "돼지"],
        ["16", "무토", "휴향지", "섬", "여왕님", "병아리", "영웅", "메르세데스", "에반", "루미너스", "팬텀", "아란", "은월", "굴라"],
        ["17", "로봇", "호텔 아르크스", "러스티", "밤", "사막", "팝콘"],
        ["18", "아르카나", "돌정령", "돌의정령", "나무"],
        ["19", "루시드", "몽벨내놔", "레헬른", "분홍머리", "여자애", "모자"],
        ["20", "세냐 앵글러", "세냐앵글러", "파란머리", "여자애", "파랑"],
        ["21", "검", "언덕", "칼", "무덤", "사다리", "절벽", "햇빛"],
        ["22", "달빛", "달 빛", "영웅", "메르세데스", "에반", "루미너스", "팬텀", "아란", "은월"],
        ["23", "탐정 레이브", "탐정레이브", "쓰레기장", "세비지 터미널", "세비지터미널", "달빛"],
        ["24", "5000일", "이벤트", "케익", "영웅", "메르세데스", "에반", "루미너스", "팬텀", "아란", "은월", "오르카", "스우", "데미안", "키네시스", "핑크빈", "루시드"],
        ["25", "핑크빈", "스쿠터", "오토바이", "도시", "에반", "건물", "주황버섯", "페페", "이카르트", "반 레온", "돌의 정령"],
        ["26", "폭발", "폭탄", "해골", "보라색", "보라빛"],
        ["27", "바다", "심해", "물고기", "물 속", "해양"],
        ["28", "리버스 시티", "리버스시티", "석양", "도시", "태양", "해", "모자", "뒷통수", "저녁"],
        ["29", "바다", "스쿠버", "해파리", "셀라스", "잠수부"],
        ["30", "샤레니안", "벚꽃", "꽃", "봄", "나무", "분홍"],
        ["31", "아델", "츄델", "하이레프"],
        ["32", "여자애", "소녀", "석양", "분홍머리", "문", "저녁", "소필리아", "헌티드 맨션", "헌티드맨션"],
        ["33", "예티", "케익", "파티", "핑크빈", "슬라임", "주황버섯", "돌의정령"],
        ["34", "피크닉", "나들이", "돗자리", "도시락", "핑크빈", "슬라임", "예티", "주황버섯", "돌의정령", "벚꽃", "봄"],
        ["35", "핑크빈", "예티", "주황버섯", "슬라임", "돌의정령", "클럽", "공연", "DJ"],
        ["36", "핑크빈", "예티", "주황버섯", "슬라임", "돌의정령", "해변", "바닷가", "바다", "휴향지", "휴가"],
        ["37", "핑크빈", "예티", "주황버섯", "슬라임", "돌의정령", "운동회", "학교", "달리기", "트로피"],
        ["38", "핑크빈", "예티", "주황버섯", "슬라임", "돌의정령", "할로윈", "캔디", "사탕", "밤"],
        ["39", "핑크빈", "예티", "주황버섯", "슬라임", "돌의정령", "겨울", "코코아", "핫초코", "케익", "목도리", "크리스마스", "밤"],
        ["40", "바나나보트", "바나나", "보트", "수상레저", "물놀이", "튜브", "여제", "바다", "물"],
        ["41", "가엔슬"],
        ["42", "핑크빈", "촛불", "램프", "길찾기", "물음표", "?", ],
        ["43", "라라"],
        ["44", "추추", "츄츄아일랜드", "사자", "음식", "잔치", "가을", "샌드위치"],
        ["45", "예티", "돌의정령", "게임", "피자", "할로윈", "호박", "귀신"]
        ["아잉", "제니스", "대머리", "분홍 선글라스"]
    ]

    var tmp = []

    for(var i=0; i<describes.length; i++){
        for(var str of describes[i]){
            if(str.indexOf(text) >= 0){
                tmp.push(i)
                break
            }
        }
    }

    initThumnails()
    highlight(tmp)
}

//특정 썸네일에 하이라이트
function highlight(list){
    const thumnails = document.getElementsByClassName("thumnail")
    for(var t of thumnails){
        t.style.opacity = "60%"
    }
    for(var i of list){
        console.log(i)
        thumnails[i].style.boxShadow = "1px 1px 10px 1px #eafa8f"
        thumnails[i].style.opacity = "100%"
        //thumnails[i].animation = "first-animation 0.5s infinite alternate";
    }
}

//썸네일 초기화
function initThumnails(){
    const thumnails = document.getElementsByClassName("thumnail")
    for(var t of thumnails){
        t.style.opacity = "100%"
        t.style.boxShadow = "none"
    }
}

//검색 기능 함수 초기화
function searchInit(){
    const searchTxt = document.getElementById("searchTxt")
    const searchBtn = document.getElementById("searchBtn")
    const initBtn = document.getElementById("initBtn")

    searchBtn.addEventListener("click", function () {
        search(searchTxt.value)
    })

    initBtn.addEventListener("click", function () {
        initThumnails()
    })

    document.addEventListener("keydown", function (e) {
        if(e.key == "Enter") {
            if(searchTxt.value == ""){
                searchTxt.focus()
            }
            else {
                search(searchTxt.value)
            }
        }
        else if(e.key == "Escape"){
            searchTxt.value = ""
            initThumnails()
        }
    })

}

imgDetail()
searchInit()
loading()
//search("아델")

//box-shadow: 1px 1px 10px 1px #eafa8f;
