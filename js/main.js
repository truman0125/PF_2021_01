//// 롯데콘서트홀 JS - main.js /////

var mob = 0;
if($(window).width()<500) mob=1;
console.log("모바일:"+mob);


///// 로드구역 //////////////////////////////
    $(function(){
        
        if(mob){
            //mobile code
        }
        else{
            //DT
        }
        
        var sld = $("#slide");
        var sldCnt = sld.find("li").length;
        
        
        var sldSts = 0;//슬라이드 상태값
        // 0 자동상태, 1 멈춤상태
        
        $(".cir_off li").first().click(function(){
            
            var v1,v2;
            if(sldSts===0){
                v1=1;
                v2=0;
                
                clearInterval(autoI);
                
                
            } 
            else{
                v1=0;
                v2=1;
                
                autoSlide();
                
            }
            
            $("img:last-child",this).css({
                opacity: v1
            });
            
            $("img:first-child",this).css({
                opacity: v2
            });
            
            // 상태값 변경
            sldSts ? sldSts = 0 : sldSts = 1;            
        });////// click //////////////////////
        
        
        $(".cir_off li").click(function(){
            
            var idx = $(this).index();
            console.log("fff"+idx);
            if(idx===0) return false;
            
            
            idx = idx-1;
            console.log("seq:"+idx);
            
            clearAuto();
            
            sldFn(idx);
            
            // 전역변수값을 중간이동순번으로 업데이트!
            snum = idx;
            
        });///////// click //////////////
        
        var sldFn = function(idx){
            sld.animate({
                left:(-100*idx)+"%"
            },600);
            
            $(".cir_off li").eq(idx+1).addClass("on")
            .siblings().removeClass("on");
            
        };//////////// sldFn //////////
        
    // 슬라이드전역변수    
    var snum = 0;    
         // 인터발함수(지우기위해 만든변수)
    var autoI;
    /*////////////////////////////////////////////
        함수명: autoSlide
        기능: 자동넘기기 셋팅함수(인터발함수)
    */ ////////////////////////////////////////////
    var autoSlide = function () {
        autoI = setInterval(function () {
            snum++;
            if(snum===sldCnt)snum=0;
            
            sldFn(snum);
            
        }, 3000);
        
    }; ////// autoSlide함수 //////////////////////
    //////////////////////////////////////////////

    // 할당형함수 아래에서 처음 호출해야함!
    autoSlide(); //최초호출!


    // 타임아웃변수(쓰나미방지용 지우기변수)
    var autoT;
    /*////////////////////////////////////////////
        함수명: clearAuto
        기능: 자동넘김 지우기함수(클리어인터발함수)
    */ ////////////////////////////////////////////
    var clearAuto = function () {

        // 자동넘김 할당된 변수를 지운다(autoI)
        clearInterval(autoI);
        // 타임아웃 실행쓰나미 방지용 타임아웃 지우기를 꼭한다!
        clearTimeout(autoT);

        // 안건드리면 5초후 다시 자동호출하기!
        // 매번 호출될때 위에서 지우므로 단 하나만 남아있음!
        autoT = setTimeout(autoSlide, 5000);

    }; ////// clearAuto함수 /////////////////////////
    ////////////////////////////////////////////////


///////////////////////////////////////////////////////
 //// 할인 배너 이동하기 //////////
    // 클릭이벤트 대상: .upb , .dwb
    // 변경 대상: .halban ul
    let hban = $(".com_box ul");
    // 광클금지변수
    let prot = 0; //0-허용,1-불허용
    ///////////////////////////////    
    // 위로 이동버튼 클릭시
    $(".lb").click(function (e) {

        e.preventDefault(); //기본이동막기
        
        //console.log("왼쪽버튼클릭");

        /// 광클금지 /////////////////////////
        if (prot) return false; //1이면 돌아가
        prot = 1; //1로만들어 잠금!
        setTimeout(function () {
            prot = 0;
        }, 400); //0.4초후에 해제!
        ////////////////////////////////////
        
        // 자동이동지우기
        // clearAuto2();

        // 1. 대상이동하기: top값을 하나의 높이만큼이동함
        hban.animate({
                left: "-148px"
            }, 400, "easeOutCubic",
            function () { //애니후
                // 맨앞li 맨뒤로 보내기(동시에 top값 0)
                $(this).append(hban.find("li").first())
                    .css({
                        left: "0"
                    });

            }); /// animate /////


    }); ////// click ////////////////

    // 아래로 이동버튼 클릭시 ///
    $(".rb").click(function (e) {

        e.preventDefault(); //기본이동막기
        
       // console.log("오른쪽버튼클릭");

        /// 광클금지 /////////////////////////
        if (prot) return false; //1이면 돌아가
        prot = 1; //1로만들어 잠금!
        setTimeout(function () {
            prot = 0;
        }, 400); //0.4초후에 해제!
        ////////////////////////////////////
        
        // 자동이동지우기
        // clearAuto2();

        // 1. 먼저 맨뒤 li를 맨앞으로 이동과 동시에
        // top값을 -92px 즉, li하나가 위에 나가있는 위치로 변경!
        hban.prepend(hban.find("li").last())
            .css({
                left: "-148px"
            })
            // 2. top값을 0으로 애니메이션 하기
            .animate({
                left: "0"
            }, 400, "easeOutCubic"); //// animate ///


    }); ///////////// click //////////////
/////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////
    ///////// 패밀리 사이트 선택박스 변경시 이동하기 ///
    // change 이벤트 대상: #fslink
    // 변경내용: 새창열고 사이트 이동하기
    // 선택박스의 선택을 변경할때 발생하는 이벤트
    //////////////////////////////////////////////
    
        
        
        $("#fslink").change(function(){
            let url = $(this).val();
            console.log(url);
            window.open().location.href = url;
        });
        
        
        
    });/////////////// 로드구역 ///////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
        
        
       
       
      /* $("#btn01").click(function(){
           //console.log("나야나1");
           $("#slide img").attr("src","images/big01.jpg")
       });////// click /////////
       $("#btn02").click(function(){
           //console.log("나야나2");
           $("#slide img").attr("src","images/big02.jpg")
       });////// click /////////
       $("#btn03").click(function(){
           //console.log("나야나3");
           $("#slide img").attr("src","images/big03.jpg")
       });////// click /////////
       $("#btn04").click(function(){
           //console.log("나야나4");
           $("#slide img").attr("src","images/big04.jpg")
       });////// click /////////
       $("#btn05").click(function(){
           //console.log("나야나5");
           $("#slide img").attr("src","images/big05.jpg")
       });////// click /////////
        
        */
  
     
