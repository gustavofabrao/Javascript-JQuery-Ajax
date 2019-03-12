var App = {}; 

$(function()
{
    let url = "http://dummy.restapiexample.com/api/v1/employees",
        $lista = $("#lista"),
		$botao = $("#botaoListar"),
		$divPag=  $("#paginador");
	var numitens=10; 
	var pagina;
	var dados, listado="", identificador, navegacao="", pag;		
    
    App.montaLista = function(pagina){
		var inicio, fim;
		if(pagina == 1){
			pagina = pagina-1;
			inicio = pagina;
		}
		else{
			inicio = (pagina-1)*numitens;
		}
		fim = inicio+numitens;
        let paginacao = dados.slice(inicio,fim)
			length = paginacao.length,
            html = "";
        
        for(i =0; i < length; i++){
            html += "<li>" + paginacao[i].employee_name +"</li>";
        }
		$lista.html(html);
		
    };
	
	App.MontaPaginacao = function(){
		for(j =1; j <= dados.length/numitens; j++){
            navegacao += "<button class='botaoPag' data-pagina=" + j + ">" + j + "</button> ";
        }
		if(navegacao != null){
			$divPag.html(navegacao);
		}
	};
	
	
	$botao.on("click",function(){
		$.ajax({
			url: url,			
			success: function(retorno){
				dados = JSON.parse(retorno);
				App.montaLista(1);
				if(listado == ""){
				App.MontaPaginacao();
				}
				listado = dados;				
			},
			error: function(){
				alert("Erro de conexao");
			}
		});
					
	});
	
	$divPag.on("click",".botaoPag",function(){
		let pagina = $(this).data("pagina");
		App.montaLista(pagina);
		
	});
	
});

