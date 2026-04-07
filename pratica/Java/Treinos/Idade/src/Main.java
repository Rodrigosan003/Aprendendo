import java.util.Scanner;

public class Main {
    public static void main (String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite sua idade: ");
        int idade = scanner.nextInt();

        // Verificação
        if (idade > 130) {
            System.out.println("Surpreendente!!! Você ainda existe?");
        } else if (idade <= 129 && idade >= 100) {
            System.out.println("Parabéns por chegar até aqui!!! Você tem " + "anos. Você é uma raridade.");
        } else if (idade > 60) {
            System.out.println();
        }
    }
}