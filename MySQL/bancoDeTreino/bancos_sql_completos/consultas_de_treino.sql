-- Clientes com pedidos
SELECT DISTINCT c.nome, c.email
FROM clientes c
JOIN pedidos p ON c.id_cliente = p.id_cliente;

-- Produtos com estoque baixo
SELECT nome_produto, estoque FROM produtos WHERE estoque < 10;

-- Total gasto por cliente
SELECT c.nome, SUM(p.valor_total) AS total_gasto
FROM clientes c
JOIN pedidos p ON c.id_cliente = p.id_cliente
GROUP BY c.nome
ORDER BY total_gasto DESC;

-- Livros emprestados
SELECT l.titulo, u.nome AS usuario, e.data_emprestimo, e.status
FROM itens_emprestimo ie
JOIN livros l ON ie.id_livro = l.id_livro
JOIN emprestimos e ON ie.id_emprestimo = e.id_emprestimo
JOIN usuarios u ON e.id_usuario = u.id_usuario
WHERE e.status = 'Pendente';