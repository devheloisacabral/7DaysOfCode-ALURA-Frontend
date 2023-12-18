Pensando a fundo, existem N maneiras de deletar um item de uma lista. Você pode remover o primeiro item, o último, ou qualquer um do meio da lista. Cada uma dessas operações tem o seu próprio método dentro das documentações dos arrays em Javascript. Vamos falar mais sobre esses métodos na seção "Dicas".

Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?

A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.

Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.

Por fim, ele voltará para o ciclo inicial de perguntas.

Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.

Por exemplo: “Não foi possível encontrar o item dentro da lista!”

Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras.

Você pode fazer a procura do elemento que a pessoa deseja apagar da forma que quiser, usando métodos do Javascript para isso.

Existe o método .includes(elemento), que retorna true ou false se o array em questão contém o tal elemento ou não.

Existe também o método .indexOf(elemento), que retorna a posição desse elemento dentro do array, ou -1, caso não o encontre.

Já para a remoção em si, existem diferentes métodos. O método o shift, por exemplo, remove sempre o primeiro item da lista; o método pop remove o último; já o método splice remove um certo número de itens a partir de uma determinada posição. Escolha o que você achar que faz mais sentido para o seu programinha.