public class Condicoes {
    public static void main(String[] args) throws Exception {
        String personagem = "Goku";

        if (personagem.equals("Vegeta")){
            System.out.println("Planeta Sayajin");
        } else if (personagem.equals("Goku")) {
            System.out.println("Planeta Terra");
        } else {
            System.out.println("Planeta Desconhecido");
        }
    }
}
