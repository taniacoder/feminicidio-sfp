	function responsive() {
	    this.altura = window.innerHeight
	    this.ancho = window.innerWidth
	    var r = document.getElementById("none")
	    var cf_r = function() {
	        var cf = document.getElementById("container")
	        if (ancho < 768){
	        cf.style.height = altura-48 + "px"
	    	}
	    	else{
	    	cf.style.height = altura + "px"	
	    	}
	    }
	    if (r && ancho < 768) {
	        r.style.display = 'none';
	        cf_r()
	    } else {
	        r.style.display = 'block';
	        cf_r()
	    }
	}

	$(window).load(function() {
	    responsive();
	    obtener_modal(ancho)
	    window.addEventListener('resize', responsive);
	    poner_modal()	    
	});

	$(document).on('click', '#ver', function() {
	    $('html,body').animate({scrollTop: $("#section1").offset().top}, 800);
	});

	function poner_modal() {
	    var chichico = document.getElementsByClassName("chichico")
	    for (var i = 0; i < chichico.length; i++) {
	        var modal = document.createElement("div");
	        modal.innerHTML = '<a href= "" type="button" data-toggle="modal" data-target=#' + [i] + '><i class="fa fa-play-circle-o fa-5x" aria-hidden="true"></i></a>'
	        chichico[i].appendChild(modal)
	    }
	}

	function obtener_modal(ancho) {
	    var modal_full_screen = document.querySelectorAll("#modal-fullscreen")
	    for (var j = 0; j < modal_full_screen.length; j++) {
	        modal_full_screen[j].setAttribute('id', j);
	        var modal_dialog = document.createElement("div")
	        modal_dialog.className = "modal-dialog"
	        modal_dialog.innerHTML = '<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel">Modal title</h4></div><div class="modal-footer"></div></div>'
	        modal_full_screen[j].appendChild(modal_dialog)
	    }

	    var obtener_md = document.getElementsByClassName("modal-content")
	    for (var k = 0; k < obtener_md.length; k++) {
	        switch (obtener_md[k]) {
	            case obtener_md[0]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/tdM_ArIOkl8" frameborder="0" allowfullscreen></iframe><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nam ad, maxime, facere aspernatur nobis praesentium magni enim odit neque suscipit quam dolore sapiente perferendis. Cum nemo laborum inventore! Quia facilis cumque quasi architecto sapiente laudantium optio autem asperiores illum officia, quidem voluptatem hic in molestias vel eveniet itaque, praesentium magnam recusandae temporibus culpa quam maxime facere vitae. Tempore aliquam possimus eum quis ratione consequuntur quisquam minus explicabo ex voluptatum in eos eaque recusandae, fuga sapiente, sed, doloremque perspiciatis eius laboriosam modi nesciunt accusamus. Quam qui sint eos, quas odio ipsa obcaecati, a molestiae commodi iure voluptates asperiores! Provident deserunt veritatis ullam maxime recusandae, exercitationem quidem, laborum repudiandae necessitatibus minima voluptatum dicta magni placeat alias error nisi veniam, expedita quis animi? Aliquam molestiae, quidem cupiditate. Odit quibusdam nihil esse at a, repellat ab assumenda nesciunt quia ipsum beatae ducimus nobis reiciendis facere maiores qui ipsam sed cumque molestias, voluptatibus perferendis cupiditate dolor iste. Laborum debitis voluptates provident eos non et est minima, neque expedita animi fugiat eveniet totam magnam iusto dicta ipsum nesciunt a mollitia rem unde enim, libero quod. Est repellat, dolore illum. At, possimus, harum ducimus ipsam alias ex sit ea in. Dolor velit nesciunt eos a quibusdam commodi vitae totam ipsam aliquam quam. Quasi quidem dignissimos voluptas quas nesciunt vero explicabo, deleniti nisi labore. Nostrum quis iusto id ipsa adipisci sunt eum pariatur blanditiis architecto est labore, tenetur libero, quisquam cum magnam sint tempore doloremque unde ipsum incidunt quasi consectetur. Sit quas, deleniti enim voluptas. Voluptate, perspiciatis. Minima ducimus quidem numquam culpa quia dicta eaque saepe nam commodi distinctio delectus veritatis, eius. Unde repudiandae vitae adipisci voluptate natus labore minima autem ipsa, fugit, atque, animi itaque ducimus dolore voluptas corporis vero necessitatibus cupiditate, ut ipsum non. Tempore laboriosam rerum voluptatibus, porro mollitia doloribus deleniti voluptatum aspernatur sint.</div>'
	                obtener_md[0].appendChild(modal_body)
	                break;
	            case obtener_md[1]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[1].appendChild(modal_body)
	                break;
	            case obtener_md[2]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[2].appendChild(modal_body)
	                break;
	            case obtener_md[3]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[3].appendChild(modal_body)
	                break;
	            case obtener_md[4]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[4].appendChild(modal_body)
	                break;
	            case obtener_md[5]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[5].appendChild(modal_body)
	                break;
	            case obtener_md[6]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[6].appendChild(modal_body)
	                break;
	            case obtener_md[7]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[7].appendChild(modal_body)
	                break;
	            case obtener_md[8]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[8].appendChild(modal_body)
	                break;
	        }
	        obtener_md[k].insertBefore(modal_body, obtener_md[k].childNodes[1]);
	        if (ancho < 601) {
	            $('.modal-body').children('iframe').css("height", "180");;
	        }

	        if (ancho > 600 && ancho<1000) {
	            $('.modal-body').children('iframe').css("height", "250");;
	        }
	    }
	    footer_modal()
	}

	function footer_modal() {
	    var poner_redes = document.getElementsByClassName("modal-footer")
	    for (z = 0; z < poner_redes.length; z++) {
	        var redes = document.createElement("div")
	        redes.innerHTML = '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
	        poner_redes[z].appendChild(redes)
	    }
	}

$(".modal-fullscreen").on('show.bs.modal', function () {  setTimeout( function() {    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");  }, 0);});
$(".modal-fullscreen").on('hidden.bs.modal', function () {  $(".modal-backdrop").addClass("modal-backdrop-fullscreen");});