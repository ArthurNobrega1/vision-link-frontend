# Vision Link (Frontend)

- App mobile para se comunicar com ferramenta que auxilia a locomoção de deficientes visuais
- vamos usar as seguintes tecnologias: 
   - Typescript
   - React Native
   - Expo

## Instalação
Para rodar o projeto, siga os seguintes passos:

1. Clone o repositório:
   ```bash
   git clone https://github.com/ArthurNobrega1/vision-link-frontend.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo .env baseado no .env.example que existe no repositório
 
4. Configure a URL da API utilizada no aplicativo:
   ```bash
   # URL da API usada no aplicativo
   API_URL=http://10.0.2.2:3333  # Exemplo para uso local no emulador
   ```
   * Observação: Para usar o localhost no React Native, utilize o endereço http://10.0.2.2, que é um endereço especial para acessar o servidor local em um emulador Android.

5. Inicie o projeto:
   ```bash
   npm start
   ```
6. Após rodar o comando npm start, você pode escanear o QR Code gerado no terminal com o aplicativo Expo Go no seu smartphone para testar a aplicação (Lembre de estar na mesma ).

   * Observação: Se preferir, pode configurar uma SDK para emular o aplicativo diretamente no terminal. Instale o SDK por algum programa como o Android Studio. Após iniciar com npm start, pressione 'a' para abrir no emulador

## Padrão de commits
Utilizaremos como padrão de commits o conventional commits, são basicamente uma formalização das mensagens de commits. Isso vai facilitar o acompanhamento de mudanças.

````sh
<tipo>(<escopo>): <descrição>
````

`<tipo>`: Descreve o propósito do commit(obrigatório)

`<escopo>`: Mostra a área que o commit afeta.

`<descrição>`: Descreve o que o commit realiza(obrigatório)
    

## Tipos comuns de commit 

- `feat` : Para novas funcionalidades.

- `fix` : Para correção de bugs.

- `docs` : Para alterações na documentação.

- `style` : Para formatação, estilo de código, sem mudanças no código de produção.

- `refactor` : Para refatorações de código.

- `test` : Para adição ou modificação de testes.

- `chore` : Para tarefas de manutenção, como atualização de dependências.

## Exemplos de Mensagens de Commit
Aqui estão alguns exemplos de conventional commits

```sh
feat(login): adicionar funcionalidade de login 
```
```sh
fix(api): corrigir erro de rota 
```
## Equipe:

- Arthur Nóbrega Leite
- Augusto Souza Freitas Teixeira
- Guilherme de Medeiros Moura
- Victor de Souza Xavier Fernandes 
