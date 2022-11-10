import java.util.Scanner;

public class Ejercicio2 {
    public static void main(String[] args) {
        String cadena = null;
        boolean isPalindromo = false;

        cadena = getCadena();
        isPalindromo = setPalindromo(cadena);
        System.out.println(
                isPalindromo ? "La cadena introducida es un palindromo" : "La cadena introducida no es un palindromo");
    }

    private static String getCadena() {
        Scanner sc = new Scanner(System.in);
        String cadena;
        do {
            System.out.println("Introduce una cadena");
            cadena = sc.nextLine();
            if (cadena.length() < 1) {
                System.out.println("Se ha introducido una cadena longitud 0");
            }
            if (cadena.isBlank()) {
                System.out.println("Se ha introducido una cadena Vacia");
            }
        } while (cadena.isBlank());
        return cadena;
    }

    public static boolean setPalindromo(String cadena) {
        cadena = cadena.toLowerCase().replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o")
                .replace("ú", "u").replace(" ", "").replace(".", "").replace(",", "");
        String invertida = new StringBuilder(cadena).reverse().toString();
        System.out.println(invertida);
        return invertida.equals(cadena);
    }
}
