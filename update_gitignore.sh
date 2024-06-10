#!/bin/bash

# Caminhos para os arquivos .gitignore
ROOT_GITIGNORE=.gitignore
FRONT_GITIGNORE=front_pagi/.gitignore
BACK_GITIGNORE=back_pagi/.gitignore

# Limpa o .gitignore raiz
> $ROOT_GITIGNORE

# Adiciona o conteúdo do .gitignore do front_pagi
echo "# Regras específicas do front_pagi" >> $ROOT_GITIGNORE
cat $FRONT_GITIGNORE >> $ROOT_GITIGNORE
echo "" >> $ROOT_GITIGNORE

# Adiciona o conteúdo do .gitignore do back_pagi
echo "# Regras específicas do back_pagi" >> $ROOT_GITIGNORE
cat $BACK_GITIGNORE >> $ROOT_GITIGNORE
echo "" >> $ROOT_GITIGNORE
