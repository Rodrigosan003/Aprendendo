import java.util.Scanner;

// 5. Calcule a média de três números.

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Essa é a média de Três Números");

        System.out.println("Digite o primeiro número: ");
        int num1 = scanner.nextInt();
        System.out.println("Digite o segundo número: ");
        int num2 = scanner.nextInt();
        System.out.println("Digite o terceiro número ");
        int num3 = scanner.nextInt();

        int media = (num1 + num2 + num3) / 3;

        System.out.println("A media dos três números é: " + media);
    }
}