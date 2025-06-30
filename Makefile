# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: yzaoui <yzaoui@student.42.fr>              +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2025/06/28 07:17:06 by yzaoui            #+#    #+#              #
#    Updated: 2025/06/30 13:45:17 by yzaoui           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# Colors
GREEN  = \033[1;32m
BLUE   = \033[1;34m
YELLOW = \033[1;33m
RED    = \033[1;31m
NC     = \033[0m # No Color

# Help message
help:
	@echo -e "$(BLUE)✨ Makefile - Commandes disponibles ✨$(NC)"
	@echo -e ""
	@echo -e "$(YELLOW)🎯 Commandes :$(NC)"
	@echo -e "  $(BLUE)make production$(NC)  : Compile et démarre le serveur."
	@echo -e "  $(GREEN)make clean$(NC)      : Nettoie les fichiers générés."

production:
	@echo "🚀 Démarrage du serveur :"
	npm --prefix ./code run re

clean:
	@echo "🧹 Nettoyage :"
	npm --prefix ./code run clean
