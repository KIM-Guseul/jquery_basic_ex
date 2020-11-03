$(function() { //start

    $.ajax({
        url: 'data.xml',
        type: 'GET',

        success: function(data) {// 페이지 로드 성공 시 이 함수 실행
            // console.log($(data).find('item imgSrc').text() );

            var gallery = '', imgSrc, name, url, detail;

            $(data).find('item').each(function() {//data 파일에서 item 태그 찾아서 item의 갯수만큼 함수 돌리기

                //$(data).find('item').text(); //열개의 아이템 지칭.
                //$(data).find('item').eq(i).find('imgSrc').text(); // n번째 item 지칭.
                imgSrc = $(this).find('imgSrc').text(); // this 순차실행. 각각의 item을 가리킴.
                name = $(this).find('name').text();
                url = $(this).find('url').text();

                gallery = "<figure>";
                gallery += "<p><img src='" +imgSrc+ "' alt='" +name+ "'></p>";
                gallery += "<figcaption>" +name+ "</figcaption>";
                if(url !=''){// url값이 비어있지 않을 때만 a태그 추가
                    gallery += "<a href='" +url+ "'>"+url+"</a>";
                }
                gallery += "</figure>";

                // $('.gallery').html(gallery); html은 화면 갱신. 함수 열번 돌리고 마지막값만 화면에 표시
                $('.gallery').append(gallery); //.gallery 아래로 추가
            });


            $('.gallery figure').on('click',funDetail);//figure 클릭 시 detail 호출

            function funDetail(){
                var detail, details;
                var idx = $(this).index(); //디테일 인덱스값 = 갤러리 인덱스값


                imgSrc = $(data).find('item').eq(idx).find('imgSrc').text();
                name = $(data).find('item').eq(idx).find('name').text();
                url = $(data).find('item').eq(idx).find('url').text();
                detail = $(data).find('item').eq(idx).find('detail').text();
                //data 파일에서 n번째 item의 ... 가져오기

                details = "<p>" +name+ "</p>";
                details += "<a href='" +url+ "'>" +url+ "</a>";
                details += "<p>" +detail+ "</p>";


                $('.detail img').attr('src',imgSrc); //속성 변경
                $('.detail figcaption').html(details); //내용 변경 .text .html


            }


        },

        error: function() {
            console.log('실패');
        }
    });



}) //end
