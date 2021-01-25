//// 롯데콘서트홀 JS - main.js /////

///// 로드구역 //////////////////////////////
    $(function(){
        
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
    ///////////////////////////////////////////////




        
        
       
       
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
  
     
    });/////////////// 로드구역 ///////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
