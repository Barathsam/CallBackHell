let p=document.getElementsByClassName("container")
let countDown=function (){
    setTimeout(function() {
        p[0].innerText="10"
        setTimeout(function() {
            p[0].innerText="9"
            setTimeout(function() {
                p[0].innerText="8";
                setTimeout(function() {
                    p[0].innerText="7";
                    setTimeout(function() {
                        p[0].innerText="6";
                        setTimeout(function() {
                            p[0].innerText="5";
                            setTimeout(function() {
                                p[0].innerText="4";
                                setTimeout(function() {
                                    p[0].innerText="3";
                                    setTimeout(function() {
                                        p[0].innerText="2";
                                        setTimeout(function() {
                                            p[0].innerText="1";
                                            setTimeout(function() {
                                                p[0].innerText="Happy Independence Day";
                        
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

window.onload=countDown