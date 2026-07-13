CREATE DATABASE IF NOT EXISTS db_laboratorio;
USE db_laboratorio;

CREATE TABLE clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    cidade VARCHAR(50)
);

INSERT INTO clientes (nome, cidade) VALUES
('Ana', 'São Paulo'),
('Bruno', 'Rio de Janeiro'),
('Carla', 'Belo Horizonte'),
('Daniel', 'Curitiba'),
('Fernanda', 'Recife');

-- Visualizar dados iniciais
SELECT * FROM clientes;

-- 1. UPDATE sem WHERE
-- UPDATE clientes SET cidade = 'Marte';

-- 2. DELETE sem WHERE
-- DELETE FROM clientes;

-- 3. SQL_SAFE_UPDATES
-- SET SQL_SAFE_UPDATES = 1;

-- 4. Transações e ROLLBACK
-- START TRANSACTION;
-- UPDATE clientes SET cidade = 'Plutão';
-- ROLLBACK;
-- COMMIT;

-- 5. Exercícios práticos:
-- Atualizar Ana para Paris
-- Apagar apenas Daniel
-- Transação para atualizar todos para Lua e desfazer
-- DELETE dentro de transação e ROLLBACK