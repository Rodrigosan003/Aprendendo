import java.util.Scanner;

public class DiasDaSemana {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Digite um número de 1 a 7 para descobrir o dia da semana: ");
        int numero = scanner.nextInt();
        
        String dia = obterDiaDaSemana(numero);
        
        System.out.println("Dia da semana: " + dia);
        
        scanner.close();
    }
    
    public static String obterDiaDaSemana(int numero) {
        switch(numero) {
            case 1:
                return "Segunda-feira";
            case 2:
                return "Terça-feira";
            case 3:
                return "Quarta-feira";
            case 4:
                return "Quinta-feira";
            case 5:
                return "Sexta-feira";
            case 6:
                return "Sábado";
            case 7:
                return "Domingo";
            default:
                return "Número inválido! Digite um número de 1 a 7.";
        }
    }
}
