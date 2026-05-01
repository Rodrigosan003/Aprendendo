import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite seu nome: ");
        String nome = scanner.nextLine();
        System.out.println("Digite seu ano de nascimento: ");
        int nascimento = scanner.nextInt();
        System.out.println("Digite o ano atual: ");
        int anoAtual = scanner.nextInt();

        // Calcular idade.
        int idade = anoAtual - nascimento;
        String mensagem = "Olá " + nome + " você nasceu no ano de " + nascimento + " e no ano de " + anoAtual + " você tem " + idade + " anos.";

        System.out.println(mensagem);
    }
}