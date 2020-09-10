var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var smilegate = {
    lat : 37.40256402304031,
    lng : 127.11228793989015,
}

var options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(smilegate.lat, smilegate.lng), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

var markerPosition = new kakao.maps.LatLng(smilegate.lat, smilegate.lng);

var marker = new kakao.maps.Marker({
    position : markerPosition
});

marker.setMap(map)

var iwContent = '<div style="padding:5px;"><img src="https://static2.smilegatefoundation.org/upload/20200727/1595826137066.png" style="width:900px;"alt="그림의 탄생 메인 그림">그림의 탄생!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwRemoveable = true;

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function () {
        // 마커 위에 인포윈도우를 표시합니다
        infowindow.open(map, marker);
    });