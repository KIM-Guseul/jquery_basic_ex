$(function(){//start
    //공통된 페이지 로드하기

    // $('header').load('/inc_head_foot.html header nav', header);
    // $('footer').load('/inc_head_foot.html footer p');
    // / 절대경로. 오픈된 에디터의 폴더
    // location.host http://127..
    // location.pathname load/js/....



    $('header').load('/inc_head_foot.html header nav', header);
    // html의 header에 load 파일의 header nav 불러오기 , header 함수 실행.
    $('footer').load('/inc_head_foot.html footer p');
    // html의 footer에 load 파일의 footer p 불러오기.

    function header(){//콜백함수. 로드 완료된 후 실행.


        $('header nav a').eq(localStorage.pageNum).addClass('active');//local storage에 담긴 인덱스값 가져와서 클래스 추가
        //eq = nth-of-type를 idx값으로 표시

        $('header nav a').on('click',function(e){
            e.preventDefault();

            localStorage.pageNum = $(this).index(); // this(클릭된 a)의 인덱스값 호출

            //localStorage html 자체 저장소. 브라우저 껐다 켜도 유지
            //sessionStorage 껐다 켜면 사라짐. 패스워드 등 중요한 정보 저장시 이용

            //ex. 로그인 없이 장바구니에 상품 담기. 좋아요 버튼. 로그인 시 저장된 로컬스토리지 디비에 불러오기...
            location.href = $(this).attr('href');//attr attribute. 속성 중 href 값.
        });
    }



})//end
