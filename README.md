# 🌱 Agrinho Sustentável - Calculadora de Consumo de Água

> Projeto educativo para promover a sustentabilidade hídrica no campo e na cidade

![Status](https://img.shields.io/badge/status-ativo-brightgreen)
![Versão](https://img.shields.io/badge/versão-1.0-blue)
![Licença](https://img.shields.io/badge/licença-Educacional-green)

---
O PROJETO FEITO EM HMTL, CSS, JS DURANTE A AULA DE MATEMATICA II PARA A COMPETIÇÃO DE AGRINHO 2026 COM TEMA AGROFORTE EQUILIBRIO ENTRE SUSTENTABILIDADE E PRODUÇÃO !!!

## 📋 Sobre o Projeto

**Agrinho Sustentável** é uma aplicação web interativa que ajuda famílias e estudantes a entenderem e monitorarem seu consumo de água. Com uma interface intuitiva e cálculos precisos, a ferramenta fornece insights sobre como economizar água no dia a dia.

### 🎯 Objetivos
- ✅ Educação sobre consumo consciente de água
- ✅ Cálculo personalizado baseado em hábitos reais
- ✅ Feedback visual e recomendações práticas
- ✅ Incentivo para mudanças sustentáveis

---

## ⚡ Funcionalidades

### 💧 Calculadora de Consumo
Calcula o consumo de água considerando:
- **Banhos** - tempo e frequência
- **Descargas** - número de usos diários
- **Lavagem de roupas** - ciclos por semana
- **Jardim/Rega** - consumo semanal

### 📊 Resultados Detalhados
- Consumo diário em litros
- Consumo mensal estimado
- Meta sustentável sugerida (100L por pessoa/dia)
- Quantidade de água que pode ser economizada

### 🎨 Interface Amigável
- Design responsivo (mobile, tablet, desktop)
- Feedback visual com barra de progresso
- Mensagens personalizadas de incentivo
- Dicas práticas de economia

### ♿ Acessibilidade
- HTML semântico
- ARIA labels para leitores de tela
- Contraste adequado de cores
- Navegação intuitiva por teclado

---

## 🚀 Como Usar

### Instalação
1. Clone ou baixe este repositório
2. Abra `index.html` em seu navegador web

Nenhuma instalação adicional é necessária!

### Modo de Uso
1. Preencha os campos com seus dados de consumo de água
2. Clique em **"Calcular consumo"**
3. Veja o resultado e compare com a meta sustentável
4. Leia as dicas e implemente mudanças em casa

---

## 📁 Estrutura do Projeto

```
Agrinho-Sustentável/
├── index.html           # Página principal com formulário
├── style.css            # Estilos responsivos e moderno
├── script.js            # Lógica de cálculo em JavaScript
├── README.md            # Este arquivo
└── guia do projeto.md   # Documentação técnica detalhada
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Design responsivo com gradientes e efeitos visuais
- **JavaScript (ES6+)** - Lógica de cálculo e interatividade
- **Google Fonts** - Tipografia (Poppins)

---

## 📊 Fórmulas de Cálculo

### Consumo Diário

**Banhos:**
```
Consumo = (Pessoas × Banhos/dia × Duração em min) × 12 L/min
```

**Descargas:**
```
Consumo = Total descargas/dia × 6 L
```

**Máquina de Lavar:**
```
Consumo = (Lavagens/semana × 80 L) ÷ 7
```

**Jardim:**
```
Consumo = Consumo semanal ÷ 7
```

### Totais
```
Total Diário = Banhos + Descargas + Máquina + Jardim
Total Mensal = Total Diário × 30
Meta Sustentável = Pessoas × 100 L/dia
Economia Possível = Total Mensal - (Meta × 30)
```

---

## 🌍 Padrões de Sustentabilidade

- **Meta Recomendada:** 100 litros por pessoa por dia
- **Duração ideal de banho:** 5-8 minutos
- **Reaproveitar água:** De lavagens para rega de plantas
- **Conserto de vazamentos:** Economiza até 100 litros por dia

---

## 💡 Dicas de Economia

1. **🚿 Reduzir tempo de banho** - Cada minuto economiza ~12 litros
2. **♻️ Reaproveitar água** - Use água de lavar verduras para regar plantas
3. **🔧 Consertar vazamentos** - Um pingo constante desperdiça muita água
4. **🚽 Descargas conscientes** - Usar meia descarga quando possível
5. **🌱 Regar plantas de forma inteligente** - Molhe no final do dia para evitar evaporação

---

## 📱 Compatibilidade

| Navegador | Versão | Status |
|-----------|--------|--------|
| Chrome    | 90+    | ✅ |
| Firefox   | 88+    | ✅ |
| Safari    | 14+    | ✅ |
| Edge      | 90+    | ✅ |
| Mobile    | -      | ✅ |

---

## 🎓 Uso Educacional

Este projeto é ideal para:
- 📚 Aulas de Educação Ambiental
- 🏫 Projetos Escolares
- 👨‍👩‍👧‍👦 Conscientização Familiar
- 🌱 Programas de Sustentabilidade

---

## 🔧 Personalização

### Alterar Constantes de Consumo
Edite o arquivo `script.js`:
```javascript
const litersPerMinuteShower = 12;  // Litros/minuto do chuveiro
const litersPerFlush = 6;          // Litros por descarga
const litersPerWashLoad = 80;      // Litros por ciclo de máquina
```

### Modificar Cores
Edite o arquivo `style.css`:
```css
:root {
  --green-dark: #0d5c2f;
  --green: #2f9e44;
  --green-light: #8ce99a;
}
```

---

## 📈 Possíveis Extensões

- [ ] Gráficos de consumo ao longo do tempo
- [ ] Armazenamento local (localStorage)
- [ ] Comparação com média nacional
- [ ] Sistema de desafios e gamificação
- [ ] Exportar relatório em PDF
- [ ] API para dados de consumo público

---

## 👤 Autor

**Bruno Perandré Nunes dos Santos**

Projeto desenvolvido para a iniciativa **Agrinho - Sustentabilidade no campo e na cidade**

---

## 📄 Licença

Este projeto é fornecido para fins educacionais. Você é livre para usar, modificar e distribuir em contextos educacionais.

---

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Se você tem ideias para tornar este projeto melhor:
1. Teste a aplicação
2. Documente sua sugestão
3. Compartilhe suas ideias

---

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique se seu navegador é compatível
2. Limpe o cache e recarregue a página
3. Verifique o console do navegador (F12) para mensagens de erro

---

## 🌟 Agradecimentos

Obrigado por usar o Agrinho Sustentável! Juntos podemos fazer a diferença na conservação da água.

---

**Última atualização:** junho de 2026 | v1.0
