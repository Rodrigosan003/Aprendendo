import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int opcao = 0;

        while (opcao != 5) {
            System.out.println("\n=== CALCULADORA ===");
            System.out.println("1 - Soma");
            System.out.println("2 - Subtração");
            System.out.println("3 - Divisão");
            System.out.println("4 - Multiplicação");
            System.out.println("5 - Sair");
            System.out.print("Escolha uma opção: ");

            opcao = sc.nextInt();

            if (opcao >= 1 && opcao <= 4) {
                System.out.print("Digite o primeiro número: ");
                double num1 = sc.nextDouble();

                System.out.print("Digite o segundo número: ");
                double num2 = sc.nextDouble();

                switch (opcao) {
                    case 1:
                        System.out.println("Resultado: " + (num1 + num2));
                        break;
                    case 2:
                        System.out.println("Resultado: " + (num1 - num2));
                        break;
                    case 3:
                        if (num2 != 0) {
                            System.out.println("Resultado: " + (num1 / num2));
                        } else {
                            System.out.println("Erro: divisão por zero!");
                        }
                        break;
                    case 4:
                        System.out.println("Resultado: " + (num1 * num2));
                        break;
                }
            } else if (opcao != 5) {
                System.out.println("Opção inválida!");
            }
        }

        System.out.println("Encerrando calculadora...");
        sc.close();
    }
}