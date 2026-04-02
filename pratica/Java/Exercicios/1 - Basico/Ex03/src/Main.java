import java.util.Scanner;

// 3. Leia um nome pelo Scanner e exiba "Olá, <nome>".

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite seu nome: ");
        String nome = scanner.nextLine();
        System.out.println("Olá, " + nome);
    }
}