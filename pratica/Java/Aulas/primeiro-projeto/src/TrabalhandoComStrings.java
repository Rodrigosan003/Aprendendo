public class TrabalhandoComStrings {
    public static void main(String[] args) {
        String nome = "Rodrigo";
        String nomeDois = "Rodrigo";

        int tamanhoString = nome.length();
        boolean saoIguais = nome.equals(nomeDois);


        System.out.println("Olá " + nome + " seu nome tem " + tamanhoString + " caracteres.");
        System.out.println("Os nomes são iguais: " + saoIguais);
    }
}
