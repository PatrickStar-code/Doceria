create table categoria (id serial primary key, nome text not null);

insert into categoria (nome) values ('Bolos');
insert into categoria (nome) values ('Doces');
insert into categoria (nome) values ('Tortas');
insert into categoria (nome) values ('Cupcakes');
insert into categoria (nome) values ('Pães Doces');

create table produto (id serial primary key, id_categoria int not null references categoria(id),
                      nome text not null, descricao text not null, preco int not null, destaque bool, img text);
                      
                      
INSERT INTO produto (id_categoria, nome, descricao, preco, destaque, img)
VALUES 
( 1, 'Bolo de Chocolate', 'Bolo de chocolate úmido com cobertura de ganache de chocolate.', 1000, true, 'https://www.estadao.com.br/resizer/bnSXilRbkNPM_OMXVdPBjSEvdrI=/720x503/filters:format(jpg):quality(80):focal(448x342:458x352)/cloudfront-us-east-1.images.arcpublishing.com/estadao/25HQQTDV6RCY3B44ZJ7VLCSB5M.jpg'),
( 1, 'Bolo de Morango', 'Bolo de morango fresco com cobertura de chantilly e morangos.', 1000, false, 'https://img.cybercook.com.br/receitas/12/bolo-de-morango-3-840x480.jpeg?q=75'),
( 1, 'Bolo de Baunilha', 'Bolo de Baunilha leve', 1000, false, 'https://www.receiteria.com.br/wp-content/uploads/bolo-de-baunilha-08-730x548.jpeg.webp'),
( 2, 'Brigadeiro', 'Doce Brasileiro feito de leite condensado, chocolate e manteiga, enrolado em granulados de chocolate.', 5.00, true, 'https://imgs.search.brave.com/KGnhjWNd4RC3ejCWLeexdMbfdrqXHOppTBfdh0i29e4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E0L0JyaWdhZGVp/cm8uanBn'),
( 2, 'Beijinho', 'Doce feito de leite condensado e coco enrolado em coco ralado.', 500, false, 'https://img.cybercook.com.br/imagens/receitas/803/beijinho-1-840x480.jpg?q=75'),
( 2, 'Trufa de chocolate', 'Trufa de chocolate', 500, false, 'https://imgs.search.brave.com/ebOTYP4YHaxCpbGDQN0FvwauKzuN3Zg6OpYwoXV9Jdc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9udGFlbmNhbnRh/LmNvbS5ici93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNC8wOS90/cnVmYS1kZS1jaG9j/b2xhdGUtZGUtbWFy/YWN1amE1LmpwZw'),
( 3, 'Torta de Abóbora', 'Torta de abóbora', 1000, true, 'https://s2-receitas.glbimg.com/pyf3fzAdSUdaRpCceAtHhOSjaVI=/0x0:652x434/1000x0/smart/filters:strip_icc()/g.glbimg.com/og/gs/gsat5/f/thumbs/materia/2019/08/12/abobora.jpg'),
( 3, 'Torta de Limão', 'Torta de limão', 1000, false, 'https://imgs.search.brave.com/eTCOMsy21cekwrOFI3c_N7eVdJjugm-aanjIUHIqC0w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29uZmVpdGVpcmFk/ZXN1Y2Vzc28uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzEwL3RvcnRhbGlt/YW8tcmVjZWl0YTUu/anBn'),
( 3, 'Torta de Morango', 'Torta de morango', 1000, false, 'https://imgs.search.brave.com/CidI6ES2U6FFfkDjfVNBh41fjlr3MwnRkFP6ZEpZ2Hs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ndWlh/ZGFjb3ppbmhhLmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wNi90b3J0/YS1tb3Vzc2UtbW9y/YW5nby5qcGc'),
( 4, 'Cupcake de Chocolate', 'Cupcake de Chocolate', 500, false, 'https://imgs.search.brave.com/U_o-da9xTKDcOUN9Egh4v1gF5ZBOXTLWMrzU8MI1KPE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZXUtMDEua2Mt/dXNlcmNvbnRlbnQu/Y29tLzU1OWJiN2Qz/LTg4YTQtMDFjMS03/OWEzLWRkNGQ1YjJk/MmJiMC8xOGNiNmNm/MS0xMTA1LTRjYzMt/YWJjZi00NDg0MzVl/ZTkyOTEvTWFyeSUy/MEJlcnJ5JTIwQ2hv/Y29sYXRlJTIwQ3Vw/Y2FrZXMlMjAlMjAo/MTQpLmpwZz93PTM4/NDAmcT04NSZhdXRv/PWZvcm1hdCZsb3Nz/bGVzcz0x'),
( 4, 'Cupcake de Morango', 'Cupcake de Morango', 500, false, 'https://imgs.search.brave.com/qAxPuQYf__fofnlALZiB_yyfBZIcBZ7tu4QjlF71UeI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC5z/dGF0aWcuY29tLmJy/L2JhbmNvZGVpbWFn/ZW5zL2F6L3FmL2Ew/L2F6cWZhMHdjbm84/aTZ2dGNmY2JxN2c5/enkuanBn'),
( 4, 'Cupcake de Banana', 'Cupcake de Banana', 500, false, 'https://imgs.search.brave.com/VN-m8LVdTMQeZcCvORjGGJgQdQaKmQ28AAnUMisKQkI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVsaWNpb3NpLmNv/bS9pbWFnZXMvMzAw/LzMyMC9jdXBjYWtl/cy1kZS1wbGF0YW5v/LTY2NS5qcGc'),
( 5, 'Rosquinha de Canela', 'Rosquinha de Canela', 500, false, 'https://imgs.search.brave.com/eWDQyuUHgGD2iBvzbhDqDY35ADjuOr6ZGQrPPPCTHnI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVjZWl0ZXJpYS5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRzL3Jvc3F1aW5oYS1j/YXNlaXJhLWZyaXRh/LTktNzMweDU0OC5q/cGVn'),
( 5, 'Sonho', 'Sonho', 500, true, 'https://imgs.search.brave.com/dpNCSoQ02JoTeNl5zQgLQHGT2Kh4XjbQW-5Sg4Fcj0o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2x1cnJwLmNv/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMTAvUCVDMyVB/M28tZGUtTWVsLTEw/MjR4NjgyLmpwZWc'),
( 5, 'Pão de Mel', 'Pão de mel', 500, false, 'https://imgs.search.brave.com/9WWGbBkrHIYpqqlLqvMUqglfLWWiEBktlb3Cp6akFMM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/LnByYXRpY2Fici5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMTAvUCVDMyVB/M28tZGUtTWVsLTEw/MjR4NjgyLmpwZWc');
