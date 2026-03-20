CREATE DATABASE IF NOT EXISTS db_treinamento;
USE db_treinamento;

CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(120) UNIQUE,
    telefone VARCHAR(20),
    cidade VARCHAR(80),
    estado CHAR(2),
    data_cadastro DATE
);

INSERT INTO clientes (nome, email, telefone, cidade, estado, data_cadastro) VALUES
('Ana Silva', 'ana.silva@email.com', '11999990000', 'São Paulo', 'SP', '2023-02-15'),
('Carlos Pereira', 'carlos.p@email.com', '21988887777', 'Rio de Janeiro', 'RJ', '2023-05-22'),
('Fernanda Souza', 'fernanda.s@email.com', '31977776666', 'Belo Horizonte', 'MG', '2022-12-01'),
('João Mendes', 'joao.m@email.com', '41955554444', 'Curitiba', 'PR', '2023-08-09'),
('Mariana Oliveira', 'mariana.o@email.com', '81944443333', 'Recife', 'PE', '2023-04-18');

CREATE TABLE produtos (
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    nome_produto VARCHAR(80),
    categoria VARCHAR(50),
    preco DECIMAL(10,2),
    estoque INT
);

INSERT INTO produtos (nome_produto, categoria, preco, estoque) VALUES
('Notebook Lenovo', 'Informática', 3500.00, 12),
('Mouse Gamer Logitech', 'Periféricos', 250.00, 35),
('Teclado Mecânico Redragon', 'Periféricos', 400.00, 20),
('Monitor LG 27"', 'Informática', 1200.00, 15),
('Cadeira Gamer DXRacer', 'Móveis', 1800.00, 5);