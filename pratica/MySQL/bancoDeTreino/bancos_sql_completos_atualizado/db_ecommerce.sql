CREATE DATABASE IF NOT EXISTS db_ecommerce;
USE db_ecommerce;

CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(120) UNIQUE,
    telefone VARCHAR(20),
    endereco VARCHAR(150),
    cidade VARCHAR(80),
    estado CHAR(2),
    data_cadastro DATE
);

INSERT INTO clientes (nome, email, telefone, endereco, cidade, estado, data_cadastro) VALUES
('Ana Souza', 'ana.souza@email.com', '11911112222', 'Rua das Flores, 123', 'São Paulo', 'SP', '2023-01-15'),
('Bruno Lima', 'bruno.lima@email.com', '21922223333', 'Av. Atlântica, 456', 'Rio de Janeiro', 'RJ', '2023-02-20'),
('Carla Nunes', 'carla.nunes@email.com', '31933334444', 'Rua Afonso Pena, 789', 'Belo Horizonte', 'MG', '2023-03-12'),
('Daniel Rocha', 'daniel.rocha@email.com', '41944445555', 'Rua XV de Novembro, 321', 'Curitiba', 'PR', '2023-04-08'),
('Fernanda Torres', 'fernanda.torres@email.com', '81955556666', 'Av. Boa Viagem, 987', 'Recife', 'PE', '2023-05-30');