import java.util.Scanner;

// 7. Leia um número e exiba seu dobro.
public class Main {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite um número: ");
        int numero = scanner.nextInt();

        //O dobro do número
        int dobroNumero = numero * 2;
        System.out.println("O dobro do número " + numero + " é: " + dobroNumero);
    }
}