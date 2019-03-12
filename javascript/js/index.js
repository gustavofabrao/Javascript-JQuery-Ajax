var App = {};

$(function()
{
    App.$formulario = $("#formulario");
    App.$tarefa = $("#tarefa");
    App.$lista = $("#lista");

    App.$formulario.submit(function (evento){
        event.preventDefault();

        var tarefa = App.$tarefa.val();
        App.$lista.append(App.LiTemplate(tarefa));
        App.$tarefa.val("");
        App.$tarefa.focus();
        
    });

    App.LiTemplate = function(tarefa){
        let html = "";
        html += "<li>" + tarefa + " <input type='button' class='excluir' value='Excluir'> </li>";

        return html;
    };

    App.$lista.on("click","button.excluir",function(){
        let $lista = $("#lista");

        $li.remove();
                
    });
});
