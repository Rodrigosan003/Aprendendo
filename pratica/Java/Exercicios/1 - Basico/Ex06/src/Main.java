import java.util.Scanner;

// 6. Converta Celsius para Fahrenheit.

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite a temperatura em Celsius: ");
        double celsius = scanner.nextDouble();

        //Lógica de conversão
        double fahrenheit = (celsius * 9.0 / 5.0) + 32;

        System.out.println(celsius + "ºC equivalem a " + fahrenheit + "ºF.");

        scanner.close();
    }
}