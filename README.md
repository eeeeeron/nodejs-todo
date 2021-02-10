# Node.js TODO

Aplicação com funcionalidades de criação, alteração, exclusão, listagem de todos e listagem de item específico

### Criação de tarefa

[/novaTarefa](http://localhost:5000/novaTarefa)

Sem parâmetros enviados na URL, parâmetros enviados no *body*

##### Exemplo

> {<br>
> &nbsp;&nbsp;&nbsp;&nbsp;"tarefa":"Terminar artigo de Node.js",<br>
> &nbsp;&nbsp;&nbsp;&nbsp;"descricao":"Explicar como funciona a tecnologia",<br>
> &nbsp;&nbsp;&nbsp;&nbsp;"responsavel":"Victor Hugo"<br>
> }

### Listagem de tarefas

[/tarefas](http://localhost:5000/tarefas)

Sem parâmetros enviados na URL, sem parâmetros enviados no *body*

### Listagem de tarefa específica

[/tarefa/1](http://localhost:5000/tarefa/1)

Parâmetro enviado na URL, no caso, o código de identificação da tarefa, sem parâmetros enviados no *body*

### Alteração de tarefa

[/atualizar/tarefa/1](http://localhost:5000/atualizar/tarefa/1)

Parâmetro enviado na URL, no caso, o código de identificação da tarefa que deseja alterar, parâmetro enviado no *body*, no caso o campo "descrição" passando o texto alterado

##### Exemplo

> {<br>
> &nbsp;&nbsp;&nbsp;&nbsp;"descricao":"Nova descrição"<br>
> }

### Exclusão de tarefa

[/delete/tarefa/1](http://localhost:5000/delete/tarefa/1)

Parâmetro enviado na URL, no caso, o código de identificação da tarefa que deseja excluir, sem parâmetro enviado no *body*
