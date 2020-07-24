
function fish() {
    var i = document.getElementById("f1");
    var t1 = document.getElementById("t1");
    t1.value = 0
    var fishtotal = i.value * 79;
    t1.value = fishtotal;
    total()
    // sum=fishtotal
    // biryani(sum)
}
function biryani() {
    var i = document.getElementById("b2");
    var t2 = document.getElementById("t2");
    var biryanitotal = i.value * 100;
    t2.value = biryanitotal;
    total()
    // sum=sum+biryanitotal
    // bbiryani(sum)
}
function bbiryani() {
    var i = document.getElementById("b1");
    var t3 = document.getElementById("t3");
    var bbiryanitotal = i.value * 89;
    t3.value = bbiryanitotal;
    total()
    // sum=sum+bbiryanitotal;
    // cm(sum)
}
function cm() {
    var i = document.getElementById("c1");
    var t4 = document.getElementById("t4");
    var cmtotal = i.value * 80;
    t4.value = cmtotal;
    total()
    // sum=sum+cmtotal
    // cl(sum)
}
function cl() {
    var i = document.getElementById("c2");
    var t5 = document.getElementById("t5");
    var cltotal = i.value * 90;
    t5.value = cltotal;
    total()
    // sum=sum+cltotal;
    // cc(sum)
}
function cc() {
    var i = document.getElementById("c3");
    var t6 = document.getElementById("t6");
    var cctotal = i.value * 95;
    t6.value = cctotal;
    total()
    // sum=sum+cctotal
    // vb(sum)
}
function vb() {
    var i = document.getElementById("v1");
    var t7 = document.getElementById("t7");
    var vbtotal = i.value * 84;
    t7.value = vbtotal;
    total()
    // sum=sum+vbtotal;
    // vn(sum)
}
function vn() {
    var i = document.getElementById("v2");
    var t8 = document.getElementById("t8");
    var vntotal = i.value * 90;
    t8.value = vntotal;
    total()
    // sum=sum+vntotal
    // mp(sum)
}


function mp() {
    var i = document.getElementById("m1");
    var t9 = document.getElementById("t9");
    var mptotal = i.value * 100;
    t9.value = mptotal;
    total()
    // sum=sum+mptotal
    // ac(sum)
}
function ac() {
    var i = document.getElementById("a1");
    var t10 = document.getElementById("t10");
    var actotal = i.value * 110;
    t10.value = actotal;
    total()
    // sum=sum+actotal
    // cr(sum)
}
function cr() {
    var i = document.getElementById("c7");
    var t11 = document.getElementById("t11");
    var crtotal = i.value * 120;
    t11.value = crtotal;
    total()
    // sum=sum+crtotal
    // mc(sum)
}
function mc() {
    var i = document.getElementById("m121");
    var t13 = document.getElementById("t13");
    var mctotal = i.value * 120;
    t13.value = mctotal;
    total()
    // sum=sum+mctotal
    // bc(sum)
}
function bc() {
    var i = document.getElementById("b21");
    var t12 = document.getElementById("t12");
    var bctotal = i.value * 135;
    t12.value = bctotal;
    total()
    // sum=sum+bctotal
    // pb(sum)
}
function pb() {
    var i = document.getElementById("p1");
    var t14 = document.getElementById("t14");
    var pbtotal = i.value * 125;
    t14.value = pbtotal;
    total()
    // sum=sum+pbtotal
    // vgb(sum)
}

function vgb() {
    var i = document.getElementById("vg1");
    var t15 = document.getElementById("t15");
    var vgbtotal = i.value * 130;
    t15.value = vgbtotal;
    total()
    // sum=sum+vgbtotal
    // pm(sum)
}
function pm() {
    var i = document.getElementById("pm1");
    var t16 = document.getElementById("t16");
    var pmtotal = i.value * 160;
    t16.value = pmtotal;
    total()
    // sum=sum+pmtotal
    // ch(sum)
}
function ch() {
    var i = document.getElementById("ch1");
    var t17 = document.getElementById("t17");
    var chtotal = i.value * 125;
    t17.value = chtotal;
    // sum=sum+chtotal
    total()
    // mh(sum)
}
function mh() {
    var i = document.getElementById("mh1");
    var t18 = document.getElementById("t18");
    t18.value = 0
    var mhtotal = i.value * 90;
    t18.value = mhtotal;
    // sum=sum+mhtotal
    // console.log(sum)
    total()
}
function total() {
    var sum = 0
    var x = document.getElementsByClassName("form-control")
    var y = document.getElementsByClassName("food")
    for (let i = 0; i < y.length; i++) {
        if (x[i].value !== NaN) {
            sum = sum + Number(x[i].value) * Number(y[i].innerHTML)
        }
    }

    // sum=parseInt(t1.value)+parseInt(t2.value)+parseInt(t3.value)+parseInt(t4.value)+parseInt(t5.value)+parseInt(t6.value)+parseInt(t7.value)+parseInt(t8.value)+parseInt(t9.value)+parseInt(t10.value)+parseInt(t11.value)+parseInt(t12.value)+parseInt(t13.value)+parseInt(t14.value)+parseInt(t15.value)+parseInt(t16.value)+parseInt(t17.value)+parseInt(t18.value);
    //sum=parseInt(t1.value)+parseInt(t18.value)
    document.getElementById("totsum").innerHTML = sum;
    sessionStorage.setItem('cost', sum);
}

function checkout() {

    document.getElementById("final").value = document.getElementById("totsum").innerHTML
    console.log(document.getElementById("final").value)
}
$(document).ready(function () {
    var user = sessionStorage.getItem("user");

    console.log("here");
    if (user == null) {
        console.log("here");
        window.location.href = '/index.html';
    }
});
$('#logout_link').click(function () {
    sessionStorage.removeItem("user");
    window.location.href = '/index.html';
});
$('#btn').click(function () {
    var data={};
    $.ajax({
        type: "POST",
        url: "http://localhost:3007/carttran/",
        data: JSON.stringify(data),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (d) {
            if (d.code == 400) {
                alert('Invalid username and password');
                return false;
            }
            
            // console.log(sum);
            // alert(sessionStorage.getItem("cost"));
            window.location.href = '/tran.html';
        },
        error: function (jqXHR) {
            alert('Invalid username and password');
        }
    });
});