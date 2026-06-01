# 📘 Guia Completo do Projeto Agrinho Sustentável

## 1. Visão Geral

ESSE PROJETO TEM COMO OBJETIVO FEITO POR BRUNO PERANDRÉ DO 3 ANOS DO ENSINO MÉDIO DO COLEGIO ESTUDAL CURITIBA EM PARANAVAI

O **Agrinho Sustentável** é uma aplicação web interativa que calcula o consumo diário e mensal de água de uma residência. O projeto foi desenvolvido com o objetivo de educar estudantes e famílias sobre o impacto do uso de água no dia a dia, incentivando práticas conscientes de economia hídrica.

**Tema:** Sustentabilidade e Conservação de Água
**Tipo:** Aplicação Web Responsiva
**Tecnologias:** HTML5 semântico, CSS3 e JavaScript vanilla

---

## 2. Funcionalidades Principais

### 2.1 Calculadora de Consumo
- **Entrada de dados personalizada:**
  - Número de pessoas na casa
  - Frequência e duração de banhos
  - Número de descargas de vaso sanitário
  - Quantidade de lavagens de roupa por semana
  - Consumo de água no jardim

- **Cálculos realizados:**
  - Consumo diário de água (em litros)
  - Consumo mensal de água (em litros)
  - Comparação com meta sustentável (100L por pessoa/dia)
  - Cálculo de economia possível em litros/mês

### 2.2 Feedback Visual
- Barra de progresso que mostra o consumo em relação ao recomendado
- Mensagens de feedback personalizadas:
  - ✅ Quando o consumo está dentro do recomendado
  - ⚠️ Quando o consumo está acima do recomendado
- Emoji e cores para melhor visualização

### 2.3 Dicas de Sustentabilidade
- Seção com recomendações práticas de economia de água
- Exemplos visuais em cards informativos
- Sugestões como: reduzir tempo de banho, reaproveitar água, consertar vazamentos

---

## 3. Estrutura do Projeto

```
Agrinho-Sustentável/
├── index.html        # Conteúdo HTML semântico
├── style.css         # Estilos responsivos e modernos
├── script.js         # Lógica de cálculo e interação
├── README.md         # Documentação principal
└── guia do projeto.md # Este arquivo
```

### 3.1 Componentes HTML
- **Header:** Logo "Agro Sustentável" com tagline motivacional
- **Seção Intro:** Apresentação e contexto
- **Formulário:** 6 campos para entrada de dados
- **Seção de Resultados:** Exibição dinâmica dos cálculos
- **Seção de Dicas:** Cards informativos sobre economia
- **Footer:** Créditos e informações do projeto

### 3.2 Elementos CSS Principais
- **Paleta de cores:** Tons de verde (sustentabilidade)
  - Verde escuro: `#0d5c2f`
  - Verde principal: `#2f9e44`
  - Verde claro: `#8ce99a`
  
- **Efeitos visuais:**
  - Fundos com gradientes e padrões radiais
  - Cards com efeito glassmorphism (backdrop blur)
  - Sombras suaves e bordas arredondadas
  - Design responsivo para mobile, tablet e desktop

### 3.3 Lógica JavaScript
- **Constantes de consumo:**
  - Banho: 12 litros por minuto
  - Descarga: 6 litros por uso
  - Máquina de lavar: 80 litros por ciclo

- **Função principal:** `calculateWaterConsumption()`
  - Calcula consumo diário de cada atividade
  - Retorna totais diários e mensais
  - Compara com meta sustentável

- **Interatividade:**
  - Validação de formulário
  - Formatação de números em português
  - Exibição dinâmica de resultados
  - Limpeza de campos

---

## 4. Como Usar a Aplicação

### 4.1 Passo a Passo para o Usuário
1. Abra `index.html` em um navegador web
2. Preencha os campos com informações sobre o consumo de água em casa:
   - Número de pessoas
   - Quantidade de banhos por dia
   - Duração média dos banhos
   - Número de descargas
   - Lavagens de roupa por semana
   - Uso de água no jardim
3. Clique no botão **"Calcular consumo"**
4. Veja o resultado com:
   - Consumo diário e mensal
   - Comparação com a meta sustentável
   - Possibilidade de economia
   - Barra de progresso visual
   - Feedback personalizado

### 4.2 Opções Adicionais
- **Botão "Limpar":** Reseta todos os campos e resultados
- **Valores padrão:** O formulário vem preenchido com valores de exemplo

---

## 5. Constantes e Cálculos

### 5.1 Fórmulas Utilizadas

**Consumo diário de banho:**
```
Consumo = Pessoas × Banhos/dia × Tempo(min) × 12 L/min
```

**Consumo diário de descarga:**
```
Consumo = Total descargas/dia × 6 L
```

**Consumo diário de máquina:**
```
Consumo = (Lavagens/semana × 80 L) ÷ 7
```

**Consumo diário de jardim:**
```
Consumo = Uso semanal ÷ 7
```

**Total mensal:**
```
Total = (Consumo diário) × 30
```

**Meta recomendada:**
```
Meta = Pessoas × 100 L/dia
```

### 5.2 Padrões de Sustentabilidade
- **Meta sugerida:** 100 litros por pessoa por dia
- **Economia possível:** Diferença entre consumo atual e meta sustentável

---

## 6. Acessibilidade

O projeto segue boas práticas de acessibilidade:
- Uso de `aria-labelledby` para associar títulos a seções
- Uso de `aria-live="polite"` na área de resultados
- Uso de `role="progressbar"` na barra de progresso
- Inputs semânticos com `required` e atributos `min`
- Estrutura HTML semântica com `<header>`, `<main>`, `<footer>`, `<section>`, `<article>`

---

## 7. Personalização e Extensões

### 7.1 Possíveis Melhorias
- Adicionar gráficos com Chart.js ou D3.js
- Implementar histórico de cálculos (localStorage)
- Comparar consumo de diferentes famílias
- Gamificação com desafios de economia
- Integração com dados públicos de consumo médio

### 7.2 Modificar Constantes
Para alterar os valores de consumo, edite os constantes no `script.js`:
```javascript
const litersPerMinuteShower = 12;      // Litros por minuto de chuveiro
const litersPerFlush = 6;              // Litros por descarga
const litersPerWashLoad = 80;          // Litros por ciclo de máquina
```

---

## 8. Requisitos Técnicos

- **Navegador:** Qualquer navegador moderno (Chrome, Firefox, Safari, Edge)
- **JavaScript:** ECMAScript 2015 ou superior
- **Internet:** Necessária apenas para carregar as fontes do Google Fonts
- **Compatibilidade:** Desktop, tablet e mobile

---

## 9. Autor e Créditos

**Criado por:** Bruno Perandré Nunes dos Santos

**Projeto:** Agrinho - Sustentabilidade no campo e na cidade

**Objetivo:** Promover educação ambiental e conscientização sobre o uso racional de água

---

## 10. Licença e Uso

Este projeto é fornecido para fins educacionais. Sinta-se livre para modificar, distribuir e usar em projetos escolares e educacionais.

---

**Última atualização:** junho de 2026
