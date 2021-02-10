# Node.js TODO

Aplicação com funcionalidades de criação, alteração, exclusão, listagem de todos e listagem de item específico

### Criação de tarefa

[/novaTarefa](http://localhost:5000/novaTarefa)

Sem parâmetros enviados na URL, parâmetros enviados no *body*

##### Exemplo

> {
>   "tarefa":"Terminar artigo de Node.js",\n
>   "descricao":"Explicar como funciona a tecnologia",\n
>   "responsavel":"Victor Hugo"
> }

### Listagem de tarefas

[/tarefas](http://localhost:5000/tarefas)

Sem parâmetros enviados na URL, sem parâmetros enviados no *body*

### Listagem de tarefa específica

[/tarefa/1](http://localhost:5000/tarefa/1)

parâmetro enviado na URL, no caso, o código de identificação da tarefa, sem parâmetros enviados no *body*

### Alteração de tarefa

[/atualizar/tarefa/1](http://localhost:5000/atualizar/tarefa/1)

parâmetro enviado na URL, no caso, o código de identificação da tarefa que deseja alterar, parâmetro enviado no *body*, no caso o campo "descrição" passando o texto alterado

##### Exemplo

> {
>   "descricao":"Nova descrição",
> }

### Exclusão de tarefa

[/delete/tarefa/1](http://localhost:5000/delete/tarefa/1)

parâmetro enviado na URL, no caso, o código de identificação da tarefa que deseja alterar, sem parâmetro enviado no *body*
