import java.util.Scanner;

// 10. Leia dois números e diga qual é o maior.

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o primeiro número: ");
        int num1 = scanner.nextInt();
        System.out.println("Digite o segundo número: ");
        int num2 = scanner.nextInt();

        // Comparação
        if (num1 > num2) {
            System.out.println("O primeiro número é maior. " + num1);
        } else if (num2 > num1) {
            System.out.println("O segundo número é maior. " + num2);
        } else {
            System.out.println("Os dois números são iguais. " + num1 + " e " + num2);
        }
    }
}