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
        } else if (idade >= 60) {
            System.out.println("Você é um idoso. Se cuide.");
        } else if (idade < 60 && idade >= 30) {
            System.out.println("Você está no Alge. Aproveite para se cuidar bastante.");
        } else if (idade < 30 && idade >= 18) {
            System.out.println("Você está na juventude. Cuide da sua capacitação pessoa.");
        } else if (idade < 18) {
            System.out.println("Adolecente!!! Só estude e se qualifique.");
        } else if (idade < 10 && idade > 1) {
            System.out.println("Criança!!! Vá brincar com coisas saldáveis.");
        } else {
            System.out.println("Por favor... Digite uma idade válida!!!");
        }
    }
}