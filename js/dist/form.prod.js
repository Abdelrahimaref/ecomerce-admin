"use strict";function closeicon(){$(".card-cover").hide(350),$(".card-cover-reg").hide(350),$(".content-cover").show(350)}function x(){$(".card-cover").hide(350),$(".content-cover").hide(350),$(".card-cover-reg").show(350)}document.querySelector("#sendButton").addEventListener("click",function(){Swal.mixin({toast:!1,position:"center",showConfirmButton:!1,timer:7500}).fire({type:"success",title:"Request Send successfully We <br> will send message to you in your email soon!!"})}),$(".get-start").click(function(){$(".content-cover").hide(350),$(".card-cover").show(350)}),$(".close").click(function(){$(".card-cover").hide(350),$(".card-cover-reg").hide(350),$(".content-cover").show(350)});