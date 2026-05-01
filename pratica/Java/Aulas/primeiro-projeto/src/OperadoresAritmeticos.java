public class OperadoresAritmeticos {
    public static void main(String[] args) {
        double pao = 10.50;
        double queijo = 7.00;
        double acucar = 1.00;
        double desconto = 5.00;
        int totalDiasDoMes = 30;

        double valorTotal = pao + queijo + acucar;
        double totalDescontado = valorTotal - desconto;
        double totalDividido = totalDescontado / 2;
        double valorTotalMensal = totalDescontado * totalDiasDoMes;

        System.out.println("Valor total = R$" + valorTotal);
        System.out.println("Com desconto = R$" + totalDescontado);
        System.out.println("Para dois fica = R$" + totalDividido);
        System.out.println("Total gasto no mês = R$" + valorTotalMensal);
    }
}
