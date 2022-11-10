import java.util.*;
import java.util.InputMismatchException;

public class Ejercicio1 {
    public static void main(String[] args) throws Exception {
        String nombre = null, nombreMayor = null, nombreMenor = null;
        int edad = 0, edadMayor = 0, edadMenor = 100, contador = 0;

        do {
            nombre = getName();
            if (!nombre.equals("*")) {
                contador++;
                edad = getAge(1, 99);

                if (edad > edadMayor) {
                    edadMayor = edad;
                    nombreMayor = nombre;
                }
                if (edad < edadMenor) {
                    edadMenor = edad;
                    nombreMenor = nombre;
                }
            }
        } while (!nombre.equals("*"));

        System.out.println("Alumnos introducidos: " + contador);
        System.out.println("El alumno con mayor edad es: " + nombreMayor + ", " + edadMayor);
        System.out.println("El alumno con menor edad es: " + nombreMenor + ", " + edadMenor);
    }

    public static int getAge(int desde, int hasta) {
        int N = 0;
        Scanner sc = new Scanner(System.in);
        // Leer un número entero >= 0
        do {
            try {
                System.out.print("Introduce la edad: ");
                N = sc.nextInt();
            } catch (InputMismatchException ime) {
                System.err.println("¡Cuidado! Solo puedes insertar números. ");
                sc.next();
            }
        } while (N < desde || N > hasta);
        return N;
    }

    private static String getName() {
        Scanner sc = new Scanner(System.in);
        String nombre;
        do {
            System.out.print("Introduce el nombre o * para terminar: ");
            nombre = sc.nextLine();
        } while (nombre.isBlank());
        return nombre;
    }
}
