CREATE DATABASE IF NOT EXISTS db_biblioteca;
USE db_biblioteca;

CREATE TABLE autores (
    id_autor INT PRIMARY KEY AUTO_INCREMENT,
    nome_autor VARCHAR(100),
    nacionalidade VARCHAR(50)
);

INSERT INTO autores (nome_autor, nacionalidade) VALUES
('Machado de Assis', 'Brasileiro'),
('Clarice Lispector', 'Brasileira'),
('J. K. Rowling', 'Britânica'),
('George R. R. Martin', 'Americano'),
('J. R. R. Tolkien', 'Britânico');

CREATE TABLE categorias (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nome_categoria VARCHAR(50)
);

INSERT INTO categorias (nome_categoria) VALUES
('Romance'),
('Fantasia'),
('Suspense'),
('Ficção Científica'),
('Biografia');

CREATE TABLE livros (
    id_livro INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(150),
    id_autor INT,
    id_categoria INT,
    ano_publicacao INT,
    quantidade INT,
    FOREIGN KEY (id_autor) REFERENCES autores(id_autor),
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

INSERT INTO livros (titulo, id_autor, id_categoria, ano_publicacao, quantidade) VALUES
('Dom Casmurro', 1, 1, 1899, 5),
('A Hora da Estrela', 2, 1, 1977, 3),
('Harry Potter e a Pedra Filosofal', 3, 2, 1997, 7),
('A Guerra dos Tronos', 4, 2, 1996, 4),
('O Senhor dos Anéis', 5, 2, 1954, 6);