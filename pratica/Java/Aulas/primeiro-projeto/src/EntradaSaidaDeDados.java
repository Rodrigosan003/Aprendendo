import java.util.Scanner;

public class EntradaSaidaDeDados {
    public static void main(String[] args) {
        //System.out.println("Olá, eu faço impressão e pulo a linha.");
        //System.out.print("Eu faço a impressão na mesma linha.");
        //System.out.printf("Olá, eu faço a impressão formatada.");

        Scanner scanner = new Scanner(System.in);

        System.out.println("Olá, digite o seu nome: ");
        String nome = scanner.nextLine();
        System.out.println("Nome: " + nome);
    }
}
